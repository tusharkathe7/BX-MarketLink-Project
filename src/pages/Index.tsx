
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import FindVendorsSection from '@/components/FindVendorsSection';
import FeaturedVendors from '@/components/FeaturedVendors';
import HowItWorks from '@/components/HowItWorks';
import BecomeVendorSection from '@/components/BecomeVendorSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <FindVendorsSection />
      <FeaturedVendors />
      <HowItWorks />
      <BecomeVendorSection />
      <Footer />
    </div>
  );
};

export default Index;
