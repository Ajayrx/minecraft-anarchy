
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
    <nav className={`${scrolled ? 'bg-white/95' : 'bg-white/80'} backdrop-blur-md border-y border-gray-200/50 sticky top-0 z-50 transition-all duration-300 py-2`}>
      <div className="container mx-auto px-2 md:px-6">
        <ul className="flex justify-center items-center gap-2 sm:gap-4 md:gap-8 py-3 overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <li key={item.label} className="shrink-0">
              <a 
                href={item.href}
                className="font-medium text-sm md:text-base block px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200 transform hover:translate-y-[-1px] rounded-lg hover:bg-blue-50"
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
