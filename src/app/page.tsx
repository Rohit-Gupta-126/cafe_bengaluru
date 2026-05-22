'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const { scrollY } = useScroll();
  
  // Parallax layers
  const heroBgY = useTransform(scrollY, [0, 1000], [0, 200]);
  const floatFrontY = useTransform(scrollY, [0, 1000], [0, 600]);
  const heroTextY = useTransform(scrollY, [0, 1000], [0, 250]);

  return (
    <>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-xl overflow-hidden" id="hero">
        <motion.div style={{ y: heroBgY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-[#FAF9F6]/40 via-transparent to-[#FAF9F6] z-10"></div>
          <img
            alt="Filter Coffee Pour"
            className="w-full h-full object-cover opacity-80"
            src="/images/hero_coffee.png"
          />
        </motion.div>
        <motion.div style={{ y: floatFrontY }} className="absolute inset-0 z-20 pointer-events-none">
          {/* Floating Foreground Elements */}
          <div className="absolute top-[20%] left-[10%] w-16 h-16 bg-secondary/80 rounded-[40%_60%_70%_30%] floating-element" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-[60%] right-[15%] w-24 h-24 bg-primary/60 rounded-[60%_40%_30%_70%] floating-element" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-[10%] left-[25%] w-12 h-12 bg-tertiary-fixed-dim/70 rounded-full floating-element" style={{ animationDelay: '3s', filter: 'blur(4px)' }}></div>
        </motion.div>
        <motion.div 
          style={{ y: heroTextY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-30 text-center px-gutter max-w-5xl mx-auto"
        >
          <h1 className="font-display-lg text-display-lg text-primary mb-md tracking-tighter leading-[0.9] relative z-40 mix-blend-multiply drop-shadow-sm">
            Namma Bengaluru,<br/>
            <span className="italic text-secondary font-display-lg">Now in Bhubaneswar.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-xl mx-auto font-light">
            Experience the authentic, unapologetic flavors of South India in a modern, aesthetic setting.
          </p>
          <Link className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-linear-to-r from-primary to-primary-container text-white hover:scale-105 transition-all duration-500 shadow-[0_10px_30px_rgba(22,68,28,0.3)] font-label-md text-label-md uppercase tracking-widest hover-target" href="/menu">
            Explore the Menu
          </Link>
        </motion.div>
      </header>

      {/* Our Story Section */}
      <section className="py-24 relative kolam-faded overflow-hidden" id="story">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-xl items-center"
        >
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
            <div className="aspect-3/4 mask-arch overflow-hidden bg-surface shadow-xl relative z-10 hover-target">
              <img
                alt="Authentic Taste"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                src="/images/authentic_taste.png"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Signature Menu Section */}
      <section className="py-32 relative bg-[#FAF9F6] z-20" id="menu">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-container-max mx-auto px-gutter mb-16 text-right"
        >
          <h2 className="font-display-lg text-headline-lg text-primary relative z-10 pt-16">
            Signature <span className="italic text-secondary font-display-lg">Menu</span>
          </h2>
        </motion.div>
        <div className="w-full px-4 md:px-12">
          <div className="flex overflow-x-auto hide-scrollbar gap-8 pb-16 pt-8 px-4 menu-scroll-container items-center">
            
            {/* Card 1 */}
            <div className="shrink-0 w-[85vw] md:w-112.5 bg-white rounded-3xl overflow-hidden border border-outline-variant/10 menu-card hover-target relative mt-8">
              <div className="h-75 overflow-hidden relative group">
                <img
                  alt="Ghee Podi Masala Dosa"
                  className="w-full h-full object-cover transition-transform duration-700"
                  src="/images/podi_dosa.png"
                />
                <div className="absolute top-6 right-6 bg-linear-to-r from-[#F4B41A] to-tertiary-fixed-dim text-on-tertiary-fixed px-4 py-2 rounded-full font-label-md text-label-md shadow-lg backdrop-blur-sm bg-opacity-90">
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
            <div className="shrink-0 w-[85vw] md:w-112.5 bg-white rounded-3xl overflow-hidden border border-outline-variant/10 menu-card hover-target relative -mt-8">
              <div className="h-75 overflow-hidden group">
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
            <div className="shrink-0 w-[85vw] md:w-112.5 bg-white rounded-3xl overflow-hidden border border-outline-variant/10 menu-card hover-target relative mt-16">
              <div className="h-75 overflow-hidden group">
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
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-container-max mx-auto px-gutter mb-16 text-center"
        >
          <h2 className="font-display-lg text-headline-lg text-primary mb-6 mix-blend-multiply">
            The <span className="italic text-secondary font-display-lg">Vibe</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto font-light">
            A space designed for lingering conversations and the comforting aroma of roasted beans.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-container-max mx-auto px-gutter columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          
          <div className="break-inside-avoid rounded-4xl overflow-hidden shadow-sm hover-target">
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
          
          <div className="break-inside-avoid rounded-4xl overflow-hidden shadow-sm hover-target">
            <img
              alt="Barista Pouring"
              className="w-full h-auto hover:scale-105 transition-transform duration-700"
              src="/images/barista_pour.png"
            />
          </div>

        </motion.div>
      </section>

      {/* Visit Us Section */}
      <section className="py-24 bg-[#FAF9F6] relative z-20" id="visit">
        <div className="max-w-container-max mx-auto px-gutter py-xl">
          <div className="flex flex-col md:flex-row gap-xl">
            {/* Left Column: Info */}
            <div className="w-full md:w-[40%] flex flex-col justify-center gap-lg">
              <div>
                <h2 className="font-display-lg text-headline-lg text-secondary mb-sm leading-tight">Come Say Hello.</h2>
                <div className="h-px w-16 bg-secondary-container mb-md"></div>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 font-light">
                  Ground Floor, Vanivihar Square, Plot no. A-167, Saheed Nagar, Bhubaneswar, Odisha 751007.
                </p>
                <div className="flex items-start gap-3 mb-6">
                  <span 
                    className="material-symbols-outlined text-tertiary-fixed-dim mt-1" 
                    style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                  >
                    schedule
                  </span>
                  <div>
                    <p className="font-label-md text-label-md text-secondary uppercase tracking-wider mb-1 font-semibold">Open Daily</p>
                    <p className="font-body-md text-body-md text-on-surface font-light">11:00 AM - 11:00 PM</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-full hover:bg-primary-container transition-all shadow-[0_4px_20px_rgba(74,46,27,0.1)] w-max hover-target"
                  >
                    <span className="material-symbols-outlined">location_on</span>
                    Get Directions
                  </a>
                  <div className="flex items-center gap-6 mt-4">
                    <a className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary hover:text-tertiary-container transition-colors border-b border-transparent hover:border-tertiary-fixed-dim pb-1 hover-target" href="tel:+919876543210">
                      <span className="material-symbols-outlined text-[20px]">call</span>
                      +91 98765 43210
                    </a>
                    <a className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary hover:text-tertiary-container transition-colors border-b border-transparent hover:border-tertiary-fixed-dim pb-1 hover-target" href="https://instagram.com/cafebengaluru" target="_blank" rel="noopener noreferrer">
                      <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                      @cafebengaluru
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column: Visuals */}
            <div className="w-full md:w-[60%] relative min-h-125 flex items-center justify-center">
              {/* Map Container */}
              <div className="w-full h-112.5 md:h-full rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(74,46,27,0.08)] bg-surface-container border border-surface-variant relative z-10">
                <img alt="Map location" className="w-full h-full object-cover" src="/images/map_location.png" />
              </div>
              {/* Overlapping Polaroid */}
              <div className="absolute -bottom-8 -left-8 md:bottom-8 md:-left-12 z-20 bg-surface p-4 pb-12 rounded-lg shadow-[0_12px_40px_rgba(74,46,27,0.15)] transform -rotate-3 border border-surface-variant max-w-60 md:max-w-70">
                <div className="rounded-sm overflow-hidden aspect-square">
                  <img alt="Cafe exterior" className="w-full h-full object-cover" src="/images/cafe_exterior.png" />
                </div>
                <p className="font-headline-md text-[20px] text-center text-secondary mt-4 -mb-5 font-medium opacity-80">See you soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
