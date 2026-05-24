'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function VisitPage() {
  return (
    <>
      {/* Main Content */}
      <main className="grow w-full max-w-400 mx-auto px-gutter md:px-lg lg:px-xl py-16 md:py-24 mt-24">
        <div className="flex flex-col md:flex-row gap-16 md:gap-xl xl:gap-24">
          {/* Left Column: Info */}
          <div className="w-full md:w-2/5 flex flex-col justify-center gap-lg">
            <div>
              <h1 className="font-display-lg text-headline-lg text-secondary mb-sm leading-tight">Come Say Hello.</h1>
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
                  <p className="font-body-md text-body-md text-on-surface font-light">8:30 AM - 11:00 PM</p>
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
                  <a className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary hover:text-tertiary-container transition-colors border-b border-transparent hover:border-tertiary-fixed-dim pb-1 hover-target" href="https://www.instagram.com/cafebengaluru_bbsr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                    @cafebengaluru
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: Visuals */}
          <div className="w-full md:w-3/5 relative">
            {/* Map Container */}
            <div className="w-full aspect-square md:aspect-4/5 max-h-125 lg:max-h-137.5 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(74,46,27,0.08)] bg-surface-container border border-surface-variant relative z-10">
              <Image alt="Map location" fill className="object-cover" src="/images/map_location.png" sizes="(max-width: 768px) 100vw, 60vw" quality={85} />
            </div>
            {/* Overlapping Polaroid */}
            <div className="absolute -bottom-16 left-4 sm:-bottom-8 sm:-left-4 md:bottom-8 md:-left-12 z-20 bg-surface p-4 pb-12 rounded-lg shadow-[0_12px_40px_rgba(74,46,27,0.15)] transform -rotate-3 border border-surface-variant w-50 sm:w-60 md:w-70">
              <div className="rounded-sm overflow-hidden aspect-square relative">
                <Image alt="Cafe exterior" fill className="object-cover" src="/images/cafe_exterior.png" sizes="280px" quality={75} />
              </div>
              <p className="font-headline-md text-[20px] text-center text-secondary mt-4 -mb-5 font-medium opacity-80">See you soon</p>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
