'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const TIMELINE_EVENTS = [
  {
    id: 'morning',
    time: '08:30 AM',
    label: 'The Awakening',
    title: 'Firing the Tawas & Roasting the Beans',
    desc: 'The day begins in silence as the heavy cast-iron tawas are heated. The aroma of dark-roasted Chikmagalur beans spreads through the space, and the first slow drops of thick decoction fill the brass filters.',
    image: '/images/vibe_coffee_beans.png',
    sensory: {
      aroma: 'Roasting coffee beans & warm ghee',
      sound: 'The quiet drip of brass filters',
      vibe: 'Misty, peaceful, and full of anticipation'
    }
  },
  {
    id: 'rush',
    time: '11:00 AM',
    label: 'The Breakfast Rush',
    title: 'The Sizzle of Ghee & Golden Dosas',
    desc: 'The kitchen is alive with activity. Clouds of steam rise from steaming idli pots, and ladlefuls of 14-hour fermented batter hit the tawas with a sharp hiss, crisped to a perfect golden podi crunch.',
    image: '/images/podi_dosa.png',
    sensory: {
      aroma: 'Toasted curry leaves, mustard seeds, and hot sambar',
      sound: 'The rhythmic scraping of spatulas on iron tawas',
      vibe: 'Vibrant, fast-paced, and energetic'
    }
  },
  {
    id: 'kaapi',
    time: '04:30 PM',
    label: 'The Kaapi Hour',
    title: 'The Art of the High-Altitude Pull',
    desc: 'As the sun dips, the city gathers. Baristas pull filter coffee back and forth from soaring heights between brass dabarahs and tumblers, cooling the coffee and creating a rich, frothed velvet foam.',
    image: '/images/barista_pour.png',
    sensory: {
      aroma: 'Sweet caramelized milk & frothed coffee foam',
      sound: 'The metallic clatter and ring of brass dabarahs',
      vibe: 'Social, relaxing, and filled with chatter'
    }
  },
  {
    id: 'supper',
    time: '09:00 PM',
    label: 'The Slow Supper',
    title: 'Shared Plates & Warm Amber Lights',
    desc: 'Under the warm amber glow of custom terracotta lights, long conversations linger. Plate-sized Thatte Idlis and warm Saffron Kesari Bath are shared slowly, bringing a comforting end to the day.',
    image: '/images/vibe_friends.png',
    sensory: {
      aroma: 'Cardamom kesari pudding & earthy spices',
      sound: 'Soft clinking of cutlery and gentle laughter',
      vibe: 'Warm, intimate, and wabi-sabi cozy'
    }
  }
];

export default function Home() {
  const { scrollY } = useScroll();
  const [activeTime, setActiveTime] = useState('morning');

  // Hero Scroll Effects
  const heroScale = useTransform(scrollY, [0, 800], [1, 1.05]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroTextY = useTransform(scrollY, [0, 800], [0, 200]);

  // Founder Note Scroll Effects
  const founderImgY = useTransform(scrollY, [0, 1500], [100, -100]);
  const founderRotate = useTransform(scrollY, [0, 1500], [-5, 5]);

  return (
    <main className="bg-background relative w-full overflow-hidden">
      
      {/* ═══════════════════════════════════════════
           HERO — Full-bleed editorial
      ═══════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative w-full overflow-hidden"
        style={{ height: '100svh', minHeight: 600 }}
      >
        {/* Background image with parallax scale */}
        <motion.div
          style={{ scale: heroScale }}
          className="absolute inset-0 origin-center"
        >
          <Image
            alt="Filter Coffee Pour"
            src="/images/hero_coffee.png"
            fill
            loading="eager"
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        {/* Gradient overlays */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(15,10,5,0.92) 0%, rgba(15,10,5,0.50) 40%, rgba(15,10,5,0.10) 100%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(15,10,5,0.55) 0%, transparent 60%)',
          }}
        />

        {/* Text block — pinned to bottom-left */}
        <motion.div
          style={{ y: heroTextY }}
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          aria-hidden="false"
        >
          <div
            className="pointer-events-auto"
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              padding: '0 32px 80px',
            }}
          >
            {/* Eye-brow tag */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#F4B41A',
                marginBottom: 20,
              }}
            >
              Bengaluru's Finest · Now in Bhubaneswar
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: 'clamp(52px, 9vw, 120px)',
                fontWeight: 700,
                lineHeight: 0.92,
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                margin: 0,
                marginBottom: 28,
                maxWidth: '14ch',
              }}
            >
              Namma<br />
              <em style={{ color: '#F4B41A', fontStyle: 'italic' }}>Bengaluru.</em>
            </motion.h1>

            {/* Sub-line & CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              style={{ display: 'flex', alignItems: 'flex-end', gap: 48, flexWrap: 'wrap' }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: 17,
                  fontWeight: 300,
                  lineHeight: 1.65,
                  color: 'rgba(255,255,255,0.80)',
                  maxWidth: 380,
                  margin: 0,
                }}
              >
                Authentic South Indian breakfasts crafted from stone-ground batters,
                hand-pounded spices, and pure artisanal ghee.
              </p>

              <div style={{ display: 'flex', gap: 16, flexShrink: 0, flexWrap: 'wrap' }}>
                <Link
                  href="/menu"
                  className="hover-target"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '16px 32px',
                    borderRadius: 9999,
                    background: 'linear-gradient(135deg, #2E5C31, #4A2E1B)',
                    color: '#fff',
                    fontFamily: 'var(--font-jakarta), sans-serif',
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    boxShadow: '0 8px 32px rgba(46,92,49,0.45)',
                    transition: 'transform 0.25s, box-shadow 0.25s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(46,92,49,0.6)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(46,92,49,0.45)';
                  }}
                >
                  Explore the Menu
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                </Link>

                
              </div>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              style={{
                marginTop: 48,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 1,
                  height: 48,
                  background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5))',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                }}
              >
                Scroll to explore
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating badge top-right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="absolute top-28 right-8 md:right-12 pointer-events-none"
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: '50%',
              border: '1px solid rgba(244,180,26,0.4)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              background: 'rgba(244,180,26,0.08)',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: 11,
                color: '#F4B41A',
                lineHeight: 1.3,
                padding: '0 8px',
              }}
            >
              Open<br />Daily<br />
              <strong>8:30–11</strong>
            </span>
          </div>
        </motion.div>
      </section>


      {/* 2. FOUNDER'S NOTE */}
      <section className="py-32 relative z-20 px-gutter max-w-container-max mx-auto border-t border-outline-variant/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <motion.div style={{ y: founderImgY, rotate: founderRotate }} className="relative z-10 mask-arch-alt overflow-hidden aspect-[3/4] shadow-2xl hover-target">
              <div className="absolute inset-0 bg-tertiary-fixed-dim/20 mix-blend-multiply pointer-events-none z-10"></div>
              <Image src="/images/story_heritage.png" alt="Founders of Cafe Bengaluru" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" sizes="(max-width: 768px) 100vw, 40vw" quality={85} />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary-container mask-blob -z-10 mix-blend-multiply opacity-50 blur-lg"></div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="font-display-lg text-headline-lg text-primary mb-8"
            >
              A Letter from <br/><span className="italic text-secondary">Home.</span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 font-body-lg text-body-lg text-on-surface-variant font-light relative"
            >
              <span className="absolute -top-12 -left-8 text-[120px] text-tertiary-fixed font-serif opacity-20 pointer-events-none leading-none">"</span>
              <p>
                When we moved away from Bengaluru, it wasn't just the city we left behind—it was the ritual. The morning aroma of freshly roasted filter coffee, the hiss of the dosa tawa, the comforting embrace of pure ghee. 
              </p>
              <p>
                We realized that authenticity isn't just about ingredients; it's about the feeling. It's sensory heritage. That's why we packed the stone grinders, sourced the exact single-estate beans from Chikmagalur, and brought our family recipes across three thousand miles.
              </p>
              <p className="font-headline-md text-headline-md text-secondary mt-8 pt-8 border-t border-outline-variant/30 italic">
                Welcome to our slice of home.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SENSORY EXPERIENCE (Bento Grid) */}
      <section className="py-32 bg-surface-container-lowest relative">
        <div className="absolute inset-0 kolam-faded opacity-30 pointer-events-none z-0"></div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-display-lg text-headline-lg text-primary">
              The Sensory <span className="italic text-secondary">Experience</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Bento Box 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 md:row-span-2 rounded-4xl overflow-hidden relative group hover-target"
            >
              <Image src="/images/authentic_taste.png" alt="Sensory Taste" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 66vw" quality={85} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-10">
                <h3 className="font-headline-md text-headline-md text-white mb-2">Stone-Ground Tradition</h3>
                <p className="font-body-md text-body-md text-white/80 max-w-[448px] font-light">Batters fermented perfectly over 14 hours, yielding dosas with an unmatched golden crunch and soft center.</p>
              </div>
            </motion.div>
            
            {/* Bento Box 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-1 md:row-span-1 rounded-4xl bg-secondary overflow-hidden relative group hover-target p-8 flex flex-col justify-center items-center text-center"
            >
              <span className="material-symbols-outlined text-[48px] text-tertiary-fixed mb-4">coffee_maker</span>
              <h3 className="font-title-lg text-title-lg text-white mb-2">Chikmagalur Beans</h3>
              <p className="font-body-md text-body-md text-white/80 font-light text-sm">Dark roasted, blended with 20% chicory for that intense, heavy-bodied decoction.</p>
            </motion.div>

            {/* Bento Box 3 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-1 md:row-span-1 rounded-4xl overflow-hidden relative group hover-target mask-leaf"
            >
              <Image src="/images/architecture_detail.png" alt="Architecture" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" quality={85} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE MENU CAROUSEL */}
      <section className="py-32 relative bg-surface" id="menu">
        <div className="max-w-container-max mx-auto px-gutter mb-12 flex justify-between items-end">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display-lg text-headline-lg text-primary"
          >
            Signature <span className="italic text-secondary">Classics</span>
          </motion.h2>
          <Link href="/menu" className="font-label-md text-label-md uppercase tracking-widest text-secondary hover:text-primary transition-colors border-b border-secondary pb-1 hover-target hidden md:block">
            View Full Menu
          </Link>
        </div>
        
        <div className="w-full overflow-hidden">
          <motion.div 
            className="flex gap-8 px-gutter pb-16 overflow-x-auto hide-scrollbar snap-x snap-mandatory md:justify-center items-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {[
              { img: '/images/podi_dosa.png', title: 'Ghee Podi Masala Dosa', price: '₹180', desc: 'Crispy, golden, loaded with spicy gun powder.' },
              { img: '/images/thatte_idli.png', title: 'Ghee Thatte Idli', price: '₹120', desc: 'Thick, ultra-soft, drenched in ghee.' },
              { img: '/images/mini_idlis.png', title: 'Mini Ghee Podi Idlis', price: '₹140', desc: 'Bite-sized perfection tossed in milagai podi.' },
            ].map((item, i) => (
              <div key={i} className="shrink-0 w-[85vw] md:w-[400px] snap-center group hover-target">
                <div className="h-[450px] rounded-t-[3rem] rounded-b-md overflow-hidden relative mb-6 mask-arch">
                  <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 85vw, 400px" quality={85} />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="flex justify-between items-start mb-2 px-2">
                  <h3 className="font-headline-md text-title-lg text-primary">{item.title}</h3>
                  <span className="font-title-lg text-title-lg text-secondary">{item.price}</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant font-light px-2">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. A DAY AT NAMMA CAFE (Interactive Cinematic Timeline) */}
      <section className="py-32 bg-[#FAF9F6] relative overflow-hidden" id="timeline">
        <div className="absolute inset-0 bg-[#F5F0E8] opacity-60 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(#2e5c31_1px,transparent_1px)] [background-size:24px_24px] opacity-10 z-0 pointer-events-none" />

        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="font-label-md text-label-md uppercase tracking-widest text-[#795741] mb-4 block font-semibold">
              The Sensory Timeline
            </span>
            <h2 className="font-display-lg text-headline-lg text-[#0F0A05] mb-6">
              A Day at <span className="italic text-[#2E5C31]">Namma Cafe</span>
            </h2>
            <p className="font-body-lg text-body-lg text-[#4E3629]/80 font-light leading-relaxed">
              From the quiet early morning roast to the warm amber glow of late-night tiffins, step into the daily rhythms of our kitchen.
            </p>
          </div>

          {/* Timeline Buttons */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-20 relative z-10">
            {TIMELINE_EVENTS.map((event) => {
              const isActive = activeTime === event.id;
              return (
                <button
                  key={event.id}
                  onClick={() => setActiveTime(event.id)}
                  className="relative px-6 py-4 rounded-full font-label-md text-xs uppercase tracking-widest transition-all duration-300 focus:outline-none hover-target cursor-pointer border border-[#4E3629]/15 flex flex-col items-center justify-center min-w-[140px] gap-1"
                  style={{
                    color: isActive ? '#faf9f6' : '#4E3629',
                    background: isActive ? 'transparent' : 'rgba(250,249,246,0.8)',
                    boxShadow: isActive ? '0 8px 24px rgba(46,92,49,0.12)' : 'none',
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeTimeBg"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, #2E5C31, #4A2E1B)',
                        zIndex: -1,
                      }}
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="font-bold text-sm tracking-normal">{event.time}</span>
                  <span className="text-[9px] opacity-75 font-semibold">{event.label}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Cinematic Display */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {TIMELINE_EVENTS.map((event) => {
                if (event.id !== activeTime) return null;
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
                  >
                    {/* Left Column: Big Image Display */}
                    <div className="lg:col-span-6 relative flex justify-center">
                      <div className="absolute w-[85%] aspect-square rounded-[3rem] border border-[#2E5C31]/8 pointer-events-none top-[-10px] left-[5%]" />
                      
                      <motion.div 
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        className="w-[90%] aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border border-[#2E5C31]/10 bg-[#FAF9F6]"
                      >
                        <Image 
                          src={event.image} 
                          alt={event.title} 
                          fill
                          className="object-cover transition-transform duration-[1500ms] hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          quality={85}
                        />
                      </motion.div>
                    </div>

                    {/* Right Column: Story & Sensory Highlights */}
                    <div className="lg:col-span-6 flex flex-col justify-center">
                      <span className="font-label-md text-xs uppercase tracking-widest text-[#795741] mb-3 font-semibold block">
                        {event.time} · {event.label}
                      </span>
                      <h3 className="font-display-md text-[#0F0A05] text-2xl md:text-3xl font-bold mb-6">
                        {event.title}
                      </h3>
                      <p className="font-body-lg text-[#4E3629]/90 font-light leading-relaxed mb-8 text-base">
                        {event.desc}
                      </p>

                      {/* Sensory Details Card */}
                      <div className="bg-[#FAF9F6]/90 p-8 rounded-[2rem] border border-[#2E5C31]/5 shadow-sm space-y-4">
                        <h4 className="font-label-md text-[10px] uppercase tracking-widest text-[#795741] font-bold block border-b border-[#2E5C31]/10 pb-2">
                          Sensory Details
                        </h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5 text-[#2E5C31]">
                              <span className="material-symbols-outlined text-base" style={{ fontSize: 16 }}>leak_add</span>
                              <span className="font-label-md text-[10px] uppercase tracking-wider font-semibold">Aroma</span>
                            </div>
                            <p className="text-xs text-[#4E3629]/80 font-light">{event.sensory.aroma}</p>
                          </div>

                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5 text-[#2E5C31]">
                              <span className="material-symbols-outlined text-base" style={{ fontSize: 16 }}>volume_up</span>
                              <span className="font-label-md text-[10px] uppercase tracking-wider font-semibold">Sound</span>
                            </div>
                            <p className="text-xs text-[#4E3629]/80 font-light">{event.sensory.sound}</p>
                          </div>

                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5 text-[#2E5C31]">
                              <span className="material-symbols-outlined text-base" style={{ fontSize: 16 }}>wb_twilight</span>
                              <span className="font-label-md text-[10px] uppercase tracking-wider font-semibold">Vibe</span>
                            </div>
                            <p className="text-xs text-[#4E3629]/80 font-light">{event.sensory.vibe}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute -left-20 top-0 w-64 h-64 bg-primary-container mask-leaf opacity-20 pointer-events-none"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-tertiary-fixed-dim/10 mask-blob opacity-40 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-gutter text-center relative z-10">
          <span className="material-symbols-outlined text-[64px] text-tertiary-fixed-dim mb-8">format_quote</span>
          
          <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory">
            {[
              { quote: "The crispness of the dosa and the richness of that specific ghee transported me straight back to Vidyarthi Bhavan. Absolute magic.", author: "Arjun K." },
              { quote: "Finally, a place in Bhubaneswar that understands authentic filter coffee. The chicory blend is perfectly balanced.", author: "Sneha P." },
              { quote: "It's not just the food, it's the aesthetic. The wabi-sabi interiors paired with traditional breakfast is a sensory delight.", author: "Rohan M." },
            ].map((test, i) => (
              <div key={i} className="w-full shrink-0 snap-center px-4">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="font-headline-md text-headline-md md:text-display-lg text-surface-bright leading-tight mb-8"
                >
                  "{test.quote}"
                </motion.h3>
                <p className="font-label-md text-label-md text-tertiary-fixed uppercase tracking-widest">{test.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VISIT US */}
      <section className="py-32 bg-background relative z-20" id="visit">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            
            <div className="flex flex-col justify-center">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display-lg text-headline-lg text-secondary mb-10 leading-tight"
              >
                Drop by for a <br/><span className="text-primary italic">Cupping.</span>
              </motion.h2>
              <div className="space-y-8">
                <div>
                  <h4 className="font-label-md text-label-md text-outline uppercase tracking-widest mb-2">Location</h4>
                  <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed">
                    Ground Floor, Vanivihar Square,<br/>
                    Plot no. A-167, Saheed Nagar,<br/>
                    Bhubaneswar, Odisha 751007.
                  </p>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-outline uppercase tracking-widest mb-2">Hours</h4>
                  <p className="font-body-lg text-body-lg text-on-surface-variant font-light">8:30 AM - 11:00 PM, Daily</p>
                </div>
                <div className="pt-6">
                  <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 font-label-md text-label-md uppercase tracking-widest hover-target">
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 hover-target">
                <Image alt="Map location" fill className="object-cover transition-transform duration-1000 hover:scale-105" src="/images/map_location.png" sizes="(max-width: 768px) 100vw, 50vw" quality={85} />
              </div>
              <div className="absolute -bottom-12 -left-12 z-20 bg-surface p-4 pb-12 rounded-[1rem] shadow-xl transform -rotate-6 border border-surface-variant w-48 md:w-64 pointer-events-none">
                <div className="rounded-sm overflow-hidden aspect-square relative">
                  <Image alt="Cafe exterior" fill className="object-cover grayscale" src="/images/cafe_exterior.png" sizes="256px" quality={75} />
                </div>
                <p className="font-display-lg text-title-lg text-center text-primary mt-4 -mb-4 opacity-80 mix-blend-multiply">See you soon</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
