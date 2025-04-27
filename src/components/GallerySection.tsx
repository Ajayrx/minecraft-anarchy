
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GalleryHorizontal, Image } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const GallerySection = () => {
  const isMobile = useIsMobile();
  
  // Community Screenshots (top row)
  const communityImages = [
    { url: "photo-1506744038136-46273834b3fb", caption: "Ancient Base Discovery" },
    { url: "photo-1500673922987-e212871fec22", caption: "Night Raid" },
    { url: "photo-1605810230434-7631ac76ec81", caption: "Community Event" }
  ];
  
  // Official Screenshots (bottom row)
  const officialImages = [
    { url: "photo-1616161560551-33951b58d4f4", caption: "Wilderness Exploration" },
    { url: "photo-1618160702438-9b02ab6515c9", caption: "Server Hub" },
    { url: "photo-1470071459604-3b5ec3a7fe05", caption: "Nether Portal" }
  ];

  return (
    <section id="gallery" className="py-8 md:py-12 bg-minecraft-dirt/10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-center mb-6 md:mb-8 font-pixel">Server Gallery</h2>
        
        <div className="minecraft-scroll max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
            <GalleryHorizontal className="w-5 h-5 md:w-6 md:h-6" />
            <h3 className="font-pixel text-lg md:text-xl">Community Screenshots</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
            {communityImages.map((image, index) => (
              <Card key={index} className="group relative overflow-hidden border-2 border-black">
                <CardContent className="p-0">
                  <img 
                    src={`https://images.unsplash.com/${image.url}`}
                    alt={image.caption}
                    className="w-full h-40 sm:h-48 object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-1 sm:p-2">
                    <p className="text-white text-xs sm:text-sm font-pixel">{image.caption}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
            <Image className="w-5 h-5 md:w-6 md:h-6" />
            <h3 className="font-pixel text-lg md:text-xl">Official Screenshots</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {officialImages.map((image, index) => (
              <Card key={index} className="group relative overflow-hidden border-2 border-black">
                <CardContent className="p-0">
                  <img 
                    src={`https://images.unsplash.com/${image.url}`}
                    alt={image.caption}
                    className="w-full h-40 sm:h-48 object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-1 sm:p-2">
                    <p className="text-white text-xs sm:text-sm font-pixel">{image.caption}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-6 md:mt-8 text-center text-xs md:text-sm">
            <p>Share your adventures and discoveries from the anarchy server!</p>
            <p className="mt-1 md:mt-2">Submit your screenshots on our Discord for a chance to be featured.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
