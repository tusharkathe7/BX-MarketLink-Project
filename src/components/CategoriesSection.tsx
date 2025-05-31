
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Scissors, Wrench, Car, Flower, Utensils, Smartphone, Shirt } from 'lucide-react';

const CategoriesSection = () => {
  const categories = [
    { 
      name: 'Food & Grocery', 
      icon: Utensils, 
      count: '120+',
      color: 'from-red-400 to-pink-500',
      searchTerm: 'food+restaurants+grocery'
    },
    { 
      name: 'Hair & Beauty', 
      icon: Scissors, 
      count: '85+',
      color: 'from-purple-400 to-pink-500',
      searchTerm: 'hair+salon+barber+beauty'
    },
    { 
      name: 'Auto Services', 
      icon: Car, 
      count: '65+',
      color: 'from-blue-400 to-cyan-500',
      searchTerm: 'auto+repair+mechanic+car'
    },
    { 
      name: 'Retail & Shopping', 
      icon: ShoppingBag, 
      count: '95+',
      color: 'from-green-400 to-blue-500',
      searchTerm: 'retail+shopping+store'
    },
    { 
      name: 'Home Services', 
      icon: Wrench, 
      count: '70+',
      color: 'from-yellow-400 to-orange-500',
      searchTerm: 'home+repair+services'
    },
    { 
      name: 'Electronics', 
      icon: Smartphone, 
      count: '45+',
      color: 'from-indigo-400 to-purple-500',
      searchTerm: 'electronics+phone+repair'
    },
    { 
      name: 'Flowers & Gifts', 
      icon: Flower, 
      count: '30+',
      color: 'from-pink-400 to-rose-500',
      searchTerm: 'flowers+gifts+florist'
    },
    { 
      name: 'Clothing', 
      icon: Shirt, 
      count: '55+',
      color: 'from-teal-400 to-green-500',
      searchTerm: 'clothing+fashion+apparel'
    }
  ];

  const handleCategoryClick = (searchTerm: string) => {
    const mapsUrl = `https://www.google.com/maps/search/${searchTerm}+in+Bronx+NY`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Explore by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find exactly what you're looking for in your neighborhood
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                onClick={() => handleCategoryClick(category.searchTerm)}
                className="bg-white rounded-2xl p-6 cursor-pointer shadow-lg border border-gray-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 mx-auto`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {category.name}
                </h3>
                <div className="text-center">
                  <span className="text-2xl font-bold text-primary-500">{category.count}</span>
                  <p className="text-gray-500 text-sm">businesses</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
