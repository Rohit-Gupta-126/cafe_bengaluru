'use client';

import { useEffect } from 'react';
import KolamLogo from '@/components/KolamLogo';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex-grow flex flex-col items-center justify-start min-h-screen pt-32 pb-16 px-gutter text-center relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-[#FAF9F6] -z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,0,0,0.03)_1px,_transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10" />

      <div className="text-[#C84B31] mb-8 opacity-80">
        <KolamLogo size={100} strokeWidth={4} />
      </div>

      <p className="font-jakarta text-label-md text-[#C84B31] uppercase tracking-[0.2em] mb-4 font-semibold">
        Something Went Wrong
      </p>

      <h1 className="font-playfair text-[clamp(40px,6vw,72px)] font-bold text-secondary leading-none tracking-tight mb-6">
        A Slight <em className="text-[#C84B31] font-style-italic">Hiccup.</em>
      </h1>

      <p className="font-jakarta text-body-lg text-on-surface-variant font-light max-w-112 mx-auto mb-10 leading-relaxed">
        Our filter coffee might have spilled. We encountered an unexpected error processing your request. Please try again.
      </p>

      <button
        onClick={() => reset()}
        className="inline-flex items-center gap-2 bg-[#F5F0E8] text-secondary font-jakarta text-[13px] font-semibold tracking-[0.12em] uppercase px-8 py-4 rounded-full border border-[rgba(193,201,189,0.6)] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:bg-[#EAE4DB] hover:-translate-y-1 transition-all duration-300"
      >
        <span className="material-symbols-outlined text-[18px]">refresh</span>
        Try Again
      </button>
    </main>
  );
}
