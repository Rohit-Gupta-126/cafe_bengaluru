'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function VibeClient() {
  const { scrollY } = useScroll();

  // Masonry Parallax Transforms
  const y1 = useTransform(scrollY, [0, 3000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -350]);
  const y3 = useTransform(scrollY, [0, 3000], [0, -100]);
  const y4 = useTransform(scrollY, [0, 3000], [0, -250]);

  // Floating Vector Transforms
  const floatY = useTransform(scrollY, [0, 1500], [0, 250]);
  const floatRotate = useTransform(scrollY, [0, 1500], [0, 60]);

  return (
    <>
      {/* Custom Styles for Arch Mask & Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        .vibe-arch-mask {
          clip-path: ellipse(50% 100% at 50% 100%);
          border-radius: 50vw 50vw 0 0;
        }
        @media (min-width: 768px) {
          .vibe-arch-mask {
            border-radius: 999px 999px 0 0;
            clip-path: none;
          }
        }
        .mask-blob {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }
        .mask-leaf {
          border-radius: 50% 0 50% 0;
        }
        .mask-pebble {
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        }
        .mask-arch-alt {
          border-radius: 50% 50% 0 0 / 20% 20% 0 0;
        }
        @keyframes rotate-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-rotate-text {
          animation: rotate-clockwise 10s linear infinite;
        }
      `}} />

      <main className="flex-grow pt-[100px] overflow-x-hidden relative z-10">
        
        {/* Atmospheric Hero */}
        <section className="max-w-container-max mx-auto px-lg py-xl flex flex-col md:flex-row items-center gap-xl relative">
          <motion.div 
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="md:w-1/2 z-10"
          >
            <h1 className="font-display-lg text-display-lg md:text-[80px] md:leading-[90px] text-secondary mb-md">
              Sunlight,<br/> Steam, &amp;<br/> Conversations.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md font-light">
              Immerse yourself in the sensory landscape of South Indian coffee culture, where every detail is curated to evoke a sense of home and heritage.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="md:w-1/2 relative flex justify-end"
          >
            <div className="w-full max-w-[500px] aspect-[3/4] vibe-arch-mask overflow-hidden relative shadow-[0_20px_50px_rgba(74,46,27,0.1)] border border-secondary-container/5">
              <img 
                alt="Sunlight streaming through window" 
                className="w-full h-full object-cover" 
                src="/images/vibe_hero.png"
              />
            </div>
            <div className="absolute bottom-0 left-[-20%] overlap-text hidden md:block">
              <span className="font-headline-lg text-headline-lg text-tertiary-container italic pr-lg bg-background/50 backdrop-blur-sm rounded-r-full py-sm">
                The morning ritual
              </span>
            </div>
          </motion.div>
          {/* Floating Decorative Vector */}
          <motion.div 
            style={{ y: floatY, rotate: floatRotate }}
            className="absolute top-[20%] left-[-5%] opacity-10 blur-sm pointer-events-none hidden lg:block"
          >
            <svg fill="none" height="200" viewBox="0 0 24 24" width="200" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C12 22 20 16 20 9C20 5.13401 16.866 2 13 2C11.067 2 9.317 2.78401 8.049 4C6.183 5.792 5 8.256 5 11C5 17 12 22 12 22Z" stroke="#795741" strokeWidth="1"></path>
              <path d="M12 22V10" stroke="#795741" strokeWidth="1"></path>
            </svg>
          </motion.div>
        </section>

        {/* Sensory Masonry Wall */}
        <section className="max-w-container-max mx-auto px-lg py-xl relative">
          <motion.h2 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-headline-md text-headline-md text-secondary mb-xl text-center"
          >
            A Curated Atmosphere
          </motion.h2>
          
          <div className="group/gallery relative w-full min-h-[1600px] md:min-h-[900px]">
            
            {/* Item 1: Wide */}
            <motion.div 
              style={{ y: y1 }}
              data-cursor="explore"
              className="gallery-item absolute top-0 left-0 w-full md:w-[55%] aspect-video mask-blob overflow-hidden shadow-lg hover-target cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:z-20 group-hover/gallery:opacity-60 hover:!opacity-100 group-hover/gallery:grayscale-[20%] hover:!grayscale-0 border border-secondary-container/5"
            >
              <img 
                alt="Modern cafe interior" 
                className="w-full h-full object-cover" 
                src="/images/vibe_interior.png"
              />
            </motion.div>
            
            {/* Item 2: Tall */}
            <motion.div 
              style={{ y: y2 }}
              data-cursor="explore"
              className="gallery-item absolute top-[400px] md:top-[10%] right-0 w-full md:w-[40%] aspect-[3/4] mask-arch-alt overflow-hidden shadow-lg hover-target cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:z-20 group-hover/gallery:opacity-60 hover:!opacity-100 group-hover/gallery:grayscale-[20%] hover:!grayscale-0 border border-secondary-container/5"
            >
              <img 
                alt="Traditional South Indian filter coffee pour" 
                className="w-full h-full object-cover" 
                src="/images/vibe_kaapi_pour.png"
              />
            </motion.div>
            
            {/* Item 3: Square */}
            <motion.div 
              style={{ y: y3 }}
              data-cursor="explore"
              className="gallery-item absolute top-[900px] md:top-[50%] left-[5%] w-[90%] md:w-[35%] aspect-square mask-leaf overflow-hidden shadow-lg hover-target cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:z-20 group-hover/gallery:opacity-60 hover:!opacity-100 group-hover/gallery:grayscale-[20%] hover:!grayscale-0 border border-secondary-container/5"
            >
              <img 
                alt="Freshly roasted coffee beans" 
                className="w-full h-full object-cover" 
                src="/images/vibe_coffee_beans.png"
              />
            </motion.div>
            
            {/* Item 4: Wide */}
            <motion.div 
              style={{ y: y4 }}
              data-cursor="explore"
              className="gallery-item absolute top-[1300px] md:top-[65%] right-[5%] w-[90%] md:w-[45%] aspect-video mask-pebble overflow-hidden shadow-lg hover-target cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:z-20 group-hover/gallery:opacity-60 hover:!opacity-100 group-hover/gallery:grayscale-[20%] hover:!grayscale-0 border border-secondary-container/5"
            >
              <img 
                alt="Friends sharing meal at cafe" 
                className="w-full h-full object-cover" 
                src="/images/vibe_friends.png"
              />
            </motion.div>
            
          </div>

          {/* Floating Compass Badge */}
          <Link 
            href="/visit"
            className="absolute bottom-[2%] md:bottom-[-2%] right-[10%] group/compass flex flex-col items-center cursor-pointer z-30 hover-target"
          >
            <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center shadow-lg border border-outline-variant/30 mb-sm transition-transform duration-300 group-hover/compass:scale-110">
              <span className="material-symbols-outlined text-secondary text-3xl transition-transform duration-500 ease-out group-hover/compass:rotate-45">
                explore
              </span>
            </div>
            <span className="font-label-md text-label-md text-secondary tracking-widest uppercase font-semibold">
              View on Map
            </span>
          </Link>
        </section>

        {/* Spatial Vignettes */}
        <section className="w-full bg-surface-container-low py-xl mt-xl">
          <div className="max-w-container-max mx-auto px-lg">
            <h2 className="font-headline-md text-headline-md text-secondary mb-xl text-center">The Nooks</h2>
            <div className="flex flex-col gap-lg max-w-5xl mx-auto">
              
              {/* Vignette 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col md:flex-row items-center gap-md bg-white rounded-3xl p-md shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow"
              >
                <div className="w-full md:w-1/3 aspect-square mask-leaf bg-surface-container-high relative overflow-hidden shrink-0 border border-secondary-container/5">
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent mix-blend-multiply z-10"></div>
                  <img 
                    alt="The Slow Filter Counter backdrop" 
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity" 
                    src="/images/vibe_kaapi_pour.png"
                  />
                </div>
                <div className="p-md">
                  <h3 className="font-title-lg text-title-lg text-secondary mb-sm">The Slow Filter Counter</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
                    Where time slows down. Watch our master brewers perform the rhythmic art of pulling the perfect degree coffee.
                  </p>
                </div>
              </motion.div>

              {/* Vignette 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                className="flex flex-col md:flex-row-reverse items-center gap-md bg-white rounded-3xl p-md shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow"
              >
                <div className="w-full md:w-1/3 aspect-square mask-blob bg-surface-container-high relative overflow-hidden shrink-0 border border-secondary-container/5">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 to-transparent mix-blend-multiply z-10"></div>
                  <img 
                    alt="The Sunlit Courtyard backdrop" 
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity" 
                    src="/images/vibe_interior.png"
                  />
                </div>
                <div className="p-md md:text-right">
                  <h3 className="font-title-lg text-title-lg text-secondary mb-sm">The Sunlit Courtyard</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
                    Dappled light and the rustle of banana leaves. A quiet sanctuary hidden away from the city's pulse.
                  </p>
                </div>
              </motion.div>

              {/* Vignette 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="flex flex-col md:flex-row items-center gap-md bg-white rounded-3xl p-md shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow"
              >
                <div className="w-full md:w-1/3 aspect-square mask-pebble bg-surface-container-high relative overflow-hidden shrink-0 border border-secondary-container/5">
                  <div className="absolute inset-0 bg-gradient-to-tr from-tertiary-container/20 to-transparent mix-blend-multiply z-10"></div>
                  <img 
                    alt="The Communal Table backdrop" 
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity" 
                    src="/images/vibe_friends.png"
                  />
                </div>
                <div className="p-md">
                  <h3 className="font-title-lg text-title-lg text-secondary mb-sm">The Communal Table</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
                    Carved from reclaimed timber, this is where conversations intersect and new stories begin over shared plates.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

      </main>

    </>
  );
}
