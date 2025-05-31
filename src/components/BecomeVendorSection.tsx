
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone, Mail, Camera, Star, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BecomeVendorSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    category: '',
    description: '',
    address: '',
    hours: '',
    website: '',
    image: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const categories = [
    'Food & Grocery', 'Hair & Beauty', 'Auto Services', 'Retail',
    'Home Services', 'Electronics', 'Health & Wellness', 'Arts & Crafts',
    'Fashion & Clothing', 'Entertainment'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you within 24 hours.",
      });
    }, 2000);
  };

  if (isSuccess) {
    return (
      <section id="become-vendor" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-12 h-12 text-green-500" />
              </motion.div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Application Submitted!</h2>
              <p className="text-xl text-gray-600 mb-8">
                Thank you for joining BX MarketLink! We'll review your application and contact you within 24 hours.
              </p>
              <Button 
                onClick={() => setIsSuccess(false)}
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3"
              >
                Submit Another Application
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="become-vendor" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Become a Vendor
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the BX MarketLink community and connect with thousands of local customers
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Join Us?</h3>
              {[
                { icon: MapPin, title: "Prime Visibility", desc: "Get found by local customers searching in your area" },
                { icon: Star, title: "Build Reviews", desc: "Collect customer reviews and build your reputation" },
                { icon: Phone, title: "Direct Contact", desc: "Customers can reach you directly through the platform" }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="shadow-2xl border-0">
                <CardHeader className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">Vendor Application</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="businessName">Business Name *</Label>
                        <Input
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          required
                          className="border-gray-200 focus:border-primary-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ownerName">Owner Name *</Label>
                        <Input
                          id="ownerName"
                          name="ownerName"
                          value={formData.ownerName}
                          onChange={handleInputChange}
                          required
                          className="border-gray-200 focus:border-primary-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-gray-200 focus:border-primary-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="border-gray-200 focus:border-primary-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Business Category *</Label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:border-primary-300 focus:outline-none"
                      >
                        <option value="">Select a category</option>
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Business Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        placeholder="Include street, Bronx, NY"
                        className="border-gray-200 focus:border-primary-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Business Description *</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        placeholder="Describe your business, products, and services..."
                        className="border-gray-200 focus:border-primary-300 min-h-[100px]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="hours">Business Hours *</Label>
                        <Input
                          id="hours"
                          name="hours"
                          value={formData.hours}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g., Mon-Fri 9AM-6PM"
                          className="border-gray-200 focus:border-primary-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website (Optional)</Label>
                        <Input
                          id="website"
                          name="website"
                          type="url"
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="https://your-website.com"
                          className="border-gray-200 focus:border-primary-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="image">Business Photo</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-300 transition-colors">
                        <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <input
                          id="image"
                          name="image"
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                        <label htmlFor="image" className="cursor-pointer">
                          <span className="text-primary-500 hover:text-primary-600 font-medium">
                            Upload a photo
                          </span>
                          <span className="text-gray-500"> or drag and drop</span>
                        </label>
                        {formData.image && (
                          <p className="text-sm text-green-600 mt-2">
                            ✓ {formData.image.name}
                          </p>
                        )}
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 text-lg"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeVendorSection;
