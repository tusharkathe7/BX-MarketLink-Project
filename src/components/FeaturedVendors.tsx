import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, Phone, Globe, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const FeaturedVendors = () => {
  const [favorites, setFavorites] = useState(new Set());

  const vendors = [
    {
      id: 1,
      name: "Maria's Fresh Produce",
      category: "Grocery",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 124,
      address: "456 Grand Concourse, Bronx",
      hours: "6 AM - 8 PM",
      phone: "(718) 555-0123",
      website: "www.mariasfresh.com",
      description: "Fresh fruits and vegetables from local farms. Family-owned for over 20 years.",
      specialties: ["Organic Produce", "Fresh Herbs", "Seasonal Fruits"],
      verified: true
    },
    {
      id: 2,
      name: "Tony's Barber Shop",
      category: "Hair & Beauty",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 89,
      address: "789 Fordham Rd, Bronx",
      hours: "9 AM - 7 PM",
      phone: "(718) 555-0456",
      website: "www.tonyscuts.com",
      description: "Traditional cuts and modern styles. Expert barbers with 15+ years experience.",
      specialties: ["Classic Cuts", "Beard Trimming", "Hot Towel Shave"],
      verified: true
    },
    {
      id: 3,
      name: "Caribbean Spice Kitchen",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 156,
      address: "321 E 149th St, Bronx",
      hours: "11 AM - 10 PM",
      phone: "(718) 555-0789",
      website: "www.caribbeanspice.com",
      description: "Authentic Caribbean cuisine and flavors. Best jerk chicken in the Bronx!",
      specialties: ["Jerk Chicken", "Curry Goat", "Rice & Peas"],
      verified: true
    },
    {
      id: 4,
      name: "Fix-It Auto Repair",
      category: "Auto Services",
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 73,
      address: "654 E Tremont Ave, Bronx",
      hours: "8 AM - 6 PM",
      phone: "(718) 555-0234",
      website: null,
      description: "Honest auto repair and maintenance. ASE certified mechanics you can trust.",
      specialties: ["Oil Changes", "Brake Repair", "Engine Diagnostics"],
      verified: true
    },
    {
      id: 5,
      name: "Bronx Electronics Hub",
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      rating: 4.5,
      reviews: 92,
      address: "987 Southern Blvd, Bronx",
      hours: "10 AM - 8 PM",
      phone: "(718) 555-0567",
      website: "www.bronxelectronics.com",
      description: "Phone repair and electronics sales. Same-day repair service available.",
      specialties: ["Phone Repair", "Computer Sales", "Accessories"],
      verified: false
    },
    {
      id: 6,
      name: "Bella's Flower Garden",
      category: "Flowers",
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 67,
      address: "159 Melrose Ave, Bronx",
      hours: "7 AM - 6 PM",
      phone: "(718) 555-0890",
      website: "www.bellasflowers.com",
      description: "Beautiful arrangements for every occasion. Wedding and event specialists.",
      specialties: ["Wedding Bouquets", "Event Decor", "Funeral Arrangements"],
      verified: true
    }
  ];

  const handleVendorClick = (vendor: any) => {
    const searchTerm = `${vendor.name.replace(/'/g, '')}+${vendor.address}`;
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(searchTerm)}`;
    window.open(mapsUrl, '_blank');
  };

  const handleCallVendor = (phone: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = `tel:${phone}`;
  };

  const handleWebsiteClick = (website: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const url = website.startsWith('http') ? website : `https://${website}`;
    window.open(url, '_blank');
  };

  const toggleFavorite = (vendorId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const newFavorites = new Set(favorites);
    if (newFavorites.has(vendorId)) {
      newFavorites.delete(vendorId);
    } else {
      newFavorites.add(vendorId);
    }
    setFavorites(newFavorites);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Featured Bronx Vendors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover popular local businesses loved by the community
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="outline" className="px-4 py-2">
              ✓ Verified Businesses
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              📍 Real Locations
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              ⭐ Top Rated
            </Badge>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors.map((vendor, index) => (
            <motion.div
              key={vendor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              onClick={() => handleVendorClick(vendor)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={vendor.image} 
                  alt={vendor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
                />
                
                {/* Overlay badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className={`text-xs ${vendor.verified ? 'bg-green-500' : 'bg-gray-500'}`}>
                    {vendor.verified ? '✓ Verified' : 'Unverified'}
                  </Badge>
                </div>
                
                {/* Favorite button */}
                <button
                  onClick={(e) => toggleFavorite(vendor.id, e)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                >
                  <Heart 
                    className={`w-4 h-4 transition-colors ${
                      favorites.has(vendor.id) ? 'text-red-500 fill-red-500' : 'text-gray-400'
                    }`} 
                  />
                </button>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-primary-600 bg-primary-50">
                    {vendor.category}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{vendor.rating}</span>
                    <span className="text-sm text-gray-500">({vendor.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                  {vendor.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{vendor.description}</p>
                
                {/* Specialties */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {vendor.specialties.slice(0, 2).map((specialty, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                  {vendor.specialties.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{vendor.specialties.length - 2} more
                    </Badge>
                  )}
                </div>
                
                {/* Location and Hours */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2 text-primary-500 flex-shrink-0" />
                    <span className="truncate">{vendor.address}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2 text-primary-500 flex-shrink-0" />
                    <span>{vendor.hours}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleVendorClick(vendor)}
                    className="flex-1 bg-primary-500 hover:bg-primary-600 text-white text-sm py-2"
                  >
                    <MapPin className="w-4 h-4 mr-1" />
                    View on Maps
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={(e) => handleCallVendor(vendor.phone, e)}
                    className="p-2 hover:bg-green-50 hover:border-green-300"
                  >
                    <Phone className="w-4 h-4 text-green-600" />
                  </Button>
                  {vendor.website && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => handleWebsiteClick(vendor.website, e)}
                      className="p-2 hover:bg-blue-50 hover:border-blue-300"
                    >
                      <Globe className="w-4 h-4 text-blue-600" />
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            onClick={() => window.open('https://www.google.com/maps/search/businesses+in+Bronx+NY', '_blank')}
            variant="outline" 
            className="px-8 py-3 text-lg border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white"
          >
            View All Vendors on Maps
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedVendors;
