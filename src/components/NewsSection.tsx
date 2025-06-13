
import React, { useState } from 'react';
import { Newspaper, Calendar, Info, ChevronDown, ChevronUp, BookOpen, FileText, Star } from 'lucide-react';
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
  const [expandedId, setExpandedId] = useState<number | null>(1);
  
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

  const getTagColors = (tag: string | undefined) => {
    switch (tag) {
      case "Update": 
        return {
          bg: "bg-blue-50",
          text: "text-blue-700",
          border: "border-blue-200"
        };
      case "Technical": 
        return {
          bg: "bg-amber-50",
          text: "text-amber-700",
          border: "border-amber-200"
        };
      case "Event": 
        return {
          bg: "bg-green-50",
          text: "text-green-700",
          border: "border-green-200"
        };
      case "World": 
        return {
          bg: "bg-purple-50",
          text: "text-purple-700",
          border: "border-purple-200"
        };
      default: 
        return {
          bg: "bg-gray-50",
          text: "text-gray-700",
          border: "border-gray-200"
        };
    }
  };
  
  return (
    <section id="news" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 rounded-full mb-6 border border-gray-200">
            <Star className="w-4 h-4 mr-2 text-minecraft-wood" />
            <span className="text-sm font-medium">Server Updates</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl text-center font-pixel mb-6 text-gray-800">Latest News</h2>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Stay updated with the latest changes and announcements for our Minecraft anarchy server
          </p>
          
          <div className="mt-8 h-1 w-32 bg-minecraft-wood mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-xl p-8 md:p-12">
          {/* Desktop news layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 gap-y-8">
              {newsItems.map((item) => {
                const tagColors = getTagColors(item.tag);
                return (
                  <div 
                    key={item.id} 
                    className={`news-card ${item.isImportant ? 'border-l-4 border-red-500' : ''}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl ${tagColors.bg}`}>
                            {item.tag === "Update" && <FileText className={`w-6 h-6 ${tagColors.text}`} />}
                            {item.tag === "Technical" && <Info className={`w-6 h-6 ${tagColors.text}`} />}
                            {item.tag === "Event" && <BookOpen className={`w-6 h-6 ${tagColors.text}`} />}
                            {item.tag === "World" && <Newspaper className={`w-6 h-6 ${tagColors.text}`} />}
                          </div>
                          
                          <h3 className="font-pixel text-2xl text-gray-800">{item.title}</h3>
                          
                          {item.isImportant && (
                            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                              Important
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-3 mt-3">
                          {item.tag && (
                            <Badge variant="outline" className={`${tagColors.bg} ${tagColors.text} ${tagColors.border} text-sm font-semibold`}>
                              {item.tag}
                            </Badge>
                          )}
                          <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
                            <Calendar className="w-4 h-4" />
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => toggleExpand(item.id)}
                        className={`p-3 rounded-full transition-colors ${
                          expandedId === item.id ? `${tagColors.bg} ${tagColors.text}` : 'hover:bg-gray-100'
                        }`}
                      >
                        {expandedId === item.id ? (
                          <ChevronUp className="w-6 h-6" />
                        ) : (
                          <ChevronDown className="w-6 h-6" />
                        )}
                      </button>
                    </div>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${
                      expandedId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className={`p-6 rounded-xl ${tagColors.bg} border ${tagColors.border} mt-4`}>
                        <p className="text-lg leading-relaxed text-gray-700">{item.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Mobile news carousel */}
          <div className="md:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {newsItems.map((item) => {
                  const tagColors = getTagColors(item.tag);
                  return (
                    <CarouselItem key={item.id}>
                      <div className={`news-card min-h-[320px] flex flex-col ${
                        item.isImportant ? 'border-l-4 border-red-500' : ''
                      }`}>
                        <div className="flex justify-between items-center mb-4">
                          <div className={`p-2 rounded-lg ${tagColors.bg} mr-2`}>
                            {item.tag === "Update" && <FileText className={`w-5 h-5 ${tagColors.text}`} />}
                            {item.tag === "Technical" && <Info className={`w-5 h-5 ${tagColors.text}`} />}
                            {item.tag === "Event" && <BookOpen className={`w-5 h-5 ${tagColors.text}`} />}
                            {item.tag === "World" && <Newspaper className={`w-5 h-5 ${tagColors.text}`} />}
                          </div>
                          
                          <h3 className="font-pixel text-lg text-gray-800 flex-1">{item.title}</h3>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="outline" className={`${tagColors.bg} ${tagColors.text} ${tagColors.border} text-xs`}>
                            {item.tag}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-gray-500 font-mono">
                            <Calendar className="w-3 h-3" />
                            <span>{item.date}</span>
                          </div>
                        </div>
                        
                        <div className={`p-4 rounded-lg ${tagColors.bg} border ${tagColors.border} flex-grow`}>
                          <p className="text-sm text-gray-700">{item.content}</p>
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
