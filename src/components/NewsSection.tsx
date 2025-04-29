
import React, { useState } from 'react';
import { Newspaper, Calendar, Info, ChevronDown, ChevronUp, BookOpen, FileText } from 'lucide-react';
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
  const [expandedId, setExpandedId] = useState<number | null>(1); // First item expanded by default
  
  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  const newsItems: NewsItem[] = [
    {
      id: 1,
      date: "2025-04-23",
      title: "Server Maintenance Complete",
      content: "We've successfully completed our server maintenance and updated to 1.21.5, which now works perfectly! Bedrock players in the latest edition can now also join seamlessly. We've also implemented performance improvements to reduce lag during peak hours. The new chunk loading system makes exploration much smoother and the server can now handle up to 300 players simultaneously without any performance issues.",
      isImportant: true,
      tag: "Update"
    },
    {
      id: 2,
      date: "2025-04-23",
      title: "Server Performance Upgrade",
      content: "Render distance has been updated to 32 chunks! We've also updated SimpleVoiceChat for better audio quality and implemented Distant Horizons for improved rendering. These changes should significantly enhance your experience while exploring the vast anarchy world. Our new custom plugins ensure that even with the increased render distance, server performance remains stable. PvP combat is now smoother with reduced server-side latency.",
      tag: "Technical"
    },
    {
      id: 3,
      title: "Event Winners Announced",
      date: "2025-04-21",
      content: "Congratulations to the winners of our recent PVP tournament! The battle was epic, with impressive displays of strategy and skill. Join our Discord to participate in the next community event happening this weekend. Special prizes await the victors, including unique cosmetic items and server prestige. The next tournament will feature a specially designed arena with traps and challenges for an even more intense experience.",
      tag: "Event"
    },
    {
      id: 4,
      title: "Server Map Update",
      date: "2025-04-20",
      content: "The world border has been expanded by 10,000 blocks in all directions, opening up vast new territories for exploration and base building. New resources and untouched lands await the most adventurous players. Several new biomes have been discovered including rare structures with valuable loot. The first players to reach the new world border will be featured in our hall of fame.",
      tag: "World"
    }
  ];
  
  return (
    <section id="news" className="py-16 md:py-24 bg-gradient-to-br from-minecraft-dirt/30 to-minecraft-stone/20 relative">
      {/* Side decorations */}
      <div className="side-decor left-0"></div>
      <div className="side-decor right-0" style={{ backgroundPosition: '10px 10px' }}></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-minecraft-dirt/5 rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-minecraft-stone/5 rounded-full"></div>
        <div className="absolute top-1/3 right-10 w-20 h-20 bg-minecraft-wood/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="hidden md:flex w-24 h-1 bg-minecraft-wood/50 rounded"></div>
          <Newspaper className="w-10 h-10 text-minecraft-wood" />
          <h2 className="text-4xl md:text-5xl text-center font-pixel">Latest News</h2>
          <div className="hidden md:flex w-24 h-1 bg-minecraft-wood/50 rounded"></div>
        </div>
        
        <div className="max-w-5xl mx-auto bg-[#f8f5ea]/80 backdrop-blur rounded-lg border-2 border-black/20 shadow-2xl p-6 md:p-8 relative overflow-hidden">
          {/* Texture overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0-3a4 4 0 1 1 0-8 4 4 0 0 1 0 8z\" fill=\"%23612500\" fill-opacity=\"0.05\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')] opacity-30 pointer-events-none"></div>
          
          {/* Desktop news layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 gap-y-8">
              {newsItems.map((item) => (
                <div 
                  key={item.id} 
                  className={`news-card ${
                    item.isImportant ? 'border-l-4 border-red-600' : ''
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3">
                        {item.tag === "Update" && <FileText className="w-5 h-5 text-blue-600" />}
                        {item.tag === "Technical" && <Info className="w-5 h-5 text-amber-600" />}
                        {item.tag === "Event" && <BookOpen className="w-5 h-5 text-green-600" />}
                        {item.tag === "World" && <Newspaper className="w-5 h-5 text-purple-600" />}
                        
                        <h3 className="font-pixel text-xl text-minecraft-dirt">{item.title}</h3>
                      </div>
                      
                      <div className="flex items-center gap-2 mt-2">
                        {item.tag && (
                          <Badge variant="outline" className="bg-minecraft-wood/20 text-xs font-semibold">
                            {item.tag}
                          </Badge>
                        )}
                        <div className="flex items-center gap-1 text-sm text-gray-500 font-mono">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => toggleExpand(item.id)}
                      className="p-2 hover:bg-black/5 rounded-full transition-colors"
                      aria-label={expandedId === item.id ? "Collapse news" : "Expand news"}
                    >
                      {expandedId === item.id ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedId === item.id ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="prose">
                      <p className="text-base">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile news carousel with better design */}
          <div className="md:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {newsItems.map((item) => (
                  <CarouselItem key={item.id}>
                    <div className={`news-card min-h-[250px] flex flex-col ${
                      item.isImportant ? 'border-l-4 border-red-600' : ''
                    }`}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          {item.tag === "Update" && <FileText className="w-5 h-5 text-blue-600" />}
                          {item.tag === "Technical" && <Info className="w-5 h-5 text-amber-600" />}
                          {item.tag === "Event" && <BookOpen className="w-5 h-5 text-green-600" />}
                          {item.tag === "World" && <Newspaper className="w-5 h-5 text-purple-600" />}
                          
                          <h3 className="font-pixel text-lg text-minecraft-dirt">{item.title}</h3>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        {item.tag && (
                          <Badge variant="outline" className="bg-minecraft-wood/20 text-xs">
                            {item.tag}
                          </Badge>
                        )}
                        <div className="flex items-center gap-1 text-xs text-gray-500 font-mono">
                          <Calendar className="w-3 h-3" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                      
                      <p className="flex-grow text-sm">{item.content}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6 gap-2">
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
