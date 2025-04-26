
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

const ShopSection = () => {
  const shopItems = [
    { name: "Totems", price: "32 diamonds", description: "Bundle of Totems of Undying" },
    { name: "Gapples", price: "16 diamonds", description: "Stack of Golden Apples" },
    { name: "Crystals", price: "8 diamonds", description: "End Crystals Bundle" },
    { name: "Kits", price: "64 diamonds", description: "PvP Starter Kit" }
  ];

  return (
    <section id="shop" className="py-12 bg-minecraft-stone/20">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl text-center mb-8 font-pixel">In-Game Shop</h2>
        
        <div className="minecraft-scroll max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <ShoppingCart className="w-6 h-6" />
            <h3 className="font-pixel text-xl">Trade with Diamonds</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shopItems.map((item, index) => (
              <Card key={index} className="border-2 border-black bg-white/90">
                <CardHeader>
                  <CardTitle className="font-pixel text-lg">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-minecraft-wood font-bold">{item.price}</p>
                  <p className="text-sm mt-2">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center text-sm">
            <p>All trades are conducted in-game using diamonds as currency.</p>
            <p className="mt-2">Contact server staff in-game for trades.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
