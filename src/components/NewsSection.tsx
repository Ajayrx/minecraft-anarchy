import React from 'react';

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
      date: "2025-04-23",
      title: "Server Maintenance Complete",
      content: "1.21.5 works well now + Bedrock in latest edition now works too! "
    },
    {
      id: 2,
      date: "2025-04-23",
      title: "Server Update",
      content: "Render distance updated at 32 + Update of SimpleVoiceChat and Distant Horizons"
    },
    {
      id: 3,
      title: "Event Winners",
      date: "",
      content: "No Events pending"
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
