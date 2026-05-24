'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KolamLogo from '@/components/KolamLogo';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const showDarkNavbar = isHomePage && !isScrolled;

  // Handle scroll detection
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

  // Reset scroll and menu state on route changes
  useEffect(() => {
    setIsScrolled(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Our Story', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Vibe', path: '/vibe' },
    { name: 'Visit Us', path: '/visit' }
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out hover-target ${
        showDarkNavbar 
          ? 'bg-transparent py-6 border-b border-transparent'
          : 'bg-surface/98 backdrop-blur-md border-b border-secondary/10 py-3 shadow-[0_4px_20px_rgba(74,46,27,0.08)]'
      }`}
    >
      <div className="flex justify-between items-center w-full max-w-400 mx-auto px-gutter md:px-lg lg:px-xl">
        {/* Brand / Logo */}
        <Link href="/" className="shrink-0 hover-target">
          <motion.div whileHover="hover" className="flex items-center gap-3">
            <KolamLogo 
              className={`transition-colors duration-500 ${showDarkNavbar ? 'text-white' : 'text-secondary'}`} 
              size={showDarkNavbar ? 56 : 48} 
              style={{ transition: 'width 0.5s, height 0.5s, color 0.5s' }} 
            />
            <span className={`font-kurale font-semibold text-title-lg hidden sm:block tracking-wide transition-colors duration-500 ${
              showDarkNavbar ? 'text-white' : 'text-secondary'
            }`}>
              Cafe Bengaluru
            </span>
          </motion.div>
        </Link>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const active = pathname === link.path;
            return (
              <Link 
                key={link.path}
                className={`relative font-label-md text-label-md uppercase tracking-widest hover-target py-2 px-1 transition-colors duration-500 ${
                  active 
                    ? showDarkNavbar ? 'text-white font-semibold' : 'text-primary font-semibold'
                    : showDarkNavbar ? 'text-white/80 hover:text-white' : 'text-secondary/80 hover:text-primary'
                }`}
                href={link.path}
              >
                {link.name}
                {active && (
                  <motion.div 
                    layoutId="navUnderline"
                    className={`absolute bottom-0 left-0 right-0 h-[2px] ${showDarkNavbar ? 'bg-white' : 'bg-primary'}`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link 
            className={`inline-flex items-center justify-center px-8 py-3 rounded-full transition-all duration-500 font-label-md text-label-md uppercase tracking-widest hover-target shadow-md ${
              showDarkNavbar 
                ? 'bg-white text-primary hover:bg-white/90 hover:scale-105'
                : 'bg-primary text-white hover:bg-primary-container hover:scale-105'
            }`} 
            href="/order"
          >
            Order Online
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          className={`md:hidden p-2 hover-target focus:outline-none flex items-center justify-center transition-colors duration-500 ${
            showDarkNavbar && !isMobileMenuOpen ? 'text-white' : 'text-secondary'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[28px] transition-transform duration-300">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-surface/98 backdrop-blur-2xl border-b border-outline-variant/10 overflow-hidden"
          >
            <div className="flex flex-col gap-6 px-lg py-xl items-center text-center">
              {navLinks.map((link, idx) => {
                const active = pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    className="w-full"
                  >
                    <Link 
                      className={`block font-label-md text-label-md uppercase tracking-widest w-full py-2 transition-colors ${
                        active ? 'text-primary font-bold' : 'text-secondary/80 hover:text-primary'
                      }`} 
                      href={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                className="w-full pt-4"
              >
                <Link 
                  className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-primary text-white w-full font-label-md text-label-md uppercase tracking-widest shadow-md" 
                  href="/order"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Order Online
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
