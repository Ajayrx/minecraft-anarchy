import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Store } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
const ShopSection = () => {
  const isMobile = useIsMobile();
  const shopItems = [{
    name: "Totems",
    price: "8 diamonds",
    description: "Shulker Boxes x 1"
  }, {
    name: "Gapples",
    price: "32 diamonds",
    description: "Stack of Golden Apples"
  }, {
    name: "Crystals",
    price: "64 diamonds",
    description: "Shulker Boxes x 1"
  }, {
    name: "Kits",
    price: "64 diamonds",
    description: "PvP Starter Kit"
  }, {
    name: "Elytras",
    price: "128 diamonds",
    description: "Elytra with Unbreaking III + Mending"
  }, {
    name: "Shulkers",
    price: "64 diamonds",
    description: "6 Shulker Boxes"
  }];
  return <section id="shop" className="py-8 md:py-12 bg-minecraft-stone/20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-center mb-6 md:mb-8 font-pixel">In-Game Shop</h2>
        
        <div className="minecraft-scroll max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
            <Store className="w-5 h-5 md:w-6 md:h-6" />
            <h3 className="font-pixel text-lg md:text-xl">Trade with Diamonds</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {shopItems.map((item, index) => <Card key={index} className="border-2 border-black bg-white/90 transform transition-transform hover:scale-105">
                <CardHeader className="p-3 md:p-4">
                  <CardTitle className="font-pixel text-base md:text-lg">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-3 md:p-4 pt-0">
                  <p className="text-minecraft-wood font-bold text-sm md:text-base">{item.price}</p>
                  <p className="text-xs mt-1 md:mt-2 text-inherit md:text-sm font-semibold">{item.description}</p>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="mt-6 md:mt-8 text-center text-xs md:text-sm">
            <p>All trades are conducted in-game using diamonds as currency.</p>
            <p className="mt-1 md:mt-2">Contact server staff in-game for trades.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default ShopSection;