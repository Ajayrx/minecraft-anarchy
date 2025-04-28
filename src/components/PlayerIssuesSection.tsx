
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bug, Wrench } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PlayerIssuesSection = () => {
  const { toast } = useToast();
  
  // Flickering torch effect - optimized
  const torchPositions = [
    { top: '10%', left: '5%' },
    { top: '15%', right: '8%' },
    { bottom: '20%', left: '10%' },
    { bottom: '15%', right: '12%' }
  ];

  const handleBugReport = () => {
    toast({
      title: "Bug Report",
      description: "Please join our Discord to report bugs!"
    });
  };

  const handleSupport = () => {
    toast({
      title: "Support Request",
      description: "Our support team will be with you shortly!"
    });
  };
  
  return (
    <section id="issues" className="py-12 md:py-16 relative">
      {/* Improved background with better performance */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9")',
            filter: 'grayscale(50%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
      </div>
      
      {/* Torch lights with improved animation */}
      {torchPositions.map((pos, idx) => (
        <div 
          key={idx} 
          className="torch-light" 
          style={{ 
            ...pos,
            animationDelay: `${idx * 0.5}s`,
            animationDuration: `${2 + Math.random()}s`
          }} 
        />
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl text-center mb-8 md:mb-12 text-black drop-shadow-lg font-pixel">Player Issues</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-[#F9F3E5]/90 backdrop-blur border-2 border-black overflow-hidden transform transition-all duration-200 hover:scale-102 hover:shadow-xl">
            <CardHeader className="bg-minecraft-wood text-white font-pixel p-6">
              <CardTitle className="text-center text-lg md:text-xl flex items-center justify-center gap-3">
                <Bug className="h-5 w-5" />
                Bug Reports
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-6 text-base">Found a server-breaking bug or exploit? Let us know and we'll investigate the issue.</p>
              <Button 
                onClick={handleBugReport} 
                className="pixel-button w-full group transform transition-all duration-200"
              >
                Report a Bug
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-[#F9F3E5]/90 backdrop-blur border-2 border-black overflow-hidden transform transition-all duration-200 hover:scale-102 hover:shadow-xl">
            <CardHeader className="bg-minecraft-wood text-white font-pixel p-6">
              <CardTitle className="text-center text-lg md:text-xl flex items-center justify-center gap-3">
                <Wrench className="h-5 w-5" />
                Player Support
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-6 text-base">Need technical help with connecting or other issues? Our team is here to assist.</p>
              <Button 
                onClick={handleSupport} 
                className="pixel-button w-full group transform transition-all duration-200"
              >
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlayerIssuesSection;
