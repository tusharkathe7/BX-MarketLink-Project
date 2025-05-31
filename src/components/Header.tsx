
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { User, LogOut, Settings, MapPin } from 'lucide-react';
import AuthModal from './AuthModal';

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [user, setUser] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    // Check for existing user on component mount
    const savedUser = localStorage.getItem('bx_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAuthSuccess = (userData: any) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('bx_user');
    setUser(null);
    setShowUserMenu(false);
  };

  const openAuthModal = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">BX</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              MarketLink
            </h1>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Find Vendors', id: 'find-vendors' },
              { name: 'Categories', id: 'categories' },
              { name: 'How It Works', id: 'how-it-works' },
              { name: 'Become a Vendor', id: 'become-vendor' }
            ].map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              // User is logged in
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 bg-primary-50 hover:bg-primary-100 text-primary-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">{user.fullName}</span>
                </motion.button>

                {/* User Menu Dropdown */}
                {showUserMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  >
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="font-medium text-gray-800">{user.fullName}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    
                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                        scrollToSection('find-vendors');
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-2"
                    >
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span>Find Vendors</span>
                    </button>
                    
                    <button
                      onClick={() => setShowUserMenu(false)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-2"
                    >
                      <Settings className="w-4 h-4 text-gray-500" />
                      <span>Settings</span>
                    </button>
                    
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-2 text-red-600"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              // User is not logged in
              <>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    onClick={() => openAuthModal('signin')}
                    className="border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white"
                  >
                    Sign In
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    onClick={() => openAuthModal('signup')}
                    className="bg-primary-500 hover:bg-primary-600 text-white"
                  >
                    Sign Up
                  </Button>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </motion.header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
        onAuthSuccess={handleAuthSuccess}
      />
    </>
  );
};

export default Header;
