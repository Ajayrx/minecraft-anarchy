
import React from 'react';
import { MessageSquare } from 'lucide-react';

const DiscordSection = () => {
  return (
    <section id="discord" className="py-12 md:py-16 bg-[#5865F2]/10 relative">
      {/* Background textures */}
      <div className="absolute inset-0 opacity-5 bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%235865F2' d='M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z'/%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-lg border-2 border-[#5865F2] shadow-lg space-y-6">
          <div className="flex items-center justify-center gap-3">
            <div className="bg-[#5865F2] p-3 rounded-full">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-pixel">Join Our Discord</h2>
          </div>
          
          <p className="text-base md:text-lg">
            Connect with other players, report issues, and stay updated with server news on our active Discord community!
          </p>
          
          <div className="grid gap-4 md:grid-cols-3 text-center">
            <div className="p-4 bg-[#5865F2]/10 rounded-lg">
              <h3 className="font-semibold mb-2">Find Friends</h3>
              <p className="text-sm">Meet players to team up with or raid against</p>
            </div>
            <div className="p-4 bg-[#5865F2]/10 rounded-lg">
              <h3 className="font-semibold mb-2">Get Support</h3>
              <p className="text-sm">Report technical issues or get help from staff</p>
            </div>
            <div className="p-4 bg-[#5865F2]/10 rounded-lg">
              <h3 className="font-semibold mb-2">Stay Updated</h3>
              <p className="text-sm">Be first to know about events and updates</p>
            </div>
          </div>
          
          <a 
            href="https://discord.gg/wKt4tsbxwj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block pixel-button group transform hover:scale-105 transition-all duration-200 py-3 px-6 bg-[#5865F2] hover:bg-[#4a54c6]"
          >
            <span className="flex items-center gap-2 text-lg">
              Join Our Discord
              <MessageSquare className="w-5 h-5" />
            </span>
          </a>
          
          <p className="text-sm text-gray-600">
            Already on Discord? Search for our server: <span className="font-mono font-bold">MinecraftAnarchy</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;
