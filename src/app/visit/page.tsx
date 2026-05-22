'use client';

import React, { useEffect, useState } from 'react';

export default function VisitPage() {
  return (
    <>
      {/* Main Content */}
      <main className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-gutter py-xl mt-24">
        <div className="flex flex-col md:flex-row gap-xl">
          {/* Left Column: Info */}
          <div className="w-full md:w-[40%] flex flex-col justify-center gap-lg">
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
          <div className="w-full md:w-[60%] relative min-h-[500px] flex items-center justify-center">
            {/* Map Container */}
            <div className="w-full h-[450px] md:h-full rounded-[24px] overflow-hidden shadow-[0_8px_32px_rgba(74,46,27,0.08)] bg-surface-container border border-surface-variant relative z-10">
              <img alt="Map location" className="w-full h-full object-cover" src="/images/map_location.png" />
            </div>
            {/* Overlapping Polaroid */}
            <div className="absolute -bottom-8 -left-8 md:bottom-8 md:-left-12 z-20 bg-surface p-4 pb-12 rounded-[8px] shadow-[0_12px_40px_rgba(74,46,27,0.15)] transform -rotate-3 border border-surface-variant max-w-[240px] md:max-w-[280px]">
              <div className="rounded-[4px] overflow-hidden aspect-square">
                <img alt="Cafe exterior" className="w-full h-full object-cover" src="/images/cafe_exterior.png" />
              </div>
              <p className="font-headline-md text-[20px] text-center text-secondary mt-4 mb-[-20px] font-medium opacity-80">See you soon</p>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
