
import React from 'react';

interface NavItem {
  label: string;
  href: string;
}

const Navigation = () => {
  const navItems: NavItem[] = [
    { label: "News", href: "#news" },
    { label: "Issues", href: "#issues" },
    { label: "About", href: "#about" },
    { label: "Shop", href: "#shop" },
    { label: "Gallery", href: "#gallery" },
    { label: "Terms", href: "#terms" },
    { label: "Discord", href: "#discord" }
  ];
  
  return (
    <nav className="bg-minecraft-stone/90 backdrop-blur-sm border-y-2 border-black sticky top-0 z-50 transition-all duration-300 hover:bg-minecraft-stone/95">
      <div className="container mx-auto px-2 md:px-4">
        <ul className="flex justify-center items-center gap-1 md:gap-4 py-2 overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <li key={item.label} className="shrink-0">
              <a 
                href={item.href}
                className="font-pixel text-xs md:text-sm block px-2 py-2 hover:text-minecraft-grass transition-all duration-300 transform hover:scale-105"
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
