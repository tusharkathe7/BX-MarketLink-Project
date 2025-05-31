import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Filter, Clock, Star, Phone } from 'lucide-react';

const FindVendorsSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredVendors, setFilteredVendors] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'food', label: 'Food & Grocery' },
    { value: 'beauty', label: 'Hair & Beauty' },
    { value: 'auto', label: 'Auto Services' },
    { value: 'retail', label: 'Retail' },
    { value: 'services', label: 'Home Services' },
    { value: 'electronics', label: 'Electronics' }
  ];

  const allVendors = [
    { 
      id: 1,
      name: "Maria's Fresh Produce", 
      category: "food", 
      distance: "0.2 mi", 
      rating: 4.8, 
      reviews: 124,
      address: "456 Grand Concourse, Bronx",
      hours: "6 AM - 8 PM",
      phone: "(718) 555-0123",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=300&h=200&fit=crop"
    },
    { 
      id: 2,
      name: "Tony's Barber Shop", 
      category: "beauty", 
      distance: "0.5 mi", 
      rating: 4.9, 
      reviews: 89,
      address: "789 Fordham Rd, Bronx",
      hours: "9 AM - 7 PM",
      phone: "(718) 555-0456",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=300&h=200&fit=crop"
    },
    { 
      id: 3,
      name: "Caribbean Spice Kitchen", 
      category: "food", 
      distance: "0.7 mi", 
      rating: 4.7, 
      reviews: 156,
      address: "321 E 149th St, Bronx",
      hours: "11 AM - 10 PM",
      phone: "(718) 555-0789",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=200&fit=crop"
    },
    { 
      id: 4,
      name: "Fix-It Auto Repair", 
      category: "auto", 
      distance: "1.1 mi", 
      rating: 4.6, 
      reviews: 73,
      address: "654 E Tremont Ave, Bronx",
      hours: "8 AM - 6 PM",
      phone: "(718) 555-0234",
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=300&h=200&fit=crop"
    },
    { 
      id: 5,
      name: "Bronx Electronics Hub", 
      category: "electronics", 
      distance: "1.3 mi", 
      rating: 4.5, 
      reviews: 92,
      address: "987 Southern Blvd, Bronx",
      hours: "10 AM - 8 PM",
      phone: "(718) 555-0567",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop"
    },
    { 
      id: 6,
      name: "Bella's Flower Garden", 
      category: "retail", 
      distance: "0.8 mi", 
      rating: 4.9, 
      reviews: 67,
      address: "159 Melrose Ave, Bronx",
      hours: "7 AM - 6 PM",
      phone: "(718) 555-0890",
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=300&h=200&fit=crop"
    }
  ];

  // Real-time search filtering
  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      let filtered = allVendors;

      if (selectedCategory !== 'all') {
        filtered = filtered.filter(vendor => vendor.category === selectedCategory);
      }

      if (searchQuery.trim()) {
        filtered = filtered.filter(vendor =>
          vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vendor.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vendor.address.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      setFilteredVendors(filtered);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory]);

  const handleGoogleMapsSearch = () => {
    const query = searchQuery || 'local businesses';
    const categoryFilter = selectedCategory !== 'all' ? `+${selectedCategory}` : '';
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(query)}${categoryFilter}+in+Bronx+NY`;
    window.open(mapsUrl, '_blank');
  };

  const handleVendorClick = (vendor: any) => {
    const searchTerm = `${vendor.name.replace(/'/g, '')}+Bronx+NY`;
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(searchTerm)}`;
    window.open(mapsUrl, '_blank');
  };

  const handleCallVendor = (phone: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = `tel:${phone}`;
  };

  return (
    <section id="find-vendors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Find Local Vendors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time search for businesses in your neighborhood with instant Google Maps integration
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Enhanced Search Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                  isSearching ? 'text-primary-500 animate-pulse' : 'text-gray-400'
                }`} />
                <Input
                  placeholder="Search vendors, services, or locations in real-time..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-3 text-lg border-gray-200 focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:border-primary-300 focus:outline-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              <Button 
                onClick={handleGoogleMapsSearch}
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 whitespace-nowrap"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Open Maps
              </Button>
            </div>

            {/* Search Results Summary */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>
                {isSearching ? 'Searching...' : `Found ${filteredVendors.length} vendors`}
                {searchQuery && ` for "${searchQuery}"`}
              </span>
              <span>Real-time results • Click any vendor to view on maps</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Interactive Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-gradient-to-br from-primary-100 via-white to-secondary-100 rounded-2xl p-8 min-h-[500px] relative overflow-hidden shadow-lg">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Interactive Map</h3>
                  <p className="text-gray-600 mb-6">
                    View all {filteredVendors.length} vendors on Google Maps with real-time directions
                  </p>
                  <Button 
                    onClick={handleGoogleMapsSearch}
                    className="bg-primary-500 hover:bg-primary-600 text-white mb-4"
                  >
                    Open Full Map View
                  </Button>
                </div>
                
                {/* Animated location pins */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.2, type: "spring" }}
                    className={`absolute w-3 h-3 rounded-full animate-pulse`}
                    style={{
                      backgroundColor: ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'][i],
                      top: `${20 + (i * 10)}%`,
                      left: `${15 + (i * 12)}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Enhanced Vendor Results */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredVendors.length === 0 ? (
                  <div className="text-center py-12">
                    <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No vendors found</h3>
                    <p className="text-gray-500">Try adjusting your search terms or category filter</p>
                  </div>
                ) : (
                  filteredVendors.map((vendor, index) => (
                    <motion.div
                      key={vendor.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      onClick={() => handleVendorClick(vendor)}
                      className="bg-white p-4 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex gap-4">
                        <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={vendor.image} 
                            alt={vendor.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/placeholder.svg';
                            }}
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-bold text-gray-800 text-lg group-hover:text-primary-600 transition-colors">
                              {vendor.name}
                            </h4>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={(e) => handleCallVendor(vendor.phone, e)}
                                className="p-2 hover:bg-green-50 hover:border-green-300"
                              >
                                <Phone className="w-4 h-4 text-green-600" />
                              </Button>
                              <MapPin className="w-5 h-5 text-primary-500" />
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                            <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-xs font-medium">
                              {categories.find(c => c.value === vendor.category)?.label || vendor.category}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {vendor.hours}
                            </span>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm">
                              <span className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="font-medium">{vendor.rating}</span>
                                <span className="text-gray-400">({vendor.reviews})</span>
                              </span>
                              <span className="text-gray-500">{vendor.distance}</span>
                            </div>
                            <span className="text-xs text-gray-400">Click to view on maps</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindVendorsSection;
