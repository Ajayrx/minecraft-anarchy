
import React, { useState } from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const { toast } = useToast();
  const serverIP = "minecraftanarchy.com";
  const [copied, setCopied] = useState(false);
  
  const handleCopyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    
    toast({
      title: "Server IP Copied!",
      description: "The IP has been copied to your clipboard"
    });
    
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="relative py-8">
      {/* Animated clouds - optimized for performance */}
      <div className="absolute top-0 left-0 w-full h-24 pointer-events-none overflow-hidden">
        <div className="absolute w-full" style={{
          animation: "float-horizontal 60s linear infinite",
          animationDelay: "-5s",
          willChange: "transform"
        }}>
          <div className="absolute top-2 left-[10%] w-16 h-8 bg-white opacity-70 rounded-full"></div>
          <div className="absolute top-6 left-[35%] w-24 h-10 bg-white opacity-70 rounded-full"></div>
          <div className="absolute top-4 left-[70%] w-20 h-8 bg-white opacity-70 rounded-full"></div>
        </div>
      </div>
      
      {/* Main header content */}
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 text-minecraft-dirt drop-shadow-md font-pixel">MINECRAFT ANARCHY</h1>
          
          <div className="max-w-md mx-auto bg-black/10 backdrop-blur-sm p-6 rounded-lg border-2 border-black shadow-lg">
            <h2 className="text-lg md:text-xl font-pixel mb-4">SERVER IP</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="bg-white/90 px-4 py-2 rounded border border-black w-full sm:w-auto text-center">
                <span className="font-mono text-lg font-semibold select-all">{serverIP}</span>
              </div>
              <Button 
                onClick={handleCopyIP} 
                className="pixel-button w-full sm:w-auto flex items-center justify-center gap-2"
                disabled={copied}
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" /> Copy IP
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
