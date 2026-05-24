import React from 'react';
import Link from 'next/link';
import KolamLogo from '@/components/KolamLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#111A13] text-[#FAF9F6] border-t border-white/5 overflow-hidden z-20">
      {/* Decorative background Kolam pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay bg-mandala-pattern"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-tertiary-fixed-dim/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-[1600px] mx-auto px-gutter md:px-lg lg:px-xl pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-12 2xl:gap-x-16 gap-y-12 gap-x-8 lg:gap-x-0 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:pr-8 flex flex-col gap-6 w-full">
            <Link href="/" className="flex items-center gap-3.5 w-max group hover-target">
              <KolamLogo size={56} className="text-[#fdbb24]/90 transition-transform duration-500 group-hover:rotate-45 group-hover:text-[#fdbb24]" />
              <span className="font-kurale font-semibold text-title-lg tracking-wider text-[#FAF9F6]/90 group-hover:text-[#fdbb24] transition-colors">
                Cafe Bengaluru
              </span>
            </Link>
            <p className="text-sm text-[#FAF9F6]/60 leading-relaxed font-light max-w-[250px] w-full">
              Honoring the slow, rhythmic ritual of South Indian filter coffee and traditional kitchen heritage.
            </p>
            {/* Social Icons */}
            <div className="flex gap-5 mt-2">
              <a 
                href="https://www.instagram.com/cafebengaluru_bbsr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#FAF9F6]/40 hover:text-[#fdbb24] hover:scale-110 transition-all duration-300 hover-target"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#FAF9F6]/40 hover:text-[#fdbb24] hover:scale-110 transition-all duration-300 hover-target"
                aria-label="Facebook"
              >
                <span className="material-symbols-outlined text-[20px]">thumb_up</span>
              </a>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#FAF9F6]/40 hover:text-[#fdbb24] hover:scale-110 transition-all duration-300 hover-target"
                aria-label="Google Maps"
              >
                <span className="material-symbols-outlined text-[20px]">location_on</span>
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="lg:border-l lg:border-white/10 lg:px-8 flex flex-col gap-5 w-full">
            <h4 className="text-xs uppercase tracking-[0.15em] text-[#FAF9F6]/40 font-medium lg:pt-3.5">
              Explore
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-[#FAF9F6]/60 font-light">
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-300 hover-target">Our Story</Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-white transition-colors duration-300 hover-target">Menu</Link>
              </li>
              <li>
                <Link href="/vibe" className="hover:text-white transition-colors duration-300 hover-target">The Vibe</Link>
              </li>
              <li>
                <Link href="/visit" className="hover:text-white transition-colors duration-300 hover-target">Visit Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-300 hover-target">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: The Ritual (Hours & Get in Touch) */}
          <div className="lg:border-l lg:border-white/10 lg:px-8 flex flex-col gap-5 w-full">
            <h4 className="text-xs uppercase tracking-[0.15em] text-[#FAF9F6]/40 font-medium lg:pt-3.5">
              The Ritual
            </h4>
            <div className="flex flex-col gap-5 text-sm text-[#FAF9F6]/60 font-light leading-relaxed">
              <div>
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#FAF9F6]/40 font-medium mb-1.5">Hours</p>
                <p className="text-[#FAF9F6]/75">Daily: 8:30 AM - 11:00 PM</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#FAF9F6]/40 font-medium mb-1.5">Get in Touch</p>
                <p className="hover:text-[#fdbb24] transition-colors duration-300 hover-target cursor-pointer text-[#FAF9F6]/75">
                  +91 98765 43210
                </p>
                <p className="hover:text-[#fdbb24] transition-colors duration-300 hover-target cursor-pointer mt-1.5 text-[#FAF9F6]/75">
                  hello@cafebengaluru.com
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Location */}
          <div className="lg:border-l lg:border-white/10 lg:pl-8 flex flex-col gap-5 w-full">
            <h4 className="text-xs uppercase tracking-[0.15em] text-[#FAF9F6]/40 font-medium lg:pt-3.5">
              Location
            </h4>
            <div className="flex flex-col gap-5 text-sm text-[#FAF9F6]/60 font-light leading-relaxed">
              <div>
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#FAF9F6]/40 font-medium mb-1.5">Address</p>
                <p className="leading-relaxed text-[#FAF9F6]/75">
                  Ground Floor, Vanivihar Square,<br />
                  Plot no. A-167, Saheed Nagar,<br />
                  Bhubaneswar, Odisha 751007.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 text-[#FAF9F6]/40 text-xs font-light">
          <p className="text-center sm:text-left">&copy; {currentYear} Cafe Bengaluru. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/" className="hover:text-white transition-colors duration-300 hover-target">Privacy Policy</a>
            <a href="/" className="hover:text-white transition-colors duration-300 hover-target">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}