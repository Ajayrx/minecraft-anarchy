import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const { toast } = useToast();
  const serverIP = "minecraftanarchy.com";
  
  const handleCopyIP = () => {
    navigator.clipboard.writeText(serverIP);
    toast({
      title: "Server IP Copied!",
      description: "The IP has been copied to your clipboard"
    });
  };

  return (
    <header className="relative">
      {/* Animated clouds */}
      <div className="absolute top-4 left-0 w-full overflow-hidden h-16 pointer-events-none">
        <div className="animate-clouds">
          <div className="absolute top-2 left-10 w-16 h-8 bg-white opacity-70 rounded-full"></div>
          <div className="absolute top-6 left-20 w-24 h-10 bg-white opacity-70 rounded-full"></div>
          <div className="absolute top-0 left-48 w-20 h-8 bg-white opacity-70 rounded-full"></div>
        </div>
        <div className="animate-clouds" style={{
          animationDelay: '-15s'
        }}>
          <div className="absolute top-8 left-72 w-16 h-8 bg-white opacity-70 rounded-full"></div>
          <div className="absolute top-2 left-96 w-24 h-10 bg-white opacity-70 rounded-full"></div>
        </div>
      </div>
      
      {/* Main header content */}
      <div className="pt-16 pb-8 text-center">
        <h1 className="text-3xl md:text-5xl mb-4 text-minecraft-dirt drop-shadow-md">MINECRAFT ANARCHY</h1>
        
        <div className="max-w-md mx-auto bg-black/10 backdrop-blur-sm p-4 rounded-lg border-2 border-black">
          <h2 className="text-lg font-pixel mb-2">SERVER IP</h2>
          <div className="flex items-center justify-center">
            <span className="font-mono text-lg mr-2">{serverIP}</span>
            <Button onClick={handleCopyIP} className="pixel-button">
              <Copy className="h-4 w-4 mr-1" /> Copy
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
