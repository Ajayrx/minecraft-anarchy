
import React, { useEffect, useRef } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, AlertTriangle, Skull, BadgeInfo } from 'lucide-react';

const TermsSection = () => {
  const rulesRef = useRef<HTMLDivElement>(null);
  
  const rules = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      text: "This is an ANARCHY server - there are no rules except:",
      highlight: true
    },
    {
      icon: <Shield className="w-5 h-5 text-amber-500" />,
      text: "Do not use exploits that crash the server",
      highlight: false
    },
    {
      icon: <Shield className="w-5 h-5 text-amber-500" />,
      text: "Do not intentionally cause server lag",
      highlight: false
    },
    {
      icon: <Skull className="w-5 h-5 text-gray-800" />,
      text: "Everything else is allowed - raid, grief, hack, or do whatever you want",
      highlight: true
    },
    {
      icon: <BadgeInfo className="w-5 h-5 text-blue-500" />,
      text: "No admin intervention - you are on your own",
      highlight: false
    },
    {
      icon: <BadgeInfo className="w-5 h-5 text-blue-500" />,
      text: "No refunds, no appeals, no exceptions",
      highlight: false
    }
  ];

  useEffect(() => {
    // Add animation to rules when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const ruleElements = rulesRef.current?.querySelectorAll('.rule-item');
          if (ruleElements) {
            Array.from(ruleElements).forEach((rule, index) => {
              setTimeout(() => {
                rule.classList.add('animate-fade-in');
                rule.classList.remove('opacity-0');
              }, index * 100); // Stagger the animations
            });
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (rulesRef.current) {
      observer.observe(rulesRef.current);
    }

    return () => {
      if (rulesRef.current) observer.disconnect();
    };
  }, []);

  return (
    <section id="terms" className="py-16 md:py-24 bg-gradient-to-br from-minecraft-stone/30 to-minecraft-dirt/20 relative overflow-hidden">
      {/* Animated background elements - enhanced */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-red-500/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-amber-500/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-blue-500/5 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl text-center mb-12 font-pixel">Server Rules</h2>
        
        <div className="minecraft-scroll max-w-5xl mx-auto transform transition-all duration-300 hover:scale-[1.01]">
          <ScrollArea className="h-[420px] md:h-[480px] rounded-md pr-4 smooth-scrolling">
            <div className="space-y-12 px-3" ref={rulesRef}>
              <div className="flex flex-col md:flex-row items-center justify-center mb-8">
                <div className="w-20 h-20 bg-black/80 rounded-full flex items-center justify-center mr-4 shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                  <Skull className="w-12 h-12 text-red-500 animate-pulse" />
                </div>
                <h3 className="font-pixel text-2xl md:text-3xl mt-4 md:mt-0">ANARCHY RULES</h3>
              </div>
              
              <p className="text-center font-pixel mb-8 text-base md:text-lg">
                Welcome to true Minecraft anarchy. There are no admins, no rules, no protection.
                <br />
                <span className="text-red-600">Survive if you can.</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rules.map((rule, index) => (
                  <div 
                    key={index} 
                    className={`rule-item flex items-center p-5 rounded-lg transition-all duration-300 hover:translate-x-1 opacity-0 ${
                      rule.highlight 
                        ? 'bg-black/10 border-l-4 border-red-500 shadow-md' 
                        : 'border-l-4 border-amber-700/30'
                    }`}
                  >
                    <div className="mr-4 flex-shrink-0">
                      {rule.icon}
                    </div>
                    <p className={`${rule.highlight ? 'font-medium text-lg' : 'text-base'}`}>
                      {rule.text}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-black/20 to-black/10 rounded-lg border border-black/20 transform transition-all duration-200 hover:scale-[1.02]">
                <p className="text-base text-center italic">
                  By joining our server, you accept that there are no rules beyond those mentioned above.
                  <br/>
                  <span className="font-semibold">The true anarchy experience awaits!</span>
                </p>
              </div>
            </div>
          </ScrollArea>
        </div>
        
        {/* Decorative corner elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-t-4 border-l-4 border-minecraft-dirt/40"></div>
        <div className="absolute top-10 right-10 w-20 h-20 border-t-4 border-r-4 border-minecraft-dirt/40"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 border-b-4 border-l-4 border-minecraft-dirt/40"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-4 border-r-4 border-minecraft-dirt/40"></div>
      </div>
    </section>
  );
};

export default TermsSection;
