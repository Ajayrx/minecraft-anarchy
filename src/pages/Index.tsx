
import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import HeroBanner from '@/components/HeroBanner';
import NewsSection from '@/components/NewsSection';
import PlayerIssuesSection from '@/components/PlayerIssuesSection';
import TermsSection from '@/components/TermsSection';
import ShopSection from '@/components/ShopSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      
      <main>
        <HeroBanner />
        
        <NewsSection />
        
        <PlayerIssuesSection />
        
        <TermsSection />
        
        <ShopSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
