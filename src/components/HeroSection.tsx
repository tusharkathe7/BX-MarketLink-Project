
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Discover{' '}
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Local Bronx
            </span>{' '}
            Businesses
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Connect with authentic local vendors, explore neighborhood gems, and support the vibrant Bronx business community
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('find-vendors')}
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 text-lg rounded-full shadow-lg"
              >
                Find Vendors Near You
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('categories')}
                className="border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white px-8 py-3 text-lg rounded-full"
              >
                Explore Categories
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12"
          >
            {[
              { number: '500+', label: 'Local Vendors' },
              { number: '12', label: 'Categories' },
              { number: '50+', label: 'Neighborhoods' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-3xl font-bold text-primary-500 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={() => scrollToSection('categories')}
          >
            <ArrowDown className="w-8 h-8 text-primary-500 mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
