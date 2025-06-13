
import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import HeroBanner from '@/components/HeroBanner';
import NewsSection from '@/components/NewsSection';
import PlayerIssuesSection from '@/components/PlayerIssuesSection';
import ShopSection from '@/components/ShopSection';
import GallerySection from '@/components/GallerySection';
import TermsSection from '@/components/TermsSection';
import DiscordSection from '@/components/DiscordSection';
import Footer from '@/components/Footer';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-5xl md:text-7xl text-center mb-16 font-pixel text-gray-800">About Us</h2>
        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm p-10 md:p-12 rounded-2xl border border-gray-200 shadow-xl">
          <p className="mb-8 text-xl md:text-2xl text-gray-700 leading-relaxed">
            Welcome to the most unfiltered Minecraft anarchy server experience. 
            No rules, no restrictions, just pure player-driven chaos.
          </p>
          <p className="mb-8 text-xl md:text-2xl text-gray-700 leading-relaxed">
            Minecraft Anarchy is a true anarchy server where survival of the fittest reigns supreme. 
            Build, destroy, raid, or get raided - the choice is yours.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-gray-800">
            Join us and experience Minecraft without boundaries.
          </p>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200 shadow-md hover:shadow-lg transition-shadow duration-200">
              <h3 className="font-pixel mb-6 text-2xl text-gray-800">NO RULES</h3>
              <p className="text-lg md:text-xl text-gray-700">Play however you want, whenever you want</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 shadow-md hover:shadow-lg transition-shadow duration-200">
              <h3 className="font-pixel mb-6 text-2xl text-gray-800">NO RESETS</h3>
              <p className="text-lg md:text-xl text-gray-700">The world evolves naturally through player actions</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 shadow-md hover:shadow-lg transition-shadow duration-200">
              <h3 className="font-pixel mb-6 text-2xl text-gray-800">NO LIMITS</h3>
              <p className="text-lg md:text-xl text-gray-700">Your imagination is the only boundary</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
