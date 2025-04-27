import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative h-80 md:h-[30rem] overflow-hidden mb-8 border-2 border-black bg-sky-400">
      
      {/* Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400 to-sky-600 z-0"></div>

      {/* Sun */}
      <div className="absolute top-8 right-12 w-16 h-16 bg-yellow-400 rounded-full z-10"></div>

      {/* Clouds */}
      <div className="absolute top-6 left-12 w-24 h-12 bg-white rounded-full opacity-80 animate-pulse z-10"></div>
      <div className="absolute top-10 left-64 w-32 h-14 bg-white rounded-full opacity-70 animate-pulse z-10"></div>
      <div className="absolute top-4 right-20 w-20 h-10 bg-white rounded-full opacity-80 animate-pulse z-10"></div>

      {/* Mountains */}
      <div className="absolute bottom-16 w-full h-1/2 bg-minecraft-stone z-10">
        <div className="absolute bottom-0 left-0 w-1/3 h-3/4 bg-minecraft-stone"></div>
        <div className="absolute bottom-0 left-1/4 w-1/4 h-full bg-minecraft-stone"></div>
        <div className="absolute bottom-0 left-2/4 w-2/5 h-3/5 bg-minecraft-stone"></div>
      </div>

      {/* Inverted Trees with Shadows and Glow */}
      <div className="absolute bottom-8 left-10 w-12 h-20 z-20">
        <div className="w-4 h-6 bg-minecraft-wood mx-auto shadow-lg glow-effect"></div>
        <div className="w-12 h-12 bg-minecraft-leaves rounded-sm -mt-2 transform scale-y-[1] shadow-lg glow-effect"></div>
      </div>
      <div className="absolute bottom-8 left-40 w-16 h-28 z-20">
        <div className="w-5 h-8 bg-minecraft-wood mx-auto shadow-lg glow-effect"></div>
        <div className="w-16 h-16 bg-minecraft-leaves rounded-sm -mt-2 transform scale-y-[1] shadow-lg glow-effect"></div>
      </div>
      <div className="absolute bottom-8 right-20 w-14 h-24 z-20">
        <div className="w-5 h-10 bg-minecraft-wood mx-auto shadow-lg glow-effect"></div>
        <div className="w-14 h-14 bg-minecraft-leaves rounded-sm -mt-2 transform scale-y-[1] shadow-lg glow-effect"></div>
      </div>

    

      {/* River */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-blue-400 opacity-80 z-20"></div>

      {/* Ground */}
      <div className="absolute bottom-0 w-full h-8 bg-minecraft-grass z-30"></div>
      <div className="absolute bottom-0 w-full h-2 bg-minecraft-dirt z-30"></div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-40 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[3px_3px_0_rgba(0,0,0,0.8)] font-pixel animate-bounce mb-2">
          Minecraft Anarchy
        </h1>
        <h2 className="text-lg md:text-2xl font-pixel text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
          Voice Chat + Distant Horizon
        </h2>
      </div>
    </div>
  );
};

export default HeroBanner;
