'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hoverActive, setHoverActive] = useState(false);
  const [cursorType, setCursorType] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Framer motion values for smooth performance
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring configuration for smooth follow
  const springConfig = { damping: 30, stiffness: 800, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show custom cursor on devices that support hover
    if (window.matchMedia('(hover: none)').matches) return;
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      
      const exploreTarget = target.closest('[data-cursor="explore"]');
      if (exploreTarget) {
        setCursorType('explore');
        setHoverActive(false);
        return;
      }
      
      setCursorType(null);

      const isHoverable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.classList.contains('hover-target') ||
        target.closest('.hover-target');

      setHoverActive(!!isHoverable);
    };

    const handleMouseLeave = () => {
      setHoverActive(false);
      setCursorType(null);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (hover: hover) {
          body, a, button, [role="button"], input, select, textarea { 
            cursor: none !important; 
          }
        }
        @keyframes rotate-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-rotate-text {
          animation: rotate-clockwise 8s linear infinite;
        }
      `}} />
      <motion.div 
        className="hidden lg:flex fixed top-0 left-0 pointer-events-none z-[99999] rounded-full items-center justify-center mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          width: cursorType === 'explore' ? 96 : hoverActive ? 48 : 20,
          height: cursorType === 'explore' ? 96 : hoverActive ? 48 : 20,
          backgroundColor: cursorType === 'explore' ? 'transparent' : hoverActive ? 'rgba(244, 180, 26, 0.8)' : '#F4B41A',
          borderColor: cursorType === 'explore' ? '#F4B41A' : 'transparent',
          borderWidth: cursorType === 'explore' ? 1.5 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25
        }}
      >
        {cursorType === 'explore' && (
          <div className="absolute inset-0 flex items-center justify-center animate-rotate-text">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
              <text className="text-[14px] font-bold tracking-[0.2em] uppercase" fill="#F4B41A">
                <textPath href="#circlePath" startOffset="0%">
                  EXPLORE • EXPLORE • 
                </textPath>
              </text>
            </svg>
          </div>
        )}
      </motion.div>
    </>
  );
}
