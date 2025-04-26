
import React from 'react';

const TermsSection = () => {
  const rules = [
    "No griefing or destroying other players' builds without permission",
    "No hacking, cheating, or using exploits of any kind",
    "Keep chat civil - no excessive swearing, harassment, or discrimination",
    "No spamming in chat or with redstone contraptions",
    "Do not advertise other servers or websites",
    "Staff decisions are final - don't argue with staff members",
    "Respect all players and staff at all times",
    "No intentional server lag or disruption",
    "Do not share personal information of others",
    "Have fun and enjoy the server!"
  ];

  return (
    <section id="terms" className="py-12 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl text-center mb-8">Server Rules</h2>
        
        <div className="minecraft-scroll max-w-3xl mx-auto">
          <h3 className="font-pixel text-xl mb-6 text-center">Terms & Conditions</h3>
          
          <div className="space-y-4">
            <p className="mb-4">
              Welcome to Pixel Portal Haven! By playing on our server, you agree to follow these rules:
            </p>
            
            <ol className="list-decimal pl-6 space-y-2">
              {rules.map((rule, index) => (
                <li key={index} className="mb-2">{rule}</li>
              ))}
            </ol>
            
            <p className="mt-6 text-sm italic">
              The server administration reserves the right to modify these rules at any time. 
              Players are responsible for staying updated with the current rules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsSection;
