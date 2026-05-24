import Link from 'next/link';
import KolamLogo from '@/components/KolamLogo';

export default function NotFound() {
  return (
    <main className="grow flex flex-col items-center justify-start min-h-screen pt-32 pb-16 px-gutter text-center relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-[#FAF9F6] -z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(121,87,65,0.04)_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none -z-10" />

      <div className="text-primary mb-8 animate-pulse">
        <KolamLogo size={120} strokeWidth={4} />
      </div>

      <p className="font-jakarta text-label-md text-tertiary-fixed-dim uppercase tracking-[0.2em] mb-4 font-semibold">
        Page Not Found
      </p>

      <h1 className="font-playfair text-[clamp(48px,8vw,96px)] font-bold text-secondary leading-none tracking-tight mb-6">
        404
      </h1>

      <p className="font-jakarta text-body-lg text-on-surface-variant font-light max-w-112 mx-auto mb-10 leading-relaxed">
        It seems you've wandered off the menu. We couldn't find the page you're looking for, but the aroma of freshly roasted filter coffee is just a click away.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-primary text-on-primary font-jakarta text-[13px] font-semibold tracking-[0.12em] uppercase px-8 py-4 rounded-full shadow-[0_8px_32px_rgba(46,92,49,0.3)] hover:shadow-[0_12px_40px_rgba(46,92,49,0.4)] hover:-translate-y-1 transition-all duration-300"
      >
        <span className="material-symbols-outlined text-[18px]">home</span>
        Back to Home
      </Link>
    </main>
  );
}
