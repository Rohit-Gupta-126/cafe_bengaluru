'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { JOURNEY_CHAPTERS } from '@/data/about';

export default function AboutClient() {
  const { scrollY } = useScroll();

  // Hero parallax
  const heroScale = useTransform(scrollY, [0, 900], [1, 1.05]);
  const heroTextY  = useTransform(scrollY, [0, 900], [0, 180]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <main style={{ background: '#faf9f6', position: 'relative', width: '100%', overflowX: 'hidden' }}>

      {/* ══════════════════════════════════════════════
           HERO — Full-bleed editorial (matches homepage)
      ══════════════════════════════════════════════ */}
      <section
        id="hero-story"
        style={{ position: 'relative', width: '100%', overflow: 'hidden', height: '100svh', minHeight: 640 }}
      >
        {/* Background image with parallax scale */}
        <motion.div
          style={{ scale: heroScale, position: 'absolute', inset: 0, transformOrigin: 'center' }}
        >
          <Image
            alt="Heritage cafe ambience"
            src="/images/story_heritage.png"
            fill
            loading="eager"
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        {/* Strong directional gradients — identical pattern to homepage */}
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'linear-gradient(to top, rgba(15,10,5,0.95) 0%, rgba(15,10,5,0.55) 42%, rgba(15,10,5,0.08) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'linear-gradient(to right, rgba(15,10,5,0.60) 0%, transparent 65%)',
          }}
        />

        {/* Text block — pinned to bottom-left exactly like homepage hero */}
        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity, position: 'absolute', insetInline: 0, bottom: 0, pointerEvents: 'none' }}
        >
          <div className="w-full max-w-400 mx-auto px-gutter md:px-lg lg:px-xl pb-20 pointer-events-auto">
            {/* Eye-brow */}
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
              Our Story · Since 2021
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
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
              <em style={{ color: '#F4B41A', fontStyle: 'italic' }}>Heritage.</em>
            </motion.h1>

            {/* Sub-line */}
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
                From the coffee houses of Bengaluru to the heart of Bhubaneswar —
                a story of ritual, memory, and pure artisanal craft.
              </p>

              <Link
                href="/menu"
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
                Explore the Menu
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              </Link>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              style={{ marginTop: 48, display: 'flex', alignItems: 'center', gap: 12 }}
            >
              <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5))' }} />
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
          style={{ position: 'absolute', top: 112, right: 32, pointerEvents: 'none' }}
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
              Est.<br />in Odisha<br />
              <strong>2021</strong>
            </span>
          </div>
        </motion.div>
      </section>


      {/* ══════════════════════════════════════════════
           SECTION 2 — Cinematic Journey Timeline
           Dark full-bleed strip with 3 numbered chapters
      ══════════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          background: '#0F0A05',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          overflow: 'hidden',
        }}
      >
        {/* Ambient grain overlay */}
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            opacity: 0.04,
            mixBlendMode: 'screen',
          }}
        />
        {/* Gold glow top-right */}
        <div style={{ position: 'absolute', top: -120, right: -80, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,180,26,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="w-full max-w-400 mx-auto px-gutter md:px-lg lg:px-xl py-16 md:py-24">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ marginBottom: 80 }}
          >
            <p style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#F4B41A',
              margin: '0 0 16px',
            }}>
              The Journey
            </p>
            <h2 style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: '-0.025em',
              color: '#faf9f6',
              margin: 0,
              maxWidth: '18ch',
            }}>
              How Bengaluru's ritual
              {' '}<em style={{ color: '#F4B41A' }}>found its new home.</em>
            </h2>
          </motion.div>

          {/* Three chapters — stacked with connecting line */}
          <div style={{ position: 'relative' }}>
            {/* Vertical connector line */}
            <div style={{
              position: 'absolute',
              left: 23,
              top: 0,
              bottom: 0,
              width: 1,
              background: 'linear-gradient(to bottom, rgba(244,180,26,0.6), rgba(244,180,26,0.1), transparent)',
              pointerEvents: 'none',
            }} />

            {JOURNEY_CHAPTERS.map((chapter, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start ${i < 2 ? 'pb-16 md:pb-20' : ''}`}
              >
                {/* Chapter number bubble */}
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'rgba(244,180,26,0.10)',
                  border: '1px solid rgba(244,180,26,0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 1,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-jakarta), sans-serif',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    color: '#F4B41A',
                  }}>{chapter.num}</span>
                </div>

                {/* Chapter content */}
                  <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-start xl:items-center w-full">
                  <div className="flex-1">
                    <h3 style={{
                      fontFamily: 'var(--font-playfair), serif',
                      fontSize: 'clamp(22px, 2.5vw, 34px)',
                      fontWeight: 700,
                      color: '#faf9f6',
                      lineHeight: 1.15,
                      letterSpacing: '-0.02em',
                      margin: '0 0 20px',
                    }}>
                      {chapter.heading}
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-jakarta), sans-serif',
                      fontSize: 16,
                      fontWeight: 300,
                      lineHeight: 1.75,
                      color: 'rgba(250,249,246,0.55)',
                      margin: 0,
                      maxWidth: 520,
                    }}>
                      {chapter.body}
                    </p>
                  </div>

                  <div className="w-full xl:w-120 shrink-0 rounded-5xl overflow-hidden aspect-4/3 relative">
                    <Image
                      src={chapter.img}
                      alt={chapter.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 360px"
                      quality={85}
                      style={{
                        filter: 'grayscale(30%) brightness(0.85)',
                        transition: 'filter 0.6s ease, transform 0.8s ease',
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLImageElement;
                        el.style.filter = 'grayscale(0%) brightness(1)';
                        el.style.transform = 'scale(1.04)';
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLImageElement;
                        el.style.filter = 'grayscale(30%) brightness(0.85)';
                        el.style.transform = 'scale(1)';
                      }}
                    />
                    {/* Subtle gold frame */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      border: '1px solid rgba(244,180,26,0.12)',
                      borderRadius: 20,
                      pointerEvents: 'none',
                    }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
           SECTION 3 — "By the Numbers" typographic stats
           Bold oversized numerals on warm cream background
      ══════════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          background: '#F5F0E8',
          borderTop: '1px solid rgba(193,201,189,0.4)',
          overflow: 'hidden',
        }}
      >
        {/* Faint diagonal label */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(-12deg)',
          fontFamily: 'var(--font-playfair), serif',
          fontSize: 'clamp(80px, 14vw, 200px)',
          fontWeight: 700,
          color: 'rgba(22,68,28,0.04)',
          letterSpacing: '-0.04em',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
        }}>
          Our Story
        </div>

        <div className="w-full max-w-400 mx-auto px-gutter md:px-lg lg:px-xl py-16 md:py-24 relative z-10">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 80 }}
          >
            <p style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#795741',
              margin: '0 0 14px',
            }}>
              The Craft in Numbers
            </p>
            <h2 style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#16441c',
              margin: 0,
            }}>
              Obsession, measured.
            </h2>
          </motion.div>

          {/* Stats grid — responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-[rgba(193,201,189,0.4)]">

            {[
              {
                stat: '14',
                unit: 'Hours',
                label: 'Fermentation time for our stone-ground batter. No shortcuts. No additives.',
                accent: '#16441c',
              },
              {
                stat: '3K',
                unit: 'Miles',
                label: 'The distance our recipes, techniques, and equipment travelled from Bengaluru.',
                accent: '#795741',
              },
              {
                stat: '20',
                unit: '% Chicory',
                label: 'The exact blend ratio in our Chikmagalur decoction for the perfect heavy body.',
                accent: '#16441c',
              },
              {
                stat: '2021',
                unit: 'Founded',
                label: 'The year Cafe Bengaluru opened its doors in Bhubaneswar, Odisha.',
                accent: '#795741',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="p-8 md:p-10 flex flex-col gap-3 border-r border-b border-[rgba(193,201,189,0.6)]"
              >
                {/* Big number */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  <span style={{
                    fontFamily: 'var(--font-playfair), serif',
                    fontSize: 'clamp(52px, 6vw, 88px)',
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    color: item.accent,
                  }}>
                    {item.stat}
                  </span>
                </div>
                {/* Unit */}
                <p style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#F4B41A',
                  margin: 0,
                }}>
                  {item.unit}
                </p>
                {/* Thin rule */}
                <div style={{ width: 32, height: 1, background: 'rgba(114,121,111,0.3)', margin: '4px 0' }} />
                {/* Description */}
                <p style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: 14,
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: '#424940',
                  margin: 0,
                }}>
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom quote strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-0 pt-12 px-6 flex items-center justify-between gap-8 flex-wrap border-t border-[rgba(193,201,189,0.6)]"
          >
            <p style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(18px, 2vw, 26px)',
              fontStyle: 'italic',
              fontWeight: 600,
              color: '#16441c',
              margin: 0,
              maxWidth: '54ch',
              lineHeight: 1.4,
            }}>
              "Authenticity isn't just about ingredients — it's about the feeling. Sensory heritage."
            </p>
            <p style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(114,121,111,0.6)',
              margin: 0,
              flexShrink: 0,
            }}>
              — The Founders
            </p>
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
           SECTION 4 — Odisha Connection (full-bleed image + overlay text)
      ══════════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          height: '80vh',
          minHeight: 560,
          borderTop: '1px solid rgba(193,201,189,0.3)',
        }}
      >
        <Image
          src="/images/story_cafe_interior.png"
          alt="Cafe Bengaluru in Bhubaneswar"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(22,68,28,0.92) 0%, rgba(22,68,28,0.60) 50%, rgba(22,68,28,0.15) 100%)',
          }}
        />

        {/* Text — pinned to left-center */}
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="w-full max-w-400 mx-auto px-gutter md:px-lg lg:px-xl">
            <p
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
              Planted in Odisha
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: 'clamp(40px, 5.5vw, 80px)',
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                color: '#fff',
                margin: 0,
                marginBottom: 24,
                maxWidth: '12ch',
              }}
            >
              …And planted them in{' '}
              <em style={{ color: '#F4B41A' }}>Vanivihar Square.</em>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: 17,
                fontWeight: 300,
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.78)',
                maxWidth: 440,
                margin: '0 0 40px',
              }}
            >
              Ground Floor, Vanivihar Square, Saheed Nagar, Bhubaneswar — a space designed for lingering conversations and the comforting aroma of roasted beans.
            </p>
            <Link
              href="/visit"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 28px',
                borderRadius: 9999,
                border: '1px solid rgba(255,255,255,0.35)',
                color: '#fff',
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                backdropFilter: 'blur(8px)',
                background: 'rgba(255,255,255,0.08)',
                transition: 'background 0.25s, border-color 0.25s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.18)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.6)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.35)';
              }}
              className="hover-target"
            >
              Visit Us
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>location_on</span>
            </Link>
          </div>
        </motion.div>

        {/* Est. badge — top right */}
        <motion.div
          initial={{ opacity: 0, rotate: -12, scale: 0.8 }}
          whileInView={{ opacity: 1, rotate: 12, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            position: 'absolute',
            top: 48, right: 48,
            width: 120, height: 120,
            borderRadius: '50%',
            border: '1px solid rgba(244,180,26,0.5)',
            background: 'rgba(244,180,26,0.12)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            pointerEvents: 'none',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 24, color: '#F4B41A', marginBottom: 4 }}>verified</span>
          <span
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 11,
              color: '#F4B41A',
              lineHeight: 1.4,
              padding: '0 10px',
            }}
          >
            Est. in<br />Odisha<br /><strong>2021</strong>
          </span>
        </motion.div>
      </section>


      {/* ══════════════════════════════════════════════
           SECTION 5 — Final Quote CTA (matches homepage testimonial style)
      ══════════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          padding: '120px 32px',
          background: '#16441c',
          overflow: 'hidden',
        }}
      >
        {/* Subtle decorative shapes */}
        <div
          style={{
            position: 'absolute', left: -80, top: 0,
            width: 260, height: 260,
            borderRadius: '50%',
            background: 'rgba(46,92,49,0.5)',
            filter: 'blur(48px)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute', right: 0, bottom: 0,
            width: 380, height: 380,
            borderRadius: '50%',
            background: 'rgba(253,187,36,0.06)',
            filter: 'blur(64px)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: 860,
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 56, color: 'rgba(253,187,36,0.4)', marginBottom: 32, display: 'block' }}
          >
            format_quote
          </span>

          <motion.blockquote
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(24px, 3.5vw, 44px)',
              fontWeight: 600,
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
              color: '#faf9f6',
              fontStyle: 'italic',
              margin: 0,
            }}
          >
            "A space designed for lingering conversations and the comforting aroma of roasted beans."
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{ marginTop: 56, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}
          >
            {/* Thin separator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
              <div style={{ width: 48, height: 1, background: 'rgba(255,255,255,0.2)' }} />
              <span
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                }}
              >
                Cafe Bengaluru
              </span>
              <div style={{ width: 48, height: 1, background: 'rgba(255,255,255,0.2)' }} />
            </div>

            <Link
              href="/menu"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '16px 36px',
                borderRadius: 9999,
                background: '#faf9f6',
                color: '#16441c',
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                transition: 'transform 0.25s, box-shadow 0.25s, background 0.25s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
                (e.currentTarget as HTMLElement).style.background = '#F4B41A';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLElement).style.background = '#faf9f6';
              }}
              className="hover-target"
            >
              Explore Our Menu
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>

            {/* Social row */}
            <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
              <a
                href="https://www.instagram.com/cafebengaluru_bbsr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 44, height: 44,
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  transition: 'border-color 0.25s, color 0.25s, background 0.25s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#F4B41A';
                  (e.currentTarget as HTMLElement).style.color = '#F4B41A';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
                }}
                className="hover-target"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>photo_camera</span>
              </a>
              <a
                href="/visit"
                style={{
                  width: 44, height: 44,
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  transition: 'border-color 0.25s, color 0.25s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#F4B41A';
                  (e.currentTarget as HTMLElement).style.color = '#F4B41A';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
                }}
                className="hover-target"
                aria-label="Visit Us"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>location_on</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
