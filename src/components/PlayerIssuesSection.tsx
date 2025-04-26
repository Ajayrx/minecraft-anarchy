
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PlayerIssuesSection = () => {
  // Flickering torch effect
  const torchPositions = [
    { top: '10%', left: '5%' },
    { top: '15%', right: '8%' },
    { bottom: '20%', left: '10%' },
    { bottom: '15%', right: '12%' }
  ];
  
  return (
    <section id="issues" className="py-12 bg-minecraft-stone/20 relative">
      {/* Torch lights */}
      {torchPositions.map((pos, idx) => (
        <div 
          key={idx} 
          className="torch-light" 
          style={{ 
            ...pos, 
            animationDelay: `${idx * 0.3}s` 
          }} 
        />
      ))}
      
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl text-center mb-8">Player Issues</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card className="bg-[#F9F3E5] border-2 border-black overflow-hidden">
            <CardHeader className="bg-minecraft-wood text-white font-pixel">
              <CardTitle className="text-center text-lg">Bug Reports</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4">Found an issue with the server? Let us know so we can fix it!</p>
              <Button className="pixel-button w-full">Report a Bug</Button>
            </CardContent>
          </Card>
          
          <Card className="bg-[#F9F3E5] border-2 border-black overflow-hidden">
            <CardHeader className="bg-minecraft-wood text-white font-pixel">
              <CardTitle className="text-center text-lg">Ban Appeals</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4">Wrongfully banned? Submit your appeal through our system.</p>
              <Button className="pixel-button w-full">Submit Appeal</Button>
            </CardContent>
          </Card>
          
          <Card className="bg-[#F9F3E5] border-2 border-black overflow-hidden md:col-span-2">
            <CardHeader className="bg-minecraft-wood text-white font-pixel">
              <CardTitle className="text-center text-lg">Player Support</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4">Need help with anything else? Our support team is here to assist you!</p>
              <Button className="pixel-button w-full">Contact Support</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlayerIssuesSection;
