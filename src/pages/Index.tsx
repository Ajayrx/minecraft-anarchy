import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import HeroBanner from '@/components/HeroBanner';
import NewsSection from '@/components/NewsSection';
import PlayerIssuesSection from '@/components/PlayerIssuesSection';
import ShopSection from '@/components/ShopSection';
import GallerySection from '@/components/GallerySection';
import TermsSection from '@/components/TermsSection';
import Footer from '@/components/Footer';

// Create a new About section
const AboutSection = () => {
  return <section id="about" className="py-12 bg-minecraft-stone/20">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl text-center mb-8">About Us</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-4">
            Welcome to the most unfiltered Minecraft anarchy server experience. 
            No rules, no restrictions, just pure player-driven chaos.
          </p>
          <p className="mb-4">PiMinecraft Anarchy is a true anarchy server where survival of the fittest reigns supreme. Build, destroy, raid, or get raided - the choice is yours.</p>
          <p>
            Join us and experience Minecraft without boundaries.
          </p>
        </div>
      </div>
    </section>;
};
const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      
      <main>
        <HeroBanner />
        <NewsSection />
        <AboutSection />
        <PlayerIssuesSection />
        <ShopSection />
        <GallerySection />
        <TermsSection />
      </main>
      
      <Footer />
    </div>;
};
export default Index;