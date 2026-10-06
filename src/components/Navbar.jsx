import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Store', href: '#' },
    { label: 'Mac', href: '#' },
    { label: 'iPad', href: '#' },
    { label: 'iPhone', href: '#' },
    { label: 'Watch', href: '#' },
    { label: 'Vision', href: '#' },
    { label: 'AirPods', href: '#' },
    { label: 'TV & Home', href: '#' },
    { label: 'Entertainment', href: '#' },
    { label: 'Accessories', href: '#' },
    { label: 'Support', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Apple Global Nav */}
      <nav className="bg-[#f5f5f7]/85 backdrop-blur-md border-b border-[#d2d2d7]/50 text-[#1d1d1f] text-xs transition-colors duration-200">
        <div className="max-w-[1024px] mx-auto px-4 h-11 flex items-center justify-between font-normal tracking-tight">
          {/* Apple Logo */}
          <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 170 170">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.79-11.72-14.25-5.94-9.36-10.4-19.68-13.38-30.98-2.98-11.3-4.47-22.18-4.47-32.63 0-14.36 3.56-26.4 10.68-36.14 7.12-9.74 16.34-14.73 27.67-14.97 4.13 0 9.07 1.15 14.83 3.44 5.76 2.3 9.4 3.5 10.92 3.6 1.8.1 5.69-1.2 11.66-3.89 5.97-2.69 11.23-3.87 15.78-3.56 12.38.74 22.37 5.37 29.98 13.9-10.82 6.55-16.12 15.54-15.9 26.96.22 8.94 3.63 16.51 10.23 22.71 6.6 6.2 14.61 9.68 24.03 10.43-2.3 6.94-5.1 14.1-8.4 21.48zM119.22 31.84c0-7.39 2.66-14.34 7.98-20.85 5.32-6.51 11.96-10.5 19.92-11.99.22 1.34.33 2.5.33 3.48 0 7.39-2.77 14.47-8.31 21.23-5.54 6.76-12.36 10.6-20.46 11.53-.22-1.12-.34-2.26-.34-3.4z" />
            </svg>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-7 lg:space-x-8 text-[#1d1d1f]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-5 text-[#1d1d1f]/80">
            <button aria-label="Search" className="hover:text-black transition-colors">
              <Search className="w-3.5 h-3.5" />
            </button>
            <button aria-label="Bag" className="hover:text-black transition-colors">
              <ShoppingBag className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden hover:text-black transition-colors"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 py-4 bg-white/95 border-b border-gray-200 flex flex-col space-y-3 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-[#1d1d1f] hover:text-purple-600 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Local Apple Podcasts Subnav */}
      <div className={`transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-[#d2d2d7]/60 shadow-sm' 
          : 'bg-white/70 backdrop-blur-md border-[#d2d2d7]/40'
      }`}>
        <div className="max-w-[1024px] mx-auto px-4 h-12 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-[20px] font-semibold text-[#1d1d1f] tracking-tight">
              Apple Podcasts
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="#listen" 
              className="text-xs text-[#1d1d1f]/70 hover:text-black transition-colors hidden sm:inline-block"
            >
              Overview
            </a>
            <a
              href="https://podcasts.apple.com"
              target="_blank"
              rel="noreferrer"
              className="bg-[#9333ea] hover:bg-[#7e22ce] text-white text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 shadow-sm hover:shadow"
            >
              Try it free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
