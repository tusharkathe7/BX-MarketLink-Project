
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, User, Mail, Lock, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode: 'signin' | 'signup';
  onAuthSuccess: (user: any) => void;
}

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode, onAuthSuccess }) => {
  const { toast } = useToast();
  const [mode, setMode] = useState(initialMode);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (mode === 'signup' && !formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (mode === 'signup' && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const user = {
        id: Date.now(),
        fullName: formData.fullName || 'User',
        email: formData.email,
        role: 'user'
      };
      
      // Store user in localStorage (for demo purposes)
      localStorage.setItem('bx_user', JSON.stringify(user));
      
      onAuthSuccess(user);
      onClose();
      
      toast({
        title: mode === 'signin' ? 'Welcome back!' : 'Account created successfully!',
        description: mode === 'signin' 
          ? 'You have been signed in successfully.' 
          : 'Welcome to BX MarketLink! You can now explore all features.',
      });
      
      // Reset form
      setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });
      setErrors({});
      
    } catch (error) {
      toast({
        title: 'Authentication failed',
        description: 'Please check your credentials and try again.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const switchMode = () => {
    setMode(mode === 'signin' ? 'signup' : 'signin');
    setErrors({});
    setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md overflow-hidden p-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <DialogHeader className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-6">
            <DialogTitle className="text-center text-2xl font-bold flex items-center justify-center gap-2">
              <User className="w-6 h-6" />
              {mode === 'signin' ? 'Welcome Back!' : 'Join BX MarketLink'}
            </DialogTitle>
            <p className="text-center text-primary-100 mt-2">
              {mode === 'signin' 
                ? 'Sign in to access your account and explore local vendors' 
                : 'Create your account to connect with local Bronx businesses'
              }
            </p>
          </DialogHeader>

          {/* Form */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <AnimatePresence mode="wait">
                {mode === 'signup' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="fullName" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={`${errors.fullName ? 'border-red-300 focus:border-red-500' : ''}`}
                    />
                    {errors.fullName && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm flex items-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </motion.p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={`${errors.email ? 'border-red-300 focus:border-red-500' : ''}`}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm flex items-center gap-1"
                  >
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </motion.p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className={`pr-10 ${errors.password ? 'border-red-300 focus:border-red-500' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm flex items-center gap-1"
                  >
                    <AlertCircle className="w-3 h-3" />
                    {errors.password}
                  </motion.p>
                )}
              </div>

              <AnimatePresence mode="wait">
                {mode === 'signup' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      Confirm Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      className={`${errors.confirmPassword ? 'border-red-300 focus:border-red-500' : ''}`}
                    />
                    {errors.confirmPassword && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm flex items-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3" />
                        {errors.confirmPassword}
                      </motion.p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 mt-6"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {mode === 'signin' ? 'Signing In...' : 'Creating Account...'}
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    {mode === 'signin' ? 'Sign In' : 'Create Account'}
                  </div>
                )}
              </Button>
            </form>

            <div className="text-center mt-6">
              <button
                onClick={switchMode}
                className="text-sm text-primary-500 hover:text-primary-600 hover:underline transition-colors"
              >
                {mode === 'signin' 
                  ? "Don't have an account? Sign up for free" 
                  : "Already have an account? Sign in here"
                }
              </button>
            </div>

            {/* Demo credentials */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 font-medium mb-2">Demo Credentials:</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>Email: demo@bxmarketlink.com</p>
                <p>Password: demo123</p>
              </div>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
