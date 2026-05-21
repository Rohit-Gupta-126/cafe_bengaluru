'use client';

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Custom Cursor logic
    const cursor = document.getElementById('custom-cursor');
    
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    // Toggle active cursor state on hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      
      const isHoverable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.classList.contains('hover-target') ||
        target.closest('.hover-target');

      if (isHoverable) {
        document.body.classList.add('hover-active');
      } else {
        document.body.classList.remove('hover-active');
      }
    };

    const handleMouseLeave = () => {
      document.body.classList.remove('hover-active');
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Intersection Observer for scroll animations (fade-up-stagger)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const staggerElements = document.querySelectorAll('.fade-up-stagger');
    staggerElements.forEach((el) => observer.observe(el));

    // Parallax scrolling effect using requestAnimationFrame
    let tick = false;
    const handleScroll = () => {
      if (!tick) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const layers = document.querySelectorAll('.parallax-layer');
          layers.forEach((layer) => {
            const speedAttr = layer.getAttribute('data-speed');
            if (speedAttr) {
              const speed = parseFloat(speedAttr);
              // Safe cast to HTMLElement to modify transform
              (layer as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
            }
          });
          tick = false;
        });
        tick = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      staggerElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Custom cursor element */}
      <div id="custom-cursor" className="hidden lg:block"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out bg-white/40 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)] hover-target">
        <div className="flex justify-between items-center px-lg py-sm max-w-container-max mx-auto">
          <a className="flex-shrink-0 hover-target" href="#">
            <img
              alt="Cafe Bengaluru"
              className="h-[60px] w-auto object-contain mix-blend-multiply"
              src="/images/logo.png"
            />
          </a>
          
          <div className="hidden md:flex gap-lg items-center">
            <a className="text-on-surface hover:text-secondary transition-colors duration-300 font-label-md text-label-md uppercase tracking-widest hover-target" href="#story">
              Our Story
            </a>
            <a className="text-on-surface hover:text-secondary transition-colors duration-300 font-label-md text-label-md uppercase tracking-widest hover-target" href="#menu">
              Menu
            </a>
            <a className="text-on-surface hover:text-secondary transition-colors duration-300 font-label-md text-label-md uppercase tracking-widest hover-target" href="#vibe">
              Vibe
            </a>
            <a className="text-on-surface hover:text-secondary transition-colors duration-300 font-label-md text-label-md uppercase tracking-widest hover-target" href="#visit">
              Visit Us
            </a>
          </div>

          <a className="hidden md:inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-secondary to-tertiary text-white hover:from-tertiary hover:to-secondary transition-all duration-500 font-label-md text-label-md uppercase tracking-widest shadow-md hover:shadow-lg hover-target" href="#order">
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
              <a 
                className="text-on-surface hover:text-secondary transition-colors duration-300 font-label-md text-label-md uppercase tracking-widest w-full py-2" 
                href="#story"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Story
              </a>
              <a 
                className="text-on-surface hover:text-secondary transition-colors duration-300 font-label-md text-label-md uppercase tracking-widest w-full py-2" 
                href="#menu"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Menu
              </a>
              <a 
                className="text-on-surface hover:text-secondary transition-colors duration-300 font-label-md text-label-md uppercase tracking-widest w-full py-2" 
                href="#vibe"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Vibe
              </a>
              <a 
                className="text-on-surface hover:text-secondary transition-colors duration-300 font-label-md text-label-md uppercase tracking-widest w-full py-2" 
                href="#visit"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Visit Us
              </a>
              <a 
                className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gradient-to-r from-secondary to-tertiary text-white w-full font-label-md text-label-md uppercase tracking-widest shadow-md" 
                href="#order"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Order Online
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[100vh] flex items-center justify-center pt-xl overflow-hidden" id="hero">
        <div className="absolute inset-0 z-0 parallax-layer" data-speed="0.2">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/40 via-transparent to-[#FAF9F6] z-10"></div>
          <img
            alt="Filter Coffee Pour"
            className="w-full h-full object-cover opacity-80"
            src="/images/hero_coffee.png"
          />
        </div>
        <div className="absolute inset-0 z-20 pointer-events-none parallax-layer" data-speed="1.2">
          {/* Floating Foreground Elements */}
          <div className="absolute top-[20%] left-[10%] w-16 h-16 bg-secondary/80 rounded-[40%_60%_70%_30%] floating-element" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-[60%] right-[15%] w-24 h-24 bg-primary/60 rounded-[60%_40%_30%_70%] floating-element" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-[10%] left-[25%] w-12 h-12 bg-tertiary-fixed-dim/70 rounded-full floating-element" style={{ animationDelay: '3s', filter: 'blur(4px)' }}></div>
        </div>
        <div className="relative z-30 text-center px-gutter max-w-5xl mx-auto fade-up-stagger parallax-layer" data-speed="0.5">
          <h1 className="font-display-lg text-display-lg text-primary mb-md tracking-tighter leading-[0.9] relative z-40 mix-blend-multiply drop-shadow-sm">
            Namma Bengaluru,<br/>
            <span className="italic text-secondary font-display-lg">Now in Bhubaneswar.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-xl mx-auto font-light">
            Experience the authentic, unapologetic flavors of South India in a modern, aesthetic setting.
          </p>
          <a className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-gradient-to-r from-primary to-primary-container text-white hover:scale-105 transition-all duration-500 shadow-[0_10px_30px_rgba(22,68,28,0.3)] font-label-md text-label-md uppercase tracking-widest hover-target" href="#menu">
            Explore the Menu
          </a>
        </div>
      </header>

      {/* Our Story Section */}
      <section className="py-24 relative kolam-faded overflow-hidden" id="story">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-xl items-center fade-up-stagger">
          <div className="lg:col-span-6 lg:col-start-1 space-y-lg relative z-10">
            <h2 className="font-display-lg text-headline-lg text-primary lg:text-[80px] leading-[0.9] -ml-4 mix-blend-multiply">
              The Authentic<br/>
              <span className="italic text-secondary ml-8 font-display-lg">Taste</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed font-light">
              Our heritage is deeply rooted in the bustling breakfast rooms of old Bengaluru. We bring you recipes passed down through generations, utilizing stone-ground batters, hand-pounded spices, and pure, golden ghee sourced directly from artisanal dairies.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed font-light">
              Every dish is a testament to sensory heritage—a deliberate balance of texture, temperature, and tradition designed to transport you with a single bite.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 grid grid-cols-1 gap-lg relative">
            <div className="absolute -inset-10 bg-tertiary-fixed/20 blur-3xl rounded-full z-0"></div>
            <div className="aspect-[3/4] mask-arch overflow-hidden bg-surface shadow-xl relative z-10 hover-target">
              <img
                alt="Authentic Taste"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                src="/images/authentic_taste.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signature Menu Section */}
      <section className="py-32 relative bg-[#FAF9F6] z-20" id="menu">
        <div className="max-w-container-max mx-auto px-gutter mb-16 fade-up-stagger text-right">
          <h2 className="font-display-lg text-headline-lg text-primary relative z-10 pt-16">
            Signature <span className="italic text-secondary font-display-lg">Menu</span>
          </h2>
        </div>
        <div className="w-full px-4 md:px-12">
          <div className="flex overflow-x-auto hide-scrollbar gap-8 pb-16 pt-8 px-4 menu-scroll-container items-center">
            
            {/* Card 1 */}
            <div className="shrink-0 w-[85vw] md:w-[450px] bg-white rounded-3xl overflow-hidden border border-outline-variant/10 menu-card hover-target relative mt-8">
              <div className="h-[300px] overflow-hidden relative group">
                <img
                  alt="Ghee Podi Masala Dosa"
                  className="w-full h-full object-cover transition-transform duration-700"
                  src="/images/podi_dosa.png"
                />
                <div className="absolute top-6 right-6 bg-gradient-to-r from-[#F4B41A] to-[#fdbb24] text-on-tertiary-fixed px-4 py-2 rounded-full font-label-md text-label-md shadow-lg backdrop-blur-sm bg-opacity-90">
                  Bestseller
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between bg-white relative">
                <div className="flex justify-between items-end mb-4">
                  <h3 className="font-headline-md text-headline-md text-primary leading-tight">
                    Ghee Podi<br/>Masala Dosa
                  </h3>
                  <span className="font-title-lg text-title-lg text-secondary mb-1">₹180</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant font-light">
                  Crispy, golden, loaded with spicy gun powder
                </p>
                <button className="micro-btn absolute bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-primary-container transition-colors">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="shrink-0 w-[85vw] md:w-[450px] bg-white rounded-3xl overflow-hidden border border-outline-variant/10 menu-card hover-target relative -mt-8">
              <div className="h-[300px] overflow-hidden group">
                <img
                  alt="Ghee Thatte Idli"
                  className="w-full h-full object-cover transition-transform duration-700"
                  src="/images/thatte_idli.png"
                />
              </div>
              <div className="p-8 flex flex-col justify-between bg-white relative">
                <div className="flex justify-between items-end mb-4">
                  <h3 className="font-headline-md text-headline-md text-primary leading-tight">
                    Ghee<br/>Thatte Idli
                  </h3>
                  <span className="font-title-lg text-title-lg text-secondary mb-1">₹120</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant font-light">
                  Thick, ultra-soft, drenched in ghee
                </p>
                <button className="micro-btn absolute bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-primary-container transition-colors">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="shrink-0 w-[85vw] md:w-[450px] bg-white rounded-3xl overflow-hidden border border-outline-variant/10 menu-card hover-target relative mt-16">
              <div className="h-[300px] overflow-hidden group">
                <img
                  alt="Mini Ghee Podi Idlis"
                  className="w-full h-full object-cover transition-transform duration-700"
                  src="/images/mini_idlis.png"
                />
              </div>
              <div className="p-8 flex flex-col justify-between bg-white relative">
                <div className="flex justify-between items-end mb-4">
                  <h3 className="font-headline-md text-headline-md text-primary leading-tight">
                    Mini Ghee<br/>Podi Idlis
                  </h3>
                  <span className="font-title-lg text-title-lg text-secondary mb-1">₹140</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant font-light">
                  Bite-sized perfection
                </p>
                <button className="micro-btn absolute bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-primary-container transition-colors">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Vibe Section */}
      <section className="py-24 bg-[#FAF9F6] kolam-faded" id="vibe">
        <div className="max-w-container-max mx-auto px-gutter mb-16 text-center fade-up-stagger">
          <h2 className="font-display-lg text-headline-lg text-primary mb-6 mix-blend-multiply">
            The <span className="italic text-secondary font-display-lg">Vibe</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto font-light">
            A space designed for lingering conversations and the comforting aroma of roasted beans.
          </p>
        </div>
        
        <div className="max-w-container-max mx-auto px-gutter columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 fade-up-stagger">
          
          <div className="break-inside-avoid rounded-[2rem] overflow-hidden shadow-sm hover-target">
            <img
              alt="Cafe Interior"
              className="w-full h-auto hover:scale-105 transition-transform duration-700"
              src="/images/cafe_interior.png"
            />
          </div>
          
          <div className="break-inside-avoid rounded-full overflow-hidden shadow-sm hover-target aspect-square">
            <img
              alt="Plated Dish"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src="/images/plated_dish.png"
            />
          </div>
          
          <div className="break-inside-avoid mask-droplet overflow-hidden shadow-sm hover-target">
            <img
              alt="Filter Coffee"
              className="w-full h-auto hover:scale-105 transition-transform duration-700"
              src="/images/filter_coffee_vibe.png"
            />
          </div>
          
          <div className="break-inside-avoid rounded-[3rem] overflow-hidden shadow-sm hover-target">
            <img
              alt="Architecture Detail"
              className="w-full h-auto hover:scale-105 transition-transform duration-700"
              src="/images/architecture_detail.png"
            />
          </div>
          
          <div className="break-inside-avoid rounded-[2rem] overflow-hidden shadow-sm hover-target">
            <img
              alt="Barista Pouring"
              className="w-full h-auto hover:scale-105 transition-transform duration-700"
              src="/images/barista_pour.png"
            />
          </div>

        </div>
      </section>

      {/* Footer Section */}
      <footer 
        id="visit"
        className="w-full py-24 bg-primary text-surface opacity-100 flex flex-col md:flex-row justify-between items-start px-lg max-w-none gap-lg mt-12 rounded-t-[4rem] relative z-20"
      >
        <div className="max-w-container-max mx-auto w-full flex flex-col md:flex-row justify-between items-start gap-16 px-gutter">
          <div className="space-y-6">
            <div className="font-display-lg text-[40px] text-tertiary-fixed-dim mb-2 mix-blend-screen">
              Cafe Bengaluru
            </div>
            <p className="font-body-md text-body-md text-primary-fixed-dim max-w-sm font-light leading-relaxed">
              Ground Floor, Vanivihar Square,<br/>
              Saheed Nagar, Bhubaneswar.
            </p>
            <p className="font-body-md text-body-md text-primary-fixed-dim font-light">
              11:00 AM - 11:00 PM
            </p>
            <div className="pt-4 flex gap-6">
              <a className="text-primary-fixed-dim hover:text-tertiary-fixed transition-colors hover-target" href="#">
                <span className="material-symbols-outlined text-[24px]">photo_camera</span>
              </a>
              <a className="text-primary-fixed-dim hover:text-tertiary-fixed transition-colors hover-target" href="#">
                <span className="material-symbols-outlined text-[24px]">directions</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-16 mt-8 md:mt-0">
            <div className="flex flex-col gap-4">
              <a className="font-body-md text-body-md text-primary-fixed-dim hover:text-tertiary-fixed transition-colors hover-target font-light" href="#">
                Privacy Policy
              </a>
              <a className="font-body-md text-body-md text-primary-fixed-dim hover:text-tertiary-fixed transition-colors hover-target font-light" href="#">
                Terms of Service
              </a>
              <a className="font-body-md text-body-md text-primary-fixed-dim hover:text-tertiary-fixed transition-colors hover-target font-light" href="#">
                Contact Us
              </a>
            </div>
          </div>
          <div className="w-full md:w-auto mt-8 md:mt-0 pt-8 md:pt-0 border-t border-primary-fixed-dim/20 md:border-none">
            <p className="font-body-md text-body-md text-primary-fixed-dim font-light">
              © 2024 Cafe Bengaluru. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
