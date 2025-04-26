
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ShopItem {
  id: number;
  name: string;
  description: string;
  price: string;
  popular?: boolean;
  features: string[];
}

const ShopSection = () => {
  const shopItems: ShopItem[] = [
    {
      id: 1,
      name: "VIP Rank",
      description: "Unlock special perks with our entry-level rank",
      price: "$5.99",
      features: [
        "Colored chat prefix",
        "5 home locations",
        "Access to /fly in hub",
        "Priority server queue"
      ]
    },
    {
      id: 2,
      name: "MVP Rank",
      description: "Our most popular rank with exclusive benefits",
      price: "$14.99",
      popular: true,
      features: [
        "Unique chat prefix",
        "10 home locations",
        "Access to /fly everywhere",
        "Priority server queue",
        "Custom nickname",
        "Pet companions"
      ]
    },
    {
      id: 3,
      name: "Pet Bundle",
      description: "Get a collection of cute pet companions",
      price: "$9.99",
      features: [
        "5 unique pets",
        "Pet customization",
        "Special pet abilities",
        "Pet inventory storage"
      ]
    }
  ];
  
  return (
    <section id="shop" className="py-12 relative overflow-hidden">
      {/* Pixelated background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="grid grid-cols-8 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div 
              key={i} 
              className="aspect-square" 
              style={{ 
                backgroundColor: 
                  Math.random() > 0.5 
                    ? '#5D9C59' 
                    : Math.random() > 0.5 
                      ? '#8B4513' 
                      : '#8E9196' 
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl text-center mb-8">Server Shop</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {shopItems.map((item) => (
            <Card 
              key={item.id} 
              className={`border-2 border-black overflow-hidden ${
                item.popular ? 'ring-4 ring-minecraft-grass' : ''
              }`}
            >
              <CardHeader className="bg-minecraft-wood text-white">
                <div className="flex justify-between items-start">
                  <CardTitle className="font-pixel">{item.name}</CardTitle>
                  {item.popular && (
                    <Badge className="bg-minecraft-grass">Popular</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4">{item.description}</p>
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-minecraft-grass">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col space-y-3 p-6 pt-0">
                <div className="text-2xl font-bold mb-2 font-pixel">{item.price}</div>
                <Button className="pixel-button w-full">Purchase</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
