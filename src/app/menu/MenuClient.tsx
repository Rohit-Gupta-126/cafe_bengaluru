'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import LoadMoreButton from '../../components/LoadMoreButton';
import { MenuItem, MENU, CATEGORIES, PAIRINGS } from '@/data/menu';

// ─── Component ───────────────────────────────────────────────────────────────

export default function MenuPage() {
  const [active, setActive] = useState<'all' | 'dosas' | 'idlis' | 'kaapi'>('all');
  const [activeCraving, setActiveCraving] = useState('spicy');
  const { scrollY } = useScroll();

  // Batch size for incremental reveal
  const BATCH_SIZE = 5;
  const [visibleCount, setVisibleCount] = useState<number>(BATCH_SIZE);

  // Hero parallax
  const heroScale   = useTransform(scrollY, [0, 900], [1, 1.05]);
  const heroTextY   = useTransform(scrollY, [0, 900], [0, 180]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  const filtered = active === 'all' ? MENU : MENU.filter(i => i.category === active);
  const displayedItems = filtered.slice(0, visibleCount);
  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, filtered.length));
  };

  return (
    <main style={{ background: '#faf9f6', position: 'relative', width: '100%', overflowX: 'hidden' }}>

      {/* ══════════════════════════════════════════════
           HERO — Full-bleed editorial
      ══════════════════════════════════════════════ */}
      <section
        id="menu-hero"
        style={{ position: 'relative', width: '100%', overflow: 'hidden', height: '100svh', minHeight: 640 }}
      >
        {/* Background with parallax */}
        <motion.div style={{ scale: heroScale, position: 'absolute', inset: 0, transformOrigin: 'center' }}>
          <Image
            alt="Dosa being prepared on a tawa"
            src="/images/editorial_dosa.png"
            fill
            loading="eager"
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        {/* Directional gradients */}
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'linear-gradient(to top, rgba(15,10,5,0.96) 0%, rgba(15,10,5,0.55) 42%, rgba(15,10,5,0.08) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'linear-gradient(to right, rgba(15,10,5,0.65) 0%, transparent 65%)',
          }}
        />

        {/* Text — pinned bottom-left */}
        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity, position: 'absolute', insetInline: 0, bottom: 0 }}
        >
          <div className="w-full max-w-400 mx-auto px-gutter md:px-lg lg:px-xl pb-32">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: 12, fontWeight: 600,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#F4B41A', marginBottom: 24,
              }}
            >
              The Full Menu · Bengaluru's Finest
            </motion.p>

            {/* Headline — 2 lines, no wrapping to 3 */}
            <motion.h1
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: 'clamp(52px, 9vw, 120px)',
                fontWeight: 700, lineHeight: 0.92,
                letterSpacing: '-0.03em', color: '#FFFFFF',
                margin: '0 0 32px', maxWidth: '14ch',
              }}
            >
              Namma<br />
              <em style={{ color: '#F4B41A', fontStyle: 'italic' }}>Menu.</em>
            </motion.h1>

            {/* Sub-line + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              style={{ display: 'flex', alignItems: 'flex-end', gap: 48, flexWrap: 'wrap' }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: 17, fontWeight: 300, lineHeight: 1.65,
                  color: 'rgba(255,255,255,0.80)', maxWidth: 380, margin: 0,
                }}
              >
                Authentic South Indian breakfasts crafted from stone-ground batters,
                hand-pounded spices, and pure artisanal ghee.
              </p>
              <a
                href="#menu-grid"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '16px 32px', borderRadius: 9999,
                  background: 'linear-gradient(135deg, #2E5C31, #4A2E1B)',
                  color: '#fff',
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: 13, fontWeight: 600,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  textDecoration: 'none',
                  boxShadow: '0 8px 32px rgba(46,92,49,0.45)',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                  flexShrink: 0,
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
                Browse the Menu
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_downward</span>
              </a>
            </motion.div>

            {/* Scroll indicator — thin vertical line + label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              style={{ marginTop: 56, display: 'flex', alignItems: 'center', gap: 12 }}
            >
              <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.4))' }} />
              <span
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: 10, fontWeight: 500,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                }}
              >
                Scroll to explore
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Item count badge — top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          style={{ position: 'absolute', top: 112, right: 32, pointerEvents: 'none' }}
        >
          <div
            style={{
              width: 96, height: 96, borderRadius: '50%',
              border: '1px solid rgba(244,180,26,0.4)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              background: 'rgba(244,180,26,0.08)',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: 11, color: '#F4B41A', lineHeight: 1.3, padding: '0 8px',
              }}
            >
              Open<br />Daily<br /><strong>8:30–11</strong>
            </span>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
           NAMMA TASTE MATCHMAKER (Interactive Flavor Craving Tool)
      ══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] relative overflow-hidden" id="matchmaker">
        <div className="absolute inset-0 bg-[#F5F0E8] opacity-60 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(#2e5c31_1px,transparent_1px)] [background-size:24px_24px] opacity-10 z-0 pointer-events-none" />

        <div className="w-full max-w-400 mx-auto px-gutter md:px-lg lg:px-xl relative z-10">
          <div className="max-w-2xl mx-auto mb-8 text-center">
            <span className="font-label-md text-label-md uppercase tracking-widest text-[#795741] mb-2 block font-semibold">
              Namma Pairing Guide
            </span>
            <h2 className="font-display-lg text-headline-lg text-[#0F0A05] mb-4">
              The Taste <span className="italic text-[#2E5C31]">Matchmaker</span>
            </h2>
            <p className="font-body-lg text-body-lg text-[#4E3629]/80 font-light leading-relaxed">
              What craving brings you to our table today? Select below to find your perfect curated tiffin and filter coffee pairing.
            </p>
          </div>

          {/* Interactive Craving Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 relative z-10">
            {PAIRINGS.map((p) => {
              const isActive = activeCraving === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveCraving(p.id)}
                  className="relative px-6 py-3.5 rounded-full font-label-md text-xs uppercase tracking-widest transition-all duration-300 focus:outline-none hover-target cursor-pointer border border-[#4E3629]/15 flex items-center gap-2"
                  style={{
                    color: isActive ? '#faf9f6' : '#4E3629',
                    fontWeight: isActive ? 600 : 500,
                    background: isActive ? 'transparent' : 'rgba(250,249,246,0.8)',
                    boxShadow: isActive ? '0 8px 24px rgba(46,92,49,0.15)' : 'none',
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeCravingBg"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, #2E5C31, #4A2E1B)',
                        zIndex: -1,
                      }}
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="text-base">{p.emoji}</span>
                  <span>{p.tabLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display Area */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {PAIRINGS.map((p) => {
                if (p.id !== activeCraving) return null;
                return (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
                  >
                    {/* Left Column: Overlapping Collage */}
                    <div className="lg:col-span-6 flex justify-center lg:justify-start items-center relative min-h-[300px] md:min-h-[380px]">
                      {/* Accent outline decorative circle */}
                      <div className="absolute w-[80%] lg:w-[75%] aspect-square rounded-full border border-[#2E5C31]/8 pointer-events-none left-0 lg:left-4" />

                      {/* Primary Dish Image (Arch Shape) */}
                      <motion.div
                        initial={{ scale: 0.95, y: 10 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-[80%] lg:w-[75%] max-h-[300px] md:max-h-[340px] aspect-[3/4] mask-arch overflow-hidden shadow-2xl relative z-10 border border-[#2E5C31]/10 bg-[#FAF9F6]"
                      >
                        <Image
                          src={p.dishImg}
                          alt={p.tiffinName}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          sizes="(max-width: 1024px) 80vw, 35vw"
                          quality={85}
                        />
                      </motion.div>

                      {/* Secondary Coffee Image (Circle Shape) */}
                      <motion.div
                        initial={{ scale: 0.8, rotate: -8, y: 15 }}
                        animate={{ scale: 1, rotate: 4, y: 0 }}
                        transition={{ duration: 0.7, type: 'spring', delay: 0.15 }}
                        className="absolute bottom-[-16px] right-[4%] lg:right-[6%] w-[38%] aspect-square rounded-full overflow-hidden shadow-2xl z-20 border-4 border-[#FAF9F6] bg-[#FAF9F6]"
                      >
                        <Image
                          src={p.coffeeImg}
                          alt={p.brewName}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          sizes="(max-width: 1024px) 38vw, 18vw"
                          quality={85}
                        />
                      </motion.div>

                      <div className="absolute top-[-10px] left-[4%] lg:left-[8%] bg-[#F4B41A] text-[#0F0A05] text-[10px] tracking-widest uppercase font-bold py-1.5 px-3 rounded-full z-20 shadow-md">
                        Curated Combo
                      </div>
                    </div>

                    {/* Right Column: Pairing Details */}
                    <div className="lg:col-span-6 flex flex-col justify-center">
                      <span className="font-label-md text-xs uppercase tracking-widest text-[#795741] mb-2 font-semibold block">
                        {p.subtitle}
                      </span>
                      <h3 className="font-display-md text-[#0F0A05] text-3xl md:text-4xl font-bold mb-4">
                        {p.title}
                      </h3>
                      <p className="font-body-lg text-[#4E3629]/90 font-light leading-relaxed mb-6 text-base">
                        {p.desc}
                      </p>

                      {/* Food & Brew Breakdown Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-[#FAF9F6]/90 p-4 rounded-[2rem] border border-[#2E5C31]/5 shadow-sm">
                          <div className="flex items-center gap-2.5 mb-2">
                            <span className="material-symbols-outlined text-[#2E5C31] text-lg">restaurant</span>
                            <h4 className="font-title-lg text-[#2E5C31] text-sm font-semibold uppercase tracking-wider">The Tiffin</h4>
                          </div>
                          <p className="font-body-md text-xs text-[#4E3629]/80 font-light leading-relaxed">
                            <strong>{p.tiffinName}</strong>: {p.tiffinDetails}
                          </p>
                        </div>

                        <div className="bg-[#FAF9F6]/90 p-4 rounded-[2rem] border border-[#2E5C31]/5 shadow-sm">
                          <div className="flex items-center gap-2.5 mb-2">
                            <span className="material-symbols-outlined text-[#2E5C31] text-lg">local_cafe</span>
                            <h4 className="font-title-lg text-[#2E5C31] text-sm font-semibold uppercase tracking-wider">The Brew</h4>
                          </div>
                          <p className="font-body-md text-xs text-[#4E3629]/80 font-light leading-relaxed">
                            <strong>{p.brewName}</strong>: {p.brewDetails}
                          </p>
                        </div>
                      </div>

                      {/* Flavor Profile Gauges */}
                      <div className="space-y-4 bg-[#FAF9F6]/60 p-4 rounded-[2rem] border border-[#2E5C31]/5">
                        <h5 className="font-label-md text-[10px] uppercase tracking-widest text-[#795741] font-bold mb-2 block">
                          Flavor Intensity Profile
                        </h5>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                          {Object.entries(p.flavors).map(([flavor, val]) => (
                            <div key={flavor} className="space-y-1">
                              <div className="flex justify-between text-xs font-medium">
                                <span className="capitalize text-[#4E3629]/95 font-semibold">{flavor}</span>
                                <span className="text-[#2E5C31]">{val}%</span>
                              </div>
                              <div className="h-1.5 w-full bg-[#E5DFD3] rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${val}%` }}
                                  transition={{ duration: 0.8 }}
                                  className="h-full bg-gradient-to-r from-[#2E5C31] to-[#F4B41A]"
                                />
                              </div>
                            </div>
                          ))}
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


      {/* ══════════════════════════════════════════════
           MENU GRID — Category filter + editorial cards
      ══════════════════════════════════════════════ */}
      <section
        id="menu-grid"
        style={{
          position: 'relative',
          background: '#faf9f6',
          borderTop: '1px solid rgba(193,201,189,0.3)',
          paddingBottom: 128,
        }}
      >
        {/* Sticky category nav */}
        <div
          style={{
            position: 'sticky',
            top: 72,
            zIndex: 40,
            background: 'rgba(250,249,246,0.92)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(193,201,189,0.3)',
          }}
          className="w-full px-gutter md:px-lg lg:px-xl"
        >
          <div
            className="w-full max-w-400 mx-auto flex items-center justify-between h-16"
          >
            {/* Category tabs */}
            <div style={{ display: 'flex', gap: 4 }}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.key}
                  id={`menu-tab-${cat.key}`}
                  onClick={() => { setActive(cat.key); setVisibleCount(BATCH_SIZE); }}
                  style={{
                    padding: '8px 20px',
                    borderRadius: 9999,
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-jakarta), sans-serif',
                    fontSize: 13,
                    fontWeight: active === cat.key ? 700 : 400,
                    letterSpacing: '0.05em',
                    background: active === cat.key ? '#16441c' : 'transparent',
                    color: active === cat.key ? '#fff' : '#424940',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    if (active !== cat.key) {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(22,68,28,0.08)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (active !== cat.key) {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Item count */}
            <span
              style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: 12, fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(114,121,111,0.6)',
              }}
            >
              {filtered.length} {filtered.length === 1 ? 'Item' : 'Items'}
            </span>
          </div>
        </div>

        {/* Section header */}
        <div className="w-full max-w-400 mx-auto px-gutter md:px-lg lg:px-xl pt-16 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: 11, fontWeight: 600,
                  letterSpacing: '0.25em', textTransform: 'uppercase',
                  color: '#F4B41A', margin: '0 0 12px',
                }}
              >
                {active === 'all' ? 'Our Full Menu' : CATEGORIES.find(c => c.key === active)?.label}
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair), serif',
                  fontSize: 'clamp(28px, 3.5vw, 48px)',
                  fontWeight: 700, lineHeight: 1.05,
                  letterSpacing: '-0.02em', color: '#16441c', margin: 0,
                }}
              >
                {active === 'all' && <>Every dish, a <em style={{ color: '#795741' }}>memory.</em></>}
                {active === 'dosas' && <>Dosas, <em style={{ color: '#795741' }}>done right.</em></>}
                {active === 'idlis' && <>Idlis of a <em style={{ color: '#795741' }}>different kind.</em></>}
                {active === 'kaapi' && <>The ritual of <em style={{ color: '#795741' }}>Filter Coffee.</em></>}
              </h2>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: 15, fontWeight: 300,
                lineHeight: 1.7, color: '#424940',
                maxWidth: 340, margin: 0,
              }}
            >
              Every item is made to order using stone-ground batters, hand-pounded spices,
              and pure artisanal ghee — no shortcuts.
            </p>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="w-full max-w-400 mx-auto px-gutter md:px-lg lg:px-xl">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
            >
              {displayedItems.map((item, i) => (
                <MenuCard key={item.id} item={item} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Load More button */}
        {visibleCount < filtered.length && (
          <div className="w-full max-w-400 mx-auto px-gutter md:px-lg lg:px-xl py-8">
            <LoadMoreButton
              onClick={handleLoadMore}
              remaining={filtered.length - visibleCount}
            />
          </div>
        )}
      </section>


      {/* ══════════════════════════════════════════════
           CRAFT STRIP — Warm cream background, 3 pillars
           Light section between white cards and dark CTA
      ══════════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          background: '#F5F0E8',
          borderTop: '1px solid rgba(193,201,189,0.5)',
          padding: '80px 32px',
          overflow: 'hidden',
        }}
      >
        {/* Faint watermark */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%) rotate(-6deg)',
          fontFamily: 'var(--font-playfair), serif',
          fontSize: 'clamp(60px, 12vw, 160px)',
          fontWeight: 700,
          color: 'rgba(22,68,28,0.04)',
          letterSpacing: '-0.04em',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
        }}>
          The Craft
        </div>

        <div className="w-full max-w-400 mx-auto px-gutter md:px-lg lg:px-xl grid grid-cols-1 md:grid-cols-3 gap-0 relative z-10">
          {[
            {
              icon: 'timer',
              stat: '14 hrs',
              label: 'Fermentation',
              desc: 'Stone-ground batter fermented overnight. No shortcuts, no additives.',
            },
            {
              icon: 'eco',
              stat: '100%',
              label: 'Artisanal Ghee',
              desc: 'Pure, golden, and aromatic. Sourced from small-batch producers.',
            },
            {
              icon: 'coffee_maker',
              stat: 'Single Estate',
              label: 'Chikmagalur Beans',
              desc: 'Dark-roasted Arabica blended with 20% chicory for the perfect heavy body.',
            },
          ].map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={`p-10 md:p-12 flex flex-col gap-3 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-[rgba(193,201,189,0.6)]' : ''}`}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 28, color: '#795741', marginBottom: 4 }}
              >
                {pillar.icon}
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-playfair), serif',
                  fontSize: 32, fontWeight: 700,
                  lineHeight: 1, letterSpacing: '-0.02em',
                  color: '#16441c', margin: 0,
                }}
              >
                {pillar.stat}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: '#F4B41A', margin: 0,
                }}
              >
                {pillar.label}
              </p>
              <div style={{ width: 32, height: 1, background: 'rgba(114,121,111,0.3)', margin: '4px 0' }} />
              <p
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: 14, fontWeight: 300,
                  lineHeight: 1.7, color: '#424940',
                  margin: 0,
                }}
              >
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ══════════════════════════════════════════════
           CTA — Visit Us / Order Online
      ══════════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          background: '#16441c',
          padding: '96px 32px',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', left: -60, top: 0, width: 240, height: 240, borderRadius: '50%', background: 'rgba(46,92,49,0.5)', filter: 'blur(48px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, bottom: 0, width: 360, height: 360, borderRadius: '50%', background: 'rgba(253,187,36,0.06)', filter: 'blur(64px)', pointerEvents: 'none' }} />

        <div className="w-full max-w-400 mx-auto px-gutter md:px-lg lg:px-xl flex items-center justify-between gap-12 flex-wrap relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: 11, fontWeight: 600,
                letterSpacing: '0.25em', textTransform: 'uppercase',
                color: '#F4B41A', margin: '0 0 16px',
              }}
            >
              Come Visit Us
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: 'clamp(32px, 4vw, 56px)',
                fontWeight: 700, lineHeight: 1.0,
                letterSpacing: '-0.02em', color: '#faf9f6',
                margin: '0 0 12px',
              }}
            >
              Taste it in <em style={{ color: '#F4B41A' }}>person.</em>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: 16, fontWeight: 300,
                lineHeight: 1.65, color: 'rgba(255,255,255,0.65)',
                margin: 0, maxWidth: 420,
              }}
            >
              Open daily, 8:30 AM to 11:00 PM. Ground Floor, Vanivihar Square, Saheed Nagar, Bhubaneswar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap', flexShrink: 0 }}
          >
            <Link
              href="/visit"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '16px 32px', borderRadius: 9999,
                background: '#faf9f6', color: '#16441c',
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: 13, fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                transition: 'transform 0.25s, background 0.25s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#F4B41A';
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = '#faf9f6';
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              }}
              className="hover-target"
            >
              Get Directions
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>location_on</span>
            </Link>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '16px 32px', borderRadius: 9999,
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#fff',
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: 13, fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                textDecoration: 'none',
                backdropFilter: 'blur(8px)',
                background: 'rgba(255,255,255,0.06)',
                transition: 'border-color 0.25s, background 0.25s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.55)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
              }}
              className="hover-target"
            >
              Contact Us
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>mail</span>
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}


// ─── Menu Card ───────────────────────────────────────────────────────────────

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const isLarge = index === 0; // first card always spans full width

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16, scale: 0.97 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      style={{
        gridColumn: isLarge ? '1 / -1' : undefined,
        position: 'relative',
        borderRadius: 28,
        overflow: 'hidden',
        background: '#fff',
        border: '1px solid rgba(193,201,189,0.35)',
        boxShadow: '0 4px 24px rgba(22,68,28,0.06)',
        display: 'flex',
        flexDirection: isLarge ? 'row' : 'column',
        minHeight: isLarge ? 400 : 480,
        cursor: 'default',
        transition: 'box-shadow 0.35s ease, transform 0.35s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = '0 20px 60px rgba(22,68,28,0.14)';
        el.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = '0 4px 24px rgba(22,68,28,0.06)';
        el.style.transform = 'translateY(0)';
      }}
    >
      {/* Image */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
          width: isLarge ? '55%' : '100%',
          height: isLarge ? '100%' : 260,
        }}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 55vw"
          quality={85}
          style={{
            transition: 'transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.06)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
        />
        {/* Gradient fade into content area */}
        {isLarge && (
          <div
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, transparent 70%, rgba(255,255,255,0.9) 100%)',
              pointerEvents: 'none',
            }}
          />
        )}
        {/* Badge */}
        {item.badge && (
          <div
            style={{
              position: 'absolute', top: 16, left: 16,
              padding: '6px 14px', borderRadius: 9999,
              background: item.badgeColor ?? '#16441c',
              color: '#fff',
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: 10, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
            }}
          >
            {item.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: isLarge ? '48px 48px 48px 40px' : '28px 28px 32px',
          flex: 1,
          gap: 0,
        }}
      >
        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'var(--font-jakarta), sans-serif',
            fontSize: 11, fontWeight: 600,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#F4B41A', margin: '0 0 12px',
          }}
        >
          {item.subtitle}
        </p>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: isLarge ? 'clamp(26px, 2.8vw, 42px)' : 26,
            fontWeight: 700, lineHeight: 1.1,
            letterSpacing: '-0.02em', color: '#16441c',
            margin: '0 0 16px',
          }}
        >
          {item.title}
        </h3>

        {/* Thin divider */}
        <div style={{ width: 40, height: 1, background: 'rgba(193,201,189,0.7)', margin: '0 0 16px' }} />

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--font-jakarta), sans-serif',
            fontSize: 15, fontWeight: 300,
            lineHeight: 1.75, color: '#424940',
            margin: '0 0 28px',
            maxWidth: isLarge ? 380 : undefined,
          }}
        >
          {item.description}
        </p>

        {/* Price + CTA row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
          <span
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: isLarge ? 40 : 32,
              fontWeight: 700, lineHeight: 1,
              letterSpacing: '-0.03em',
              color: '#16441c',
            }}
          >
            ₹{item.price}
          </span>

          <Link
            id={`order-${item.id}`}
            href="/order"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 24px', borderRadius: 9999,
              border: 'none', cursor: 'pointer',
              background: '#16441c', color: '#fff',
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: 12, fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background 0.25s, transform 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = '#F4B41A';
              (e.currentTarget as HTMLElement).style.color = '#16441c';
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = '#16441c';
              (e.currentTarget as HTMLElement).style.color = '#fff';
              (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
            }}
          >
            Order Now
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
