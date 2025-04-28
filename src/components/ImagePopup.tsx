
import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface ImagePopupProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImagePopup = ({ src, alt, isOpen, onClose }: ImagePopupProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dialogRef.current) return;
      
      const rect = dialogRef.current.getBoundingClientRect();
      const mouseY = e.clientY;
      const dialogBottom = rect.bottom;
      
      if (mouseY > dialogBottom + 100) {
        onClose();
      }
    };

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent ref={dialogRef} className="max-w-4xl p-0 bg-transparent border-none shadow-none">
        {loading && (
          <div className="w-full h-[60vh] bg-gray-300 animate-pulse rounded-lg flex items-center justify-center">
            <div className="font-pixel text-gray-600">Loading...</div>
          </div>
        )}
        <img 
          src={src} 
          alt={alt} 
          className={`w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-xl ${loading ? 'hidden' : 'fade-in'}`}
          onLoad={handleImageLoad}
        />
        <div className="mt-2 text-center text-white text-sm font-pixel">
          <p>{alt}</p>
          <p className="text-white/70 text-xs mt-1">Scroll down or press ESC to close</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImagePopup;
