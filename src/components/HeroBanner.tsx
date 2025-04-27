import React from 'react';
const HeroBanner = () => {
  return <div className="relative h-64 md:h-96 overflow-hidden mb-8 border-2 border-black">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-sky-600 z-0"></div>
      
      {/* Pixelated mountains */}
      <div className="absolute bottom-0 w-full h-1/2 bg-minecraft-stone z-10">
        <div className="absolute bottom-0 left-0 w-1/3 h-3/4 bg-minecraft-stone"></div>
        <div className="absolute bottom-0 left-1/4 w-1/4 h-full bg-minecraft-stone"></div>
        <div className="absolute bottom-0 left-2/4 w-2/5 h-3/5 bg-minecraft-stone"></div>
      </div>
      
      {/* Pixelated trees */}
      <div className="absolute bottom-0 left-1/6 w-16 h-24 z-20">
        <div className="w-6 h-8 bg-minecraft-wood mx-auto"></div>
        <div className="w-16 h-16 bg-minecraft-leaves rounded-sm -mt-2"></div>
      </div>
      
      <div className="absolute bottom-0 right-1/4 w-16 h-32 z-20">
        <div className="w-6 h-12 bg-minecraft-wood mx-auto"></div>
        <div className="w-16 h-16 bg-minecraft-leaves rounded-sm -mt-2"></div>
      </div>
      
      {/* Pixelated sun */}
      <div className="absolute top-8 right-12 w-16 h-16 bg-yellow-400 rounded-sm z-0"></div>
      
      {/* Ground */}
      <div className="absolute bottom-0 w-full h-8 bg-minecraft-grass z-30"></div>
      <div className="absolute bottom-0 w-full h-2 bg-minecraft-dirt z-30"></div>
      
      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center justify-center z-40">
        <h2 className="text-2xl font-pixel text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)] md:text-4xl text-justify">NO RULES || VOICE CHAT + DISTANT HORIZON</h2>
      </div>
    </div>;
};
export default HeroBanner;