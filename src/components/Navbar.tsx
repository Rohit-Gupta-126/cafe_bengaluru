'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import KolamLogo from '@/components/KolamLogo';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) => 
    isActive(path)
      ? "text-secondary font-label-md text-label-md uppercase tracking-widest hover-target font-bold border-b-2 border-tertiary-fixed-dim pb-1"
      : "text-on-surface hover:text-secondary transition-colors duration-300 font-label-md text-label-md uppercase tracking-widest hover-target";

  const mobileLinkClass = (path: string) => 
    isActive(path)
      ? "text-secondary font-label-md text-label-md uppercase tracking-widest w-full py-2 font-bold"
      : "text-on-surface hover:text-secondary transition-colors duration-300 font-label-md text-label-md uppercase tracking-widest w-full py-2";

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out bg-white/40 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)] hover-target">
      <div className="flex justify-between items-center px-lg py-sm max-w-container-max mx-auto">
        <Link href="/" className="shrink-0 hover-target">
          <motion.div whileHover="hover" className="flex items-center gap-3">
            <KolamLogo className="text-secondary" size={48} />
            <span className="font-playfair font-title-large text-secondary hidden sm:block">Cafe Bengaluru</span>
          </motion.div>
        </Link>
        
        <div className="hidden md:flex gap-lg items-center">
          <Link className={linkClass('/about')} href="/about">
            Our Story
          </Link>
          <Link className={linkClass('/menu')} href="/menu">
            Menu
          </Link>
          <Link className={linkClass('/vibe')} href="/vibe">
            Vibe
          </Link>
          <Link className={linkClass('/visit')} href="/visit">
            Visit Us
          </Link>
        </div>

        <a className="hidden md:inline-flex items-center justify-center px-8 py-3 rounded-full bg-linear-to-r from-secondary to-tertiary text-white hover:from-tertiary hover:to-secondary transition-all duration-500 font-label-md text-label-md uppercase tracking-widest shadow-md hover:shadow-lg hover-target" href="/#order">
          Order Online
        </a>

        <button 
          className="md:hidden text-primary p-2 hover-target focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-[28px]">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-[#faf9f6]/20 transition-all duration-300">
          <div className="flex flex-col gap-6 px-lg py-xl items-center text-center">
            <Link 
              className={mobileLinkClass('/about')} 
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Story
            </Link>
            <Link 
              className={mobileLinkClass('/menu')} 
              href="/menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              className={mobileLinkClass('/vibe')} 
              href="/vibe"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Vibe
            </Link>
            <Link 
              className={mobileLinkClass('/visit')} 
              href="/visit"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Visit Us
            </Link>
            <a 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-linear-to-r from-secondary to-tertiary text-white w-full font-label-md text-label-md uppercase tracking-widest shadow-md" 
              href="/#order"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Order Online
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
