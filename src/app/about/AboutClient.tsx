'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutClient() {
  const { scrollY } = useScroll();
  
  // Hero Parallax
  const heroScale = useTransform(scrollY, [0, 1000], [1.05, 1.25]);
  const heroY = useTransform(scrollY, [0, 1000], [0, 150]);

  // Floating Elements
  const leaf1Y = useTransform(scrollY, [0, 2000], [0, 300]);
  const leaf1Rotate = useTransform(scrollY, [0, 2000], [45, 145]);
  const leaf2Y = useTransform(scrollY, [0, 2000], [0, 600]);
  const leaf2Rotate = useTransform(scrollY, [0, 2000], [-15, 85]);

  return (
    <>
      <main className="flex-grow pt-[100px] overflow-hidden relative z-10">
        
        {/* SEQUENCE 1: Hero Section (0-100vh) */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-background">
          <div className="absolute inset-0 z-0">
            <motion.img 
              id="hero-bg"
              alt="Vintage Coffee House" 
              className="w-full h-full object-cover opacity-60 mix-blend-multiply will-change-transform"
              src="/images/story_heritage.png"
              style={{ scale: heroScale, y: heroY }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background"></div>
          </div>
          <div className="relative z-10 text-center px-lg max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-display-lg text-headline-lg md:text-display-lg text-secondary leading-tight mb-8"
            >
              It started in the heart of <br/>
              <span className="text-primary italic">Namma Bengaluru.</span>
            </motion.h1>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary/60 animate-bounce-slow">
              <span className="font-label-md text-label-md uppercase tracking-widest">Scroll to Journey</span>
              <span className="material-symbols-outlined text-[24px]">south</span>
            </div>
          </div>
        </section>

        {/* SEQUENCE 2: The Journey (100-200vh) */}
        <section className="relative min-h-screen py-32 px-4 md:px-lg flex flex-col justify-center bg-background border-y border-outline-variant/30 overflow-hidden">
          {/* Decorative Floating Leaves */}
          <motion.div 
            className="absolute top-20 right-[10%] opacity-20 pointer-events-none z-0" 
            style={{ y: leaf1Y, rotate: leaf1Rotate }}
          >
            <span className="material-symbols-outlined text-[120px] text-primary">eco</span>
          </motion.div>
          <motion.div 
            className="absolute bottom-20 left-[5%] opacity-10 pointer-events-none z-0" 
            style={{ y: leaf2Y, rotate: leaf2Rotate }}
          >
            <span className="material-symbols-outlined text-[180px] text-primary">filter_vintage</span>
          </motion.div>

          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            <div className="relative">
              {/* Path Image */}
              <img 
                alt="Heritage Journey Path" 
                className="rounded-3xl w-full h-[400px] md:h-[600px] object-cover grayscale brightness-95 contrast-110 mix-blend-multiply opacity-80 shadow-md"
                src="/images/story_journey_path.png"
              />
            </div>
            <div className="flex flex-col gap-16 lg:gap-24">
              <motion.div 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="ml-0 md:ml-12 border-l-2 border-primary pl-8 py-2"
              >
                <p className="font-headline-md text-headline-md text-secondary leading-relaxed">We packed the stone grinders.</p>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 italic font-light">The rhythmic sound of grinding became our heartbeat.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="ml-0 md:ml-24 border-l-2 border-tertiary pl-8 py-2"
              >
                <p className="font-headline-md text-headline-md text-secondary leading-relaxed">We sourced the artisanal ghee.</p>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 italic font-light">Golden, aromatic, and pure as morning light.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                className="ml-0 md:ml-6 border-l-2 border-primary pl-8 py-2"
              >
                <p className="font-headline-md text-headline-md text-secondary leading-relaxed">We brought the exact flavors of home...</p>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 italic font-light">Transplanted with love across three thousand miles.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SEQUENCE 3: Odisha Connection (200-300vh) */}
        <section className="relative min-h-screen py-32 flex flex-col items-center justify-center bg-surface-container-low px-4 md:px-lg overflow-hidden">
          <div className="relative w-full max-w-5xl group z-10">
            {/* Cafe Interior Wrapper */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-secondary-container/5">
              <img 
                alt="Modern Cafe Interior" 
                className="w-full aspect-video object-cover transition-transform duration-[2s] group-hover:scale-105 will-change-transform"
                src="/images/story_cafe_interior.png"
              />
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.15)] bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>
            </div>
            
            {/* Gold Badge Overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 32, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: 12 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="absolute -top-10 -right-4 md:-top-12 md:-right-12 w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-tertiary-container to-tertiary text-on-tertiary-container rounded-full flex flex-col items-center justify-center p-6 text-center shadow-xl border-4 border-surface-bright transform"
            >
              <span className="material-symbols-outlined text-3xl md:text-4xl mb-1 text-[#fdbb24]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="font-label-md text-label-md font-bold uppercase tracking-wider leading-tight">Est. In Odisha</span>
              <div className="mt-1.5 h-px w-12 bg-on-tertiary-container/30"></div>
              <span className="text-[10px] md:text-[11px] mt-1.5 font-medium opacity-80 italic">Since 2021</span>
            </motion.div>

            <div className="mt-16 text-center max-w-2xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="font-display-lg text-headline-lg text-secondary leading-tight"
              >
                ...And planted them in <br/>
                <span className="text-primary font-bold">Vanivihar Square.</span>
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="mt-8 flex justify-center items-center gap-4"
              >
                <div className="h-px w-16 bg-outline-variant/60"></div>
                <span className="material-symbols-outlined text-secondary text-[24px]">restaurant_menu</span>
                <div className="h-px w-16 bg-outline-variant/60"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SEQUENCE 4: CTA & Quote (300-400vh) */}
        <section className="relative h-[85vh] flex items-center justify-center bg-primary overflow-hidden px-4 md:px-lg text-white">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="grid grid-cols-3 md:grid-cols-6 h-full w-full items-center justify-center p-md">
              <span className="material-symbols-outlined text-[150px] text-white">spa</span>
              <span className="material-symbols-outlined text-[120px] text-white mt-24">potted_plant</span>
              <span className="material-symbols-outlined text-[180px] text-white">coffee_maker</span>
              <span className="material-symbols-outlined text-[130px] text-white">nest_multi_room</span>
              <span className="material-symbols-outlined text-[200px] text-white mt-16">humidity_low</span>
              <span className="material-symbols-outlined text-[150px] text-white">grass</span>
            </div>
          </div>
          <div className="relative z-10 max-w-4xl px-gutter text-center">
            <motion.blockquote 
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-display-lg text-headline-md md:text-headline-lg text-surface-bright leading-tight italic"
            >
              "A space designed for lingering conversations and the comforting aroma of roasted beans."
            </motion.blockquote>
            <motion.div 
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="mt-16 flex flex-col items-center gap-6"
            >
              <Link 
                href="/menu"
                className="inline-flex items-center justify-center px-10 py-5 bg-surface-bright text-primary text-label-md font-bold uppercase tracking-[0.2em] rounded-full hover:bg-tertiary-fixed hover:scale-105 transition-all duration-300 shadow-lg hover-target"
              >
                Explore Our Menu
              </Link>
              <div className="flex gap-4">
                <a className="w-12 h-12 rounded-full border border-surface-bright/20 flex items-center justify-center text-surface-bright hover:bg-surface-bright hover:text-primary transition-all duration-300 hover-target" href="#">
                  <span className="material-symbols-outlined text-xl">share</span>
                </a>
                <a className="w-12 h-12 rounded-full border border-surface-bright/20 flex items-center justify-center text-surface-bright hover:bg-surface-bright hover:text-primary transition-all duration-300 hover-target" href="/visit">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

    </>
  );
}
