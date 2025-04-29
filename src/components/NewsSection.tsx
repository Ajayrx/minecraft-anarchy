
import React, { useState } from 'react';
import { Newspaper, Calendar, Info, ChevronDown, ChevronUp, BookOpen, FileText, Star } from 'lucide-react';
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

  // Tag colors for badges and icons
  const getTagColors = (tag: string | undefined) => {
    switch (tag) {
      case "Update": 
        return {
          bg: "bg-blue-100",
          border: "border-blue-300",
          text: "text-blue-700"
        };
      case "Technical": 
        return {
          bg: "bg-amber-100",
          border: "border-amber-300",
          text: "text-amber-700"
        };
      case "Event": 
        return {
          bg: "bg-green-100",
          border: "border-green-300",
          text: "text-green-700"
        };
      case "World": 
        return {
          bg: "bg-purple-100",
          border: "border-purple-300", 
          text: "text-purple-700"
        };
      default: 
        return {
          bg: "bg-gray-100",
          border: "border-gray-300",
          text: "text-gray-700"
        };
    }
  };
  
  return (
    <section id="news" className="py-16 md:py-28 bg-gradient-to-br from-minecraft-dirt/30 to-minecraft-stone/20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/10 to-transparent"></div>
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-minecraft-dirt/5 rounded-full blur-xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-minecraft-stone/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header with Animation */}
        <div className="mb-16 text-center relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Newspaper className="w-40 h-40 text-minecraft-wood" />
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-minecraft-wood/10 rounded-full mb-4">
              <Star className="w-4 h-4 mr-2 text-minecraft-wood" />
              <span className="text-sm font-medium">Server Updates</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl text-center font-pixel mb-4">Latest News</h2>
            
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Stay updated with the latest changes and announcements for our Minecraft anarchy server
            </p>
            
            <div className="mt-8 h-1 w-32 bg-minecraft-wood/30 mx-auto rounded-full"></div>
          </div>
        </div>
        
        {/* News Content */}
        <div className="max-w-6xl mx-auto bg-[#f8f5ea]/90 backdrop-blur-sm rounded-xl border-2 border-black/20 shadow-2xl p-8 md:p-10 relative">
          {/* Paper texture background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%200h20v20H0V0zm10%2017a7%207%200%201%200%200-14%207%207%200%200%200%200%2014zm0-3a4%204%200%201%201%200-8%204%204%200%200%201%200%208z%22%20fill%3D%22%23612500%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22/%3E%3C/svg%3E')] opacity-20 pointer-events-none rounded-xl"></div>
          
          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-minecraft-dirt/40 rounded-tl-lg"></div>
          <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-minecraft-dirt/40 rounded-tr-lg"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-minecraft-dirt/40 rounded-bl-lg"></div>
          <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-minecraft-dirt/40 rounded-br-lg"></div>
          
          {/* Desktop news layout */}
          <div className="hidden md:block relative z-10">
            <div className="grid grid-cols-1 gap-y-8">
              {newsItems.map((item) => {
                const tagColors = getTagColors(item.tag);
                return (
                  <div 
                    key={item.id} 
                    className={`news-card ${item.isImportant ? 'border-l-6 border-red-600' : ''} 
                      transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${tagColors.bg}`}>
                            {item.tag === "Update" && <FileText className={`w-5 h-5 ${tagColors.text}`} />}
                            {item.tag === "Technical" && <Info className={`w-5 h-5 ${tagColors.text}`} />}
                            {item.tag === "Event" && <BookOpen className={`w-5 h-5 ${tagColors.text}`} />}
                            {item.tag === "World" && <Newspaper className={`w-5 h-5 ${tagColors.text}`} />}
                          </div>
                          
                          <h3 className="font-pixel text-xl text-minecraft-dirt">{item.title}</h3>
                          
                          {item.isImportant && (
                            <Badge variant="outline" className="bg-red-100 text-red-700 border-red-300">
                              Important
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2 mt-2">
                          {item.tag && (
                            <Badge variant="outline" className={`${tagColors.bg} ${tagColors.text} border-none text-xs font-semibold`}>
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
                        className={`p-3 rounded-full transition-colors ${
                          expandedId === item.id ? `${tagColors.bg} ${tagColors.text}` : 'hover:bg-black/5'
                        }`}
                        aria-label={expandedId === item.id ? "Collapse news" : "Expand news"}
                      >
                        {expandedId === item.id ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className={`p-4 rounded-lg ${tagColors.bg}/30 border border-${tagColors.border} mt-3`}>
                        <p className="text-base leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Mobile news carousel with better design */}
          <div className="md:hidden relative z-10">
            <Carousel className="w-full">
              <CarouselContent>
                {newsItems.map((item) => {
                  const tagColors = getTagColors(item.tag);
                  return (
                    <CarouselItem key={item.id}>
                      <div className={`news-card min-h-[280px] flex flex-col ${
                        item.isImportant ? 'border-l-4 border-red-600' : ''
                      }`}>
                        <div className="flex justify-between items-center mb-3">
                          <div className={`p-2 rounded-lg ${tagColors.bg} mr-2`}>
                            {item.tag === "Update" && <FileText className={`w-4 h-4 ${tagColors.text}`} />}
                            {item.tag === "Technical" && <Info className={`w-4 h-4 ${tagColors.text}`} />}
                            {item.tag === "Event" && <BookOpen className={`w-4 h-4 ${tagColors.text}`} />}
                            {item.tag === "World" && <Newspaper className={`w-4 h-4 ${tagColors.text}`} />}
                          </div>
                          
                          <h3 className="font-pixel text-lg text-minecraft-dirt flex-1">{item.title}</h3>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="outline" className={`${tagColors.bg} ${tagColors.text} border-none text-xs`}>
                            {item.tag}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-gray-500 font-mono">
                            <Calendar className="w-3 h-3" />
                            <span>{item.date}</span>
                          </div>
                        </div>
                        
                        <div className={`p-3 rounded-md ${tagColors.bg}/30 border ${tagColors.border} flex-grow`}>
                          <p className="text-sm">{item.content}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
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
