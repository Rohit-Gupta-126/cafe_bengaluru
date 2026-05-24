import React from 'react';
import Image from 'next/image';

export default function OrderPage() {
  return (
    <main className="flex-grow w-full max-w-[1600px] mx-auto px-6 md:px-gutter py-16 md:py-xl mt-24">
      <div className="flex flex-col md:flex-row gap-16 md:gap-xl xl:gap-24 items-center">
        {/* Left Column: Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-8">
          <div>
            <p className="font-jakarta text-label-md text-tertiary-fixed-dim uppercase tracking-[0.2em] mb-4 font-semibold">
              Delivery Partners
            </p>
            <h1 className="font-playfair text-[clamp(40px,5vw,72px)] text-secondary leading-tight mb-6 font-bold">
              Bring the <em className="text-primary italic">Atmosphere</em> Home.
            </h1>
            <div className="h-px w-16 bg-[rgba(193,201,189,0.6)] mb-8"></div>
            <p className="font-jakarta text-body-lg text-on-surface-variant font-light max-w-md leading-relaxed mb-10">
              Craving our stone-ground dosas and authentic filter coffee, but prefer to stay in? Order online through our delivery partners and we'll bring the heritage of Cafe Bengaluru straight to your door.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              {/* Swiggy Button */}
              <a
                href="https://www.swiggy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 bg-[#FC8019] text-white px-8 py-4 rounded-full shadow-[0_8px_24px_rgba(252,128,25,0.25)] hover:shadow-[0_12px_32px_rgba(252,128,25,0.4)] hover:-translate-y-1 transition-all duration-300 hover-target w-full sm:w-auto"
              >
                <span className="font-jakarta text-[14px] font-bold tracking-widest uppercase">
                  Order on Swiggy
                </span>
                <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>

              {/* Zomato Button */}
              <a
                href="https://www.zomato.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 bg-[#E23744] text-white px-8 py-4 rounded-full shadow-[0_8px_24px_rgba(226,55,68,0.25)] hover:shadow-[0_12px_32px_rgba(226,55,68,0.4)] hover:-translate-y-1 transition-all duration-300 hover-target w-full sm:w-auto"
              >
                <span className="font-jakarta text-[14px] font-bold tracking-widest uppercase">
                  Order on Zomato
                </span>
                <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[600px] flex items-center justify-center">
          {/* Main Delivery Image */}
          <div className="w-full h-full aspect-[4/5] md:aspect-auto md:absolute md:inset-0 rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] relative">
            <Image 
              alt="Dosa delivery preparation" 
              src="/images/editorial_masala_dosa.png" 
              fill 
              className="object-cover" 
              sizes="(max-width: 768px) 100vw, 50vw" 
              quality={90} 
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,10,5,0.6)] to-transparent pointer-events-none" />
          </div>

          {/* Floating 'Freshly Packed' Badge */}
          <div className="absolute bottom-8 left-8 bg-[#FAF9F6] p-5 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.1)] border border-[rgba(193,201,189,0.3)] flex items-center gap-4 z-10 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="w-12 h-12 rounded-full bg-[#F5F0E8] flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">shopping_bag</span>
            </div>
            <div>
              <p className="font-jakarta text-[12px] font-bold text-secondary uppercase tracking-widest mb-1">Freshly Packed</p>
              <p className="font-jakarta text-[13px] text-on-surface-variant font-light">Hot & Ready to travel.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
