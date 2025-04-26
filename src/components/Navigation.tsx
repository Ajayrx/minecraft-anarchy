
import React from 'react';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

const Navigation = () => {
  const navItems: NavItem[] = [
    { label: "News", href: "#news" },
    { label: "Player Issues", href: "#issues" },
    { label: "Terms", href: "#terms" },
    { label: "Shop", href: "#shop" }
  ];
  
  return (
    <nav className="bg-minecraft-stone/90 backdrop-blur-sm border-y-2 border-black sticky top-0 z-50">
      <div className="container mx-auto">
        <ul className="flex justify-center items-center space-x-1 md:space-x-4 py-2 overflow-x-auto">
          {navItems.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href}
                className="font-pixel text-xs md:text-sm block p-2 hover:text-minecraft-grass transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
