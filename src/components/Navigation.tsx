
import React from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavItem {
  label: string;
  href: string;
}

const Navigation = () => {
  const isMobile = useIsMobile();
  const navItems: NavItem[] = [
    { label: "News", href: "#news" },
    { label: "Issues", href: "#issues" },
    { label: "About", href: "#about" },
    { label: "Shop", href: "#shop" },
    { label: "Gallery", href: "#gallery" },
    { label: "Terms", href: "#terms" }
  ];
  
  return (
    <nav className="bg-minecraft-stone/90 backdrop-blur-sm border-y-2 border-black sticky top-0 z-50">
      <div className="container mx-auto">
        <ul className="flex justify-center items-center space-x-1 md:space-x-4 py-2 overflow-x-auto whitespace-nowrap">
          {navItems.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href}
                className="font-pixel text-xs md:text-sm block px-2 py-2 hover:text-minecraft-grass transition-colors"
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
