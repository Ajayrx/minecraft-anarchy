
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bug, Wrench } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PlayerIssuesSection = () => {
  const { toast } = useToast();
  
  // Flickering torch effect
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
    <section id="issues" className="py-12 bg-minecraft-stone/20 relative">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9")',
          filter: 'grayscale(50%)'
        }}
      />
      
      {/* Torch lights with improved animation */}
      {torchPositions.map((pos, idx) => (
        <div 
          key={idx} 
          className="torch-light animate-pulse" 
          style={{ 
            ...pos, 
            animationDelay: `${idx * 0.3}s` 
          }} 
        />
      ))}
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl text-center mb-8 text-black drop-shadow-lg">Player Issues</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card className="bg-[#F9F3E5]/90 backdrop-blur border-2 border-black overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader className="bg-minecraft-wood text-white font-pixel">
              <CardTitle className="text-center text-lg flex items-center justify-center gap-2">
                <Bug className="h-5 w-5" />
                Bug Reports
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4">Found a server-breaking bug or exploit? Report it here.</p>
              <Button 
                onClick={handleBugReport} 
                className="pixel-button w-full group transform transition-all duration-300 hover:scale-105"
              >
                Report a Bug
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-[#F9F3E5]/90 backdrop-blur border-2 border-black overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader className="bg-minecraft-wood text-white font-pixel">
              <CardTitle className="text-center text-lg flex items-center justify-center gap-2">
                <Wrench className="h-5 w-5" />
                Player Support
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4">Need technical help with connecting or other issues? Contact support.</p>
              <Button 
                onClick={handleSupport} 
                className="pixel-button w-full group transform transition-all duration-300 hover:scale-105"
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
