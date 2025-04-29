
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, AlertTriangle, Skull, BadgeInfo } from 'lucide-react';

const TermsSection = () => {
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

  return (
    <section id="terms" className="py-12 md:py-16 bg-gradient-to-br from-minecraft-stone/30 to-minecraft-dirt/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-20 h-20 bg-red-500/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-amber-500/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 right-10 w-16 h-16 bg-blue-500/5 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Side decorations */}
      <div className="side-decor left-0"></div>
      <div className="side-decor right-0" style={{ backgroundPosition: '10px 10px' }}></div>
      
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-8 font-pixel">Server Rules</h2>
        
        <div className="minecraft-scroll max-w-3xl mx-auto transform transition-all duration-300 hover:scale-102">
          <ScrollArea className="h-[320px] rounded-md pr-4">
            <div className="space-y-8 px-1">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-black/80 rounded-full flex items-center justify-center mr-4">
                  <Skull className="w-10 h-10 text-red-500" />
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
                    className={`flex items-center p-3 rounded-lg transition-all duration-200 hover:translate-x-1 ${
                      rule.highlight 
                        ? 'bg-black/10 border-l-4 border-red-500' 
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
              
              <div className="mt-6 p-4 bg-black/10 rounded-lg border border-black/20">
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
