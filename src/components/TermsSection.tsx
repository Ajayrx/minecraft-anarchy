
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
    <section id="terms" className="py-12 md:py-16 bg-gradient-to-br from-minecraft-stone/30 to-minecraft-dirt/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-20 h-20 bg-red-500/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-amber-500/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 right-10 w-16 h-16 bg-blue-500/5 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Side decorations */}
      <div className="side-decor left-0"></div>
      <div className="side-decor right-0" style={{ backgroundPosition: '10px 10px' }}></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-8 font-pixel">Server Rules</h2>
        
        <div className="minecraft-scroll max-w-3xl mx-auto transform transition-all duration-300 hover:scale-[1.01]">
          <ScrollArea className="h-[320px] rounded-md pr-4 smooth-scrolling">
            <div className="space-y-8 px-1" ref={rulesRef}>
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-black/80 rounded-full flex items-center justify-center mr-4 shadow-[0_0_15px_rgba(255,0,0,0.2)]">
                  <Skull className="w-10 h-10 text-red-500 animate-pulse" />
                </div>
                <h3 className="font-pixel text-xl">ANARCHY RULES</h3>
              </div>
              
              <p className="text-center font-pixel mb-6 text-sm md:text-base">
                Welcome to true Minecraft anarchy. There are no admins, no rules, no protection.
              </p>
              
              <div className="space-y-5">
                {rules.map((rule, index) => (
                  <div 
                    key={index} 
                    className={`rule-item flex items-center p-3 rounded-lg transition-all duration-300 hover:translate-x-1 opacity-0 ${
                      rule.highlight 
                        ? 'bg-black/10 border-l-4 border-red-500 shadow-md' 
                        : 'border-l-4 border-amber-700/30'
                    }`}
                  >
                    <div className="mr-3 flex-shrink-0">
                      {rule.icon}
                    </div>
                    <p className={`${rule.highlight ? 'font-medium' : ''}`}>
                      {rule.text}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-black/10 to-black/5 rounded-lg border border-black/20 transform transition-all duration-200 hover:scale-[1.02]">
                <p className="text-sm text-center italic">
                  By joining our server, you accept that there are no rules beyond those mentioned above.
                  The true anarchy experience awaits!
                </p>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default TermsSection;
