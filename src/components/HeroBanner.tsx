
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  const handleJoin = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    // Copy server IP to clipboard
    navigator.clipboard.writeText("minecraftanarchy.com");
  };

  return (
    <div className="relative h-[90vh] md:h-[70vh] min-h-[480px] overflow-hidden mb-8 border-2 border-black bg-sky-400">
      
      {/* Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400 to-sky-600 z-0"></div>

      {/* Sun with subtle pulsing effect */}
      <div className="absolute top-8 right-12 w-16 h-16 bg-yellow-400 rounded-full z-10">
        <div className="absolute inset-0 bg-yellow-200 rounded-full animate-pulse opacity-70"></div>
      </div>

      {/* Clouds with optimized animations */}
      <div className="absolute top-6 left-[10%] w-24 h-12 bg-white rounded-full opacity-80 z-10"
        style={{animation: "float-horizontal 40s linear infinite"}}>
      </div>
      <div className="absolute top-10 left-[40%] w-32 h-14 bg-white rounded-full opacity-70 z-10"
        style={{animation: "float-horizontal 60s linear infinite", animationDelay: "-20s"}}>
      </div>
      <div className="absolute top-4 right-[15%] w-20 h-10 bg-white rounded-full opacity-80 z-10"
        style={{animation: "float-horizontal 50s linear infinite", animationDelay: "-35s"}}>
      </div>

      {/* Mountains */}
      <div className="absolute bottom-16 w-full h-1/2 bg-minecraft-stone z-10">
        <div className="absolute bottom-0 left-0 w-1/3 h-3/4 bg-minecraft-stone"></div>
        <div className="absolute bottom-0 left-1/4 w-1/4 h-full bg-minecraft-stone"></div>
        <div className="absolute bottom-0 left-2/4 w-2/5 h-3/5 bg-minecraft-stone"></div>
      </div>

      {/* Trees */}
      <div className="absolute bottom-8 left-10 w-12 h-20 z-20">
        <div className="w-4 h-6 bg-minecraft-wood mx-auto"></div>
        <div className="w-12 h-12 bg-minecraft-leaves rounded-sm -mt-2"></div>
      </div>
      <div className="absolute bottom-8 left-40 w-16 h-28 z-20">
        <div className="w-5 h-8 bg-minecraft-wood mx-auto"></div>
        <div className="w-16 h-16 bg-minecraft-leaves rounded-sm -mt-2"></div>
      </div>
      <div className="absolute bottom-8 right-20 w-14 h-24 z-20">
        <div className="w-5 h-10 bg-minecraft-wood mx-auto"></div>
        <div className="w-14 h-14 bg-minecraft-leaves rounded-sm -mt-2"></div>
      </div>

      {/* River */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-blue-400 opacity-80 z-20"></div>

      {/* Ground */}
      <div className="absolute bottom-0 w-full h-8 bg-minecraft-grass z-30"></div>
      <div className="absolute bottom-0 w-full h-2 bg-minecraft-dirt z-30"></div>

      {/* Overlay Text and Call to Action */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-40 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[3px_3px_0_rgba(0,0,0,0.8)] font-pixel mb-4 md:mb-6">
          Minecraft Anarchy
        </h1>
        <h2 className="text-lg md:text-2xl font-pixel text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)] mb-8">
          Voice Chat + Distant Horizon
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Button 
            onClick={handleJoin}
            className="pixel-button text-lg md:text-xl py-3 px-8 bg-minecraft-grass hover:bg-minecraft-grass/90 transition-all duration-200"
          >
            JOIN SERVER NOW
          </Button>
          
          <a 
            href="#about" 
            className="pixel-button bg-minecraft-stone/80 hover:bg-minecraft-stone/90"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
