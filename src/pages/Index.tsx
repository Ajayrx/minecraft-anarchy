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
  return <section id="about" className="py-12 md:py-16 bg-minecraft-stone/20 relative">
      {/* Side decorations */}
      <div className="side-decor left-0"></div>
      <div className="side-decor right-0" style={{
      backgroundPosition: '10px 10px'
    }}></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-8 font-pixel">About Us</h2>
        <div className="max-w-3xl mx-auto text-center bg-white/50 backdrop-blur-sm p-6 rounded-lg border-2 border-black shadow-lg">
          <p className="mb-6 text-base md:text-lg">
            Welcome to the most unfiltered Minecraft anarchy server experience. 
            No rules, no restrictions, just pure player-driven chaos.
          </p>
          <p className="mb-6 text-base md:text-lg">Minecraft Anarchy is a true anarchy server where survival of the fittest reigns supreme. Build, destroy, raid, or get raided - the choice is yours.</p>
          <p className="text-base md:text-lg font-semibold">
            Join us and experience Minecraft without boundaries.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-minecraft-stone/30 rounded-lg border border-black">
              <h3 className="font-pixel mb-2">NO RULES</h3>
              <p>Play however you want, whenever you want</p>
            </div>
            <div className="p-4 bg-minecraft-stone/30 rounded-lg border border-black">
              <h3 className="font-pixel mb-2">NO RESETS</h3>
              <p>The world evolves naturally through player actions</p>
            </div>
            <div className="p-4 bg-minecraft-stone/30 rounded-lg border border-black">
              <h3 className="font-pixel mb-2">NO LIMITS</h3>
              <p>Your imagination is the only boundary</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
const Index = () => {
  return <div className="min-h-screen flex flex-col relative">
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
    </div>;
};
export default Index;