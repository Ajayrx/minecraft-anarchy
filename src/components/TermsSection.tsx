
import React from 'react';
import { Shield, AlertTriangle, Skull } from 'lucide-react';

const TermsSection = () => {
  const rules = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-yellow-400" />,
      text: "No server exploits or intentional lag",
    },
    {
      icon: <Skull className="w-6 h-6 text-red-400" />,
      text: "Everything else is allowed - raid, grief, hack",
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      text: "No admin intervention - you're on your own",
    }
  ];

  return (
    <section id="terms" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="section-heading text-white">Server Rules</h2>
        
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
              <Skull className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">ANARCHY SERVER</h3>
            <p className="text-gray-300">True anarchy - minimal rules, maximum chaos</p>
          </div>
          
          <div className="space-y-4 mb-8">
            {rules.map((rule, index) => (
              <div 
                key={index} 
                className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="mr-4 flex-shrink-0">
                  {rule.icon}
                </div>
                <p className="text-white text-lg">{rule.text}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center p-6 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-lg border border-red-500/30">
            <p className="text-white text-lg">
              <span className="font-bold text-red-400">By joining, you accept there are no rules beyond those above.</span>
              <br/>
              The true anarchy experience awaits!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsSection;
