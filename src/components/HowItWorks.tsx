
import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Search, ShoppingCart, Star } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your free account to get started and join the BX MarketLink community",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Search,
      title: "Browse & Discover",
      description: "Search by category, location, or keywords to find local Bronx businesses near you",
      color: "from-green-400 to-green-600"
    },
    {
      icon: ShoppingCart,
      title: "Connect & Shop",
      description: "Visit vendors, make purchases, or schedule services directly through their listings",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: Star,
      title: "Rate & Review",
      description: "Share your experience and help other community members discover great businesses",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started with BX MarketLink is simple and rewarding
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mx-auto`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm font-bold text-primary-500 mb-2">
                      STEP {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 transform -translate-y-1/2 z-10">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary-400 rounded-full"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
