
import React, { lazy, Suspense } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import HeroBanner from '@/components/HeroBanner';

// Create a new About section
const AboutSection = () => {
  return (
    <section id="about" className="py-8 md:py-12 bg-minecraft-stone/20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-center mb-6 md:mb-8">About Us</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-4 text-sm md:text-base">
            Welcome to the most unfiltered Minecraft anarchy server experience. 
            No rules, no restrictions, just pure player-driven chaos.
          </p>
          <p className="mb-4 text-sm md:text-base">PiMinecraft Anarchy is a true anarchy server where survival of the fittest reigns supreme. Build, destroy, raid, or get raided - the choice is yours.</p>
          <p className="text-sm md:text-base">
            Join us and experience Minecraft without boundaries.
          </p>
        </div>
      </div>
    </section>
  );
};

// Import remaining sections normally since they're lightweight
import NewsSection from '@/components/NewsSection';
import PlayerIssuesSection from '@/components/PlayerIssuesSection';
import ShopSection from '@/components/ShopSection';
import GallerySection from '@/components/GallerySection';
import TermsSection from '@/components/TermsSection';
import DiscordSection from '@/components/DiscordSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
        <DiscordSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
