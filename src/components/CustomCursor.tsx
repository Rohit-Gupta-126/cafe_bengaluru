'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoverActive, setHoverActive] = useState(false);
  const [cursorType, setCursorType] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on devices that support hover
    if (window.matchMedia('(hover: none)').matches) return;
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
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
  }, []);

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
      <div 
        className={`hidden lg:flex fixed pointer-events-none z-[99999] rounded-full items-center justify-center transition-all duration-300 mix-blend-difference -translate-x-1/2 -translate-y-1/2 ${
          cursorType === 'explore'
            ? 'w-24 h-24 bg-transparent border-[1.5px] border-[#F4B41A] scale-100'
            : hoverActive
              ? 'w-12 h-12 bg-[#F4B41A]/80 scale-110'
              : 'w-5 h-5 bg-[#F4B41A]'
        }`}
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
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
      </div>
    </>
  );
}
