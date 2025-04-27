
import React, { useEffect, useRef } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface ImagePopupProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImagePopup = ({ src, alt, isOpen, onClose }: ImagePopupProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

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

    if (isOpen) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isOpen, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent ref={dialogRef} className="max-w-4xl p-0 bg-transparent border-none shadow-none">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-xl"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImagePopup;
