
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GalleryHorizontal, Image as ImageIcon, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import ImagePopup from './ImagePopup';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

type GalleryImage = {
  url: string;
  caption: string;
  loaded?: boolean;
};

const GallerySection = () => {
  const isMobile = useIsMobile();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [visibleCount, setVisibleCount] = useState(6);
  const [showingMore, setShowingMore] = useState(false);

  const communityImages: GalleryImage[] = [
    { url: "photo-1506744038136-46273834b3fb", caption: "Ancient Base Discovery" },
    { url: "photo-1500673922987-e212871fec22", caption: "Night Raid" },
    { url: "/cpvp.png", caption: "Community Event" },
    { url: "photo-1482881497185-d4a9ddbe4151", caption: "Desert Exploration" },
    { url: "photo-1501854140801-50d01698950b", caption: "Mountain View" }
  ];

  const officialImages: GalleryImage[] = [
    { url: "/wild.png", caption: "Wilderness Exploration" },
    { url: "/spawn.png", caption: "Server Spawn" },
    { url: "photo-1470071459604-3b5ec3a7fe05", caption: "Nether Portal" },
    { url: "photo-1509316975850-ff9c5deb0cd9", caption: "Forest Hideout" },
    { url: "photo-1523712999610-f77fbcfc3843", caption: "Sunlit Path" }
  ];

  const allImages = [...communityImages, ...officialImages];
  
  // Function to handle image load
  const handleImageLoad = (url: string) => {
    setLoadedImages(prev => ({ ...prev, [url]: true }));
  };

  const getImageSrc = (url: string) => {
    return url.startsWith('/') ? url : `https://images.unsplash.com/${url}`;
  };

  // Show more images when button is clicked
  const loadMoreImages = () => {
    setVisibleCount(prev => Math.min(prev + 6, allImages.length));
    setShowingMore(true);
  };

  // Hide the additional loaded images
  const hideMoreImages = () => {
    setVisibleCount(6);
    setShowingMore(false);
    // Scroll back to gallery section
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Preload all images
    allImages.forEach((image) => {
      const img = new Image();
      img.src = getImageSrc(image.url);
      img.onload = () => handleImageLoad(image.url);
    });

    // Fade in loaded images with smoother animation
    const timer = setTimeout(() => {
      const images = document.querySelectorAll('.gallery-image');
      images.forEach((img, index) => {
        setTimeout(() => {
          img.classList.remove('opacity-0');
          img.classList.add('opacity-100');
        }, index * 80); // Faster animation
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="gallery" className="py-12 md:py-16 bg-minecraft-dirt/10">
      <div className="container relative mx-auto px-4">
        {/* Side decorations */}
        <div className="side-decor left-0"></div>
        <div className="side-decor right-0" style={{ backgroundPosition: '10px 10px' }}></div>

        <h2 className="text-3xl md:text-4xl text-center mb-8 font-pixel">Server Gallery</h2>
        
        <div className="minecraft-scroll max-w-6xl mx-auto">
          <div className="gallery-grid">
            {allImages.slice(0, visibleCount).map((image, index) => (
              <Card 
                key={index} 
                className="group gallery-item border-2 border-black cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <CardContent className="p-0 h-full">
                  {/* Placeholder while image is loading */}
                  <div className="absolute inset-0 bg-gray-300 animate-pulse flex items-center justify-center">
                    <ImageIcon className="text-gray-500 opacity-50" size={32} />
                  </div>
                  
                  <img 
                    src={getImageSrc(image.url)}
                    alt={image.caption}
                    className={`gallery-image w-full h-full object-cover transition-opacity duration-300 opacity-0`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(image.url)}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 sm:p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                    <p className="text-white text-xs sm:text-sm font-pixel">{image.caption}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            {visibleCount < allImages.length && !showingMore ? (
              <Button 
                onClick={loadMoreImages}
                className="pixel-button"
              >
                <GalleryHorizontal className="mr-2" size={18} />
                Load More
              </Button>
            ) : showingMore && (
              <Button 
                onClick={hideMoreImages} 
                variant="outline" 
                className="pixel-button bg-red-700 hover:bg-red-800"
              >
                <X className="mr-2" size={18} />
                Hide Additional Images
              </Button>
            )}
          </div>

          <div className="mt-8 text-center text-sm md:text-base">
            <p>Share your adventures and discoveries from the anarchy server!</p>
            <p className="mt-2">Submit your screenshots on our Discord for a chance to be featured.</p>
          </div>
        </div>
      </div>

      {selectedImage && (
        <ImagePopup
          src={getImageSrc(selectedImage.url)}
          alt={selectedImage.caption}
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};

export default GallerySection;
