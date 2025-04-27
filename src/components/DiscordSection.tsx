import React from 'react';
import { MessageSquare } from 'lucide-react';

const DiscordSection = () => {
  return (
    <section id="discord" className="py-12 bg-minecraft-stone/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <MessageSquare className="w-8 h-8 text-[#5865F2]" />
            <h2 className="text-2xl md:text-3xl font-pixel">Join Our Discord</h2>
          </div>
          
          <p className="text-base">
            Connect with other players, report issues, and stay updated with server news!
          </p>
          
          <a 
            href="https://discord.gg/wKt4tsbxwj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block pixel-button group transform hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Join Discord
              <MessageSquare className="w-5 h-5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;
