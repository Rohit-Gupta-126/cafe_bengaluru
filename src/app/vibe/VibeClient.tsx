'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function VibeClient() {
  const { scrollY } = useScroll();

  // Hero parallax
  const heroScale = useTransform(scrollY, [0, 900], [1, 1.05]);
  const heroTextY = useTransform(scrollY, [0, 900], [0, 180]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  const gallerySectionRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress: galleryScrollProgress } = useScroll({
    target: gallerySectionRef,
    offset: ["start end", "end start"]
  });

  // Gallery Parallax Transforms
  const y1 = useTransform(galleryScrollProgress, [0, 1], [0, -60]);
  const y2 = useTransform(galleryScrollProgress, [0, 1], [0, -120]);
  const y3 = useTransform(galleryScrollProgress, [0, 1], [0, -40]);
  const y4 = useTransform(galleryScrollProgress, [0, 1], [0, -90]);

  return (
    <main style={{ background: '#faf9f6', position: 'relative', width: '100%', overflowX: 'hidden' }}>

      {/* ══════════════════════════════════════════════
           HERO — Full-bleed editorial
      ══════════════════════════════════════════════ */}
      <section
        id="hero-vibe"
        style={{ position: 'relative', width: '100%', overflow: 'hidden', height: '100svh', minHeight: 640 }}
      >
        <motion.div
          style={{ scale: heroScale, position: 'absolute', inset: 0, transformOrigin: 'center' }}
        >
          <Image
            alt="Sunlight, Steam, & Conversations"
            src="/images/vibe_hero.png"
            fill
            loading="eager"
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

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

        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity, position: 'absolute', insetInline: 0, bottom: 0, pointerEvents: 'none' }}
        >
          <div className="w-full max-w-[1600px] mx-auto px-8 pb-20 pointer-events-auto">
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
              The Atmosphere
            </motion.p>

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
              Sensory<br />
              <em style={{ color: '#F4B41A', fontStyle: 'italic' }}>Landscape.</em>
            </motion.h1>

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
                Immerse yourself in the sensory landscape of South Indian coffee culture, where every detail is curated to evoke a sense of home and heritage.
              </p>

              <Link
                href="/visit"
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
                Find Us
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              </Link>
            </motion.div>

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
      </section>
      {/* ══════════════════════════════════════════════
           SECTION 2 — The Nooks (Distinct Grid)
      ══════════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          background: '#F5F0E8',
          borderTop: '1px solid rgba(193,201,189,0.4)',
          padding: '120px 0',
          overflow: 'hidden',
        }}
      >
        <div className="w-full max-w-[1600px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: 80 }}
          >
            <p style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#795741',
              margin: '0 0 16px',
            }}>
              Curated Spaces
            </p>
            <h2 style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: '#0F0A05',
              margin: 0,
            }}>
              Discover our
              {' '}<em style={{ color: '#2E5C31' }}>hidden nooks.</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
            {[
              {
                title: 'The Brass Bar',
                desc: 'A front-row seat to the rhythmic art of traditional brewing. Brass filters clinking, aromatic steam rising, and the rich scent of dark-roasted chicory blend.',
                img: '/images/vibe_kaapi_pour.png',
                offset: 0
              },
              {
                title: 'The Courtyard',
                desc: 'Dappled sunlight filters through banana leaves onto terracotta tiles. A quiet, open-air sanctuary designed for slow mornings and quiet reflections.',
                img: '/images/vibe_interior.png',
                offset: 40
              },
              {
                title: 'The Gather Box',
                desc: 'Centred around a massive reclaimed timber table under warm amber lights. This is where plates are shared and city conversations naturally intersect.',
                img: '/images/vibe_friends.png',
                offset: 80
              }
            ].map((nook, i) => (
              <motion.div
                key={nook.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: nook.offset }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                style={{ position: 'relative' }}
              >
                <div style={{
                  borderRadius: 16,
                  overflow: 'hidden',
                  aspectRatio: '3/4',
                  marginBottom: 32,
                  position: 'relative'
                }}>
                  <Image
                    src={nook.img}
                    alt={nook.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                    style={{
                      filter: 'grayscale(20%) brightness(0.9)',
                      transition: 'transform 0.7s ease, filter 0.7s ease',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget;
                      el.style.transform = 'scale(1.05)';
                      el.style.filter = 'grayscale(0%) brightness(1.1)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget;
                      el.style.transform = 'scale(1)';
                      el.style.filter = 'grayscale(20%) brightness(0.9)';
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    border: '1px solid rgba(244,180,26,0.2)',
                    borderRadius: 16,
                    pointerEvents: 'none'
                  }} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-playfair), serif',
                  fontSize: 26,
                  color: '#0F0A05',
                  marginBottom: 16,
                  lineHeight: 1.2
                }}>
                  {nook.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: 15,
                  fontWeight: 300,
                  color: 'rgba(15,10,5,0.65)',
                  lineHeight: 1.7,
                  margin: 0
                }}>
                  {nook.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
           SECTION 3 — Sensory Masonry Wall
      ══════════════════════════════════════════════ */}
      <section
        ref={gallerySectionRef}
        style={{
          position: 'relative',
          background: '#F5F0E8',
          borderTop: '1px solid rgba(193,201,189,0.4)',
          overflow: 'hidden',
          padding: '120px 0'
        }}
      >
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
          Atmosphere
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-8 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 48 }}
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
              Through the Lens
            </p>
            <h2 style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#0F0A05',
              margin: 0,
            }}>
              A curated <em style={{ color: '#2E5C31', fontStyle: 'italic' }}>sensory experience.</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-start">
            {/* Left Column */}
            <div className="flex flex-col gap-12 md:gap-16">
              {/* Gallery Item 1 */}
              <motion.div 
                className="hover-target"
                data-cursor="explore"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8 }}
                style={{
                  y: y1,
                  width: '100%',
                  aspectRatio: '16/9',
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(22,68,28,0.1)',
                  cursor: 'pointer',
                }}
              >
                <Image 
                  alt="Modern cafe interior" 
                  src="/images/vibe_interior.png"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  style={{ transition: 'transform 0.5s ease, filter 0.5s ease', filter: 'grayscale(20%)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.filter = 'grayscale(0%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.filter = 'grayscale(20%)';
                  }}
                />
              </motion.div>

              {/* Gallery Item 3 */}
              <motion.div 
                className="hover-target"
                data-cursor="explore"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{
                  y: y3,
                  width: '80%',
                  margin: '0 auto',
                  aspectRatio: '1',
                  borderRadius: '50% 0 50% 0',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(22,68,28,0.1)',
                  cursor: 'pointer',
                }}
              >
                <Image 
                  alt="Freshly roasted coffee beans" 
                  src="/images/vibe_coffee_beans.png"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 40vw"
                  quality={85}
                  style={{ transition: 'transform 0.5s ease, filter 0.5s ease', filter: 'grayscale(20%)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.filter = 'grayscale(0%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.filter = 'grayscale(20%)';
                  }}
                />
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-12 md:gap-16 mt-0 md:mt-[60px]">
              {/* Gallery Item 2 */}
              <motion.div 
                className="hover-target"
                data-cursor="explore"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  y: y2,
                  width: '90%',
                  marginLeft: 'auto',
                  aspectRatio: '3/4',
                  borderRadius: '50% 50% 0 0 / 20% 20% 0 0',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(22,68,28,0.1)',
                  cursor: 'pointer',
                }}
              >
                <Image 
                  alt="Traditional South Indian filter coffee pour" 
                  src="/images/vibe_kaapi_pour.png"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 45vw"
                  quality={85}
                  style={{ transition: 'transform 0.5s ease, filter 0.5s ease', filter: 'grayscale(20%)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.filter = 'grayscale(0%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.filter = 'grayscale(20%)';
                  }}
                />
              </motion.div>

              {/* Gallery Item 4 */}
              <motion.div 
                className="hover-target"
                data-cursor="explore"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  y: y4,
                  width: '100%',
                  aspectRatio: '16/9',
                  borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(22,68,28,0.1)',
                  cursor: 'pointer',
                }}
              >
                <Image 
                  alt="Friends sharing meal at cafe" 
                  src="/images/vibe_friends.png"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  style={{ transition: 'transform 0.5s ease, filter 0.5s ease', filter: 'grayscale(20%)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.filter = 'grayscale(0%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.filter = 'grayscale(20%)';
                  }}
                />
              </motion.div>
            </div>
          </div></div>

      </section>

    </main>
  );
}
