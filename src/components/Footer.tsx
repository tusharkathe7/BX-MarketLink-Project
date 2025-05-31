
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com', name: 'Facebook' },
    { icon: Instagram, url: 'https://instagram.com', name: 'Instagram' },
    { icon: Twitter, url: 'https://twitter.com', name: 'Twitter' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Categories', href: '#categories' },
    { name: 'Find Vendors', href: '#find-vendors' }
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Privacy Policy', href: '#privacy' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BX</span>
              </div>
              <h3 className="text-2xl font-bold">MarketLink</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting the Bronx community with local businesses. Discover, support, and grow together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Stay Connected</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">hello@bxmarketlink.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">(718) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">The Bronx, New York</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <p className="text-gray-300 text-sm">Subscribe to our newsletter</p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 flex-1"
                />
                <Button className="bg-primary-500 hover:bg-primary-600">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 BX MarketLink. All rights reserved. Built for Hack the Bronx 4.
            </p>
            <Button
              onClick={() => window.open('https://www.google.com/maps/search/bronx+ny', '_blank')}
              variant="outline"
              className="border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Explore Bronx on Maps
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
