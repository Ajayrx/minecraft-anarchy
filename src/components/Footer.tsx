
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 border-t-4 border-minecraft-dirt">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-pixel text-lg mb-4">Pixel Portal Haven</h3>
            <p className="text-sm">The best Minecraft server experience with a community focus and regular events.</p>
          </div>
          
          <div>
            <h3 className="font-pixel text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-minecraft-grass transition-colors">Discord</a></li>
              <li><a href="#" className="text-sm hover:text-minecraft-grass transition-colors">Forums</a></li>
              <li><a href="#" className="text-sm hover:text-minecraft-grass transition-colors">Wiki</a></li>
              <li><a href="#" className="text-sm hover:text-minecraft-grass transition-colors">Vote</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-pixel text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-minecraft-grass transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-minecraft-grass transition-colors">EULA</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© 2025 Pixel Portal Haven. Not affiliated with Mojang Studios.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
