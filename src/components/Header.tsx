
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
    <header className="relative py-12">
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-8 font-heading font-bold text-white drop-shadow-lg">
            MINECRAFT ANARCHY
          </h1>
          
          <div className="max-w-md mx-auto bg-white/20 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
            <h2 className="text-xl md:text-2xl font-heading font-semibold mb-6 text-white">SERVER IP</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="bg-white/95 px-6 py-3 rounded-lg border border-gray-200 w-full sm:w-auto text-center shadow-lg">
                <span className="font-mono text-lg font-semibold select-all text-gray-800">{serverIP}</span>
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
