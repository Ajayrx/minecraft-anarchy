
import React from 'react';

const TermsSection = () => {
  const rules = [
    "This is an ANARCHY server - there are no rules except:",
    "Do not use exploits that crash the server",
    "Do not intentionally cause server lag",
    "Everything else is allowed - raid, grief, hack, or do whatever you want",
    "No admin intervention - you are on your own",
    "No refunds, no appeals, no exceptions"
  ];

  return (
    <section id="terms" className="py-12 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl text-center mb-8">Server Rules</h2>
        
        <div className="minecraft-scroll max-w-3xl mx-auto">
          <h3 className="font-pixel text-xl mb-6 text-center">Anarchy Rules</h3>
          
          <div className="space-y-4">
            <p className="mb-4">
              Welcome to true Minecraft anarchy. There are no admins, no rules, no protection:
            </p>
            
            <ol className="list-decimal pl-6 space-y-2">
              {rules.map((rule, index) => (
                <li key={index} className="mb-2">{rule}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsSection;
