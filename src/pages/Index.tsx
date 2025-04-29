
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

// Create a new About section
const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-minecraft-stone/20 relative">
      {/* Side decorations */}
      <div className="side-decor left-0"></div>
      <div className="side-decor right-0" style={{
        backgroundPosition: '10px 10px'
      }}></div>
      
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl text-center mb-12 font-pixel">About Us</h2>
        <div className="max-w-5xl mx-auto bg-white/60 backdrop-blur-sm p-8 rounded-lg border-2 border-black shadow-xl">
          <p className="mb-8 text-lg md:text-xl">
            Welcome to the most unfiltered Minecraft anarchy server experience. 
            No rules, no restrictions, just pure player-driven chaos.
          </p>
          <p className="mb-8 text-lg md:text-xl">Minecraft Anarchy is a true anarchy server where survival of the fittest reigns supreme. Build, destroy, raid, or get raided - the choice is yours.</p>
          <p className="text-lg md:text-xl font-semibold">
            Join us and experience Minecraft without boundaries.
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-minecraft-stone/30 rounded-lg border-2 border-black transform transition-all duration-200 hover:scale-[1.03] hover:shadow-lg">
              <h3 className="font-pixel mb-4 text-xl">NO RULES</h3>
              <p className="text-base md:text-lg">Play however you want, whenever you want</p>
            </div>
            <div className="p-6 bg-minecraft-stone/30 rounded-lg border-2 border-black transform transition-all duration-200 hover:scale-[1.03] hover:shadow-lg">
              <h3 className="font-pixel mb-4 text-xl">NO RESETS</h3>
              <p className="text-base md:text-lg">The world evolves naturally through player actions</p>
            </div>
            <div className="p-6 bg-minecraft-stone/30 rounded-lg border-2 border-black transform transition-all duration-200 hover:scale-[1.03] hover:shadow-lg">
              <h3 className="font-pixel mb-4 text-xl">NO LIMITS</h3>
              <p className="text-base md:text-lg">Your imagination is the only boundary</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Full screen background */}
      <div className="fullscreen-bg"></div>
      
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
