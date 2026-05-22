import Link from 'next/link';
import KolamLogo from '@/components/KolamLogo';

export default function Footer() {
  return (
    <footer className="bg-surface-container-high border-t border-secondary/10 mt-auto">
      <div className="max-w-container-max mx-auto px-lg py-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <KolamLogo size={56} className="text-secondary" />
          <span className="font-playfair font-title-large text-secondary group-hover:text-tertiary transition-colors">
            Cafe Bengaluru
          </span>
        </Link>
        <div className="flex gap-6 text-on-surface-variant font-label-md uppercase tracking-widest text-sm text-center md:text-left">
          <Link href="/about" className="hover:text-secondary transition-colors">Our Story</Link>
          <Link href="/menu" className="hover:text-secondary transition-colors">Menu</Link>
          <Link href="/visit" className="hover:text-secondary transition-colors">Visit Us</Link>
        </div>
        <div className="text-on-surface-variant font-body-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Cafe Bengaluru.</p>
          <p>Authentic South Indian Heritage.</p>
        </div>
      </div>
    </footer>
  );
}