
import React, { useState } from 'react';
import { Newspaper, Calendar, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface NewsItem {
  id: number;
  date: string;
  title: string;
  content: string;
  isImportant?: boolean;
  tag?: string;
}

const NewsSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  const newsItems: NewsItem[] = [
    {
      id: 1,
      date: "2025-04-23",
      title: "Server Maintenance Complete",
      content: "We've successfully completed our server maintenance and updated to 1.21.5, which now works perfectly! Bedrock players in the latest edition can now also join seamlessly. We've also implemented performance improvements to reduce lag during peak hours.",
      isImportant: true,
      tag: "Update"
    },
    {
      id: 2,
      date: "2025-04-23",
      title: "Server Performance Upgrade",
      content: "Render distance has been updated to 32 chunks! We've also updated SimpleVoiceChat for better audio quality and implemented Distant Horizons for improved rendering. These changes should significantly enhance your experience while exploring the vast anarchy world.",
      tag: "Technical"
    },
    {
      id: 3,
      title: "Event Winners Announced",
      date: "2025-04-21",
      content: "Congratulations to the winners of our recent PVP tournament! The battle was epic, with impressive displays of strategy and skill. Join our Discord to participate in the next community event happening this weekend.",
      tag: "Event"
    },
    {
      id: 4,
      title: "Server Map Update",
      date: "2025-04-20",
      content: "The world border has been expanded by 10,000 blocks in all directions, opening up vast new territories for exploration and base building. New resources and untouched lands await the most adventurous players.",
      tag: "World"
    }
  ];
  
  return (
    <section id="news" className="py-12 md:py-16 bg-gradient-to-br from-minecraft-dirt/30 to-minecraft-stone/20 relative">
      {/* Side decorations */}
      <div className="side-decor left-0"></div>
      <div className="side-decor right-0" style={{ backgroundPosition: '10px 10px' }}></div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Newspaper className="w-8 h-8 text-minecraft-wood" />
          <h2 className="text-3xl md:text-4xl text-center font-pixel">Latest News</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* Desktop news layout */}
          <div className="hidden md:block">
            <div className="minecraft-scroll">
              <ScrollArea className="h-[360px] pr-4">
                <div className="space-y-4">
                  {newsItems.map((item) => (
                    <div 
                      key={item.id} 
                      className={`news-item transform transition-all duration-200 hover:translate-x-1 ${
                        item.isImportant ? 'border-l-4 border-red-600' : ''
                      }`}
                    >
                      <div className="flex justify-between items-baseline mb-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-pixel text-lg text-minecraft-dirt">{item.title}</h3>
                          {item.tag && (
                            <Badge variant="outline" className="bg-minecraft-wood/20 text-xs">
                              {item.tag}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500 font-mono">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${
                        expandedId === item.id ? 'max-h-48' : 'max-h-12'
                      }`}>
                        <p>{item.content}</p>
                      </div>
                      
                      <button 
                        onClick={() => toggleExpand(item.id)}
                        className="mt-2 flex items-center text-xs text-minecraft-wood hover:text-minecraft-dirt transition-colors"
                      >
                        {expandedId === item.id ? (
                          <>Less <ChevronUp className="w-4 h-4 ml-1" /></>
                        ) : (
                          <>Read more <ChevronDown className="w-4 h-4 ml-1" /></>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
          
          {/* Mobile news carousel */}
          <div className="md:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {newsItems.map((item) => (
                  <CarouselItem key={item.id}>
                    <div className={`news-item min-h-[200px] flex flex-col ${
                      item.isImportant ? 'border-l-4 border-red-600' : ''
                    }`}>
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="font-pixel text-lg text-minecraft-dirt">{item.title}</h3>
                        {item.tag && (
                          <Badge variant="outline" className="bg-minecraft-wood/20 text-xs">
                            {item.tag}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-1 text-xs text-gray-500 font-mono mb-2">
                        <Calendar className="w-3 h-3" />
                        <span>{item.date}</span>
                      </div>
                      
                      <p className="flex-grow">{item.content}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4 gap-2">
                <CarouselPrevious className="relative inset-0 translate-y-0 -left-0" />
                <CarouselNext className="relative inset-0 translate-y-0 -right-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
