
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GalleryHorizontal } from 'lucide-react';

const GallerySection = () => {
  const images = [
    { url: "photo-1506744038136-46273834b3fb", caption: "Ancient Base Discovery" },
    { url: "photo-1500673922987-e212871fec22", caption: "Night Raid" },
    { url: "photo-1605810230434-7631ac76ec81", caption: "Community Event" }
  ];

  return (
    <section id="gallery" className="py-12 bg-minecraft-dirt/10">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl text-center mb-8 font-pixel">Server Gallery</h2>
        
        <div className="minecraft-scroll max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <GalleryHorizontal className="w-6 h-6" />
            <h3 className="font-pixel text-xl">Community Screenshots</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Card key={index} className="group relative overflow-hidden border-2 border-black">
                <CardContent className="p-0">
                  <img 
                    src={`https://images.unsplash.com/${image.url}`}
                    alt={image.caption}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2">
                    <p className="text-white text-sm font-pixel">{image.caption}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center text-sm">
            <p>Share your adventures and discoveries from the anarchy server!</p>
            <p className="mt-2">Submit your screenshots on our Discord.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
