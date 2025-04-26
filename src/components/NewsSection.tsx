
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface NewsItem {
  id: number;
  date: string;
  title: string;
  content: string;
}

const NewsSection = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      date: "2025-04-25",
      title: "Server Maintenance Complete",
      content: "The scheduled maintenance has been completed. All systems are now online with improved performance."
    },
    {
      id: 2,
      date: "2025-04-20",
      title: "New Survival World Launch",
      content: "Explore our new survival world with custom terrain generation and unique biomes!"
    },
    {
      id: 3,
      date: "2025-04-15",
      title: "Easter Event Winners",
      content: "Congratulations to all participants in our Easter egg hunt event. The top 3 winners have received their special rewards."
    },
    {
      id: 4,
      date: "2025-04-10",
      title: "Shop Update",
      content: "New cosmetic items have been added to the shop. Check them out now!"
    }
  ];
  
  return (
    <section id="news" className="py-12 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl text-center mb-8">Latest News</h2>
        
        <div className="max-w-2xl mx-auto space-y-4">
          {newsItems.map((item) => (
            <div key={item.id} className="news-item">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h3 className="font-pixel text-lg text-minecraft-dirt">{item.title}</h3>
                <span className="text-sm text-gray-500 font-mono">{item.date}</span>
              </div>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
