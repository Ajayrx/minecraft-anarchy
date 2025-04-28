
import React, { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll event for navbar appearance change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <nav className={`${scrolled ? 'bg-minecraft-stone/95' : 'bg-minecraft-stone/80'} backdrop-blur-sm border-y-2 border-black sticky top-0 z-50 transition-all duration-300 py-1`}>
      <div className="container mx-auto px-2 md:px-6">
        <ul className="flex justify-center items-center gap-1 sm:gap-2 md:gap-6 py-2 overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <li key={item.label} className="shrink-0">
              <a 
                href={item.href}
                className="font-pixel text-xs md:text-sm block px-2 py-1 md:py-2 hover:text-accent transition-all duration-200 transform hover:translate-y-[-2px]"
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
