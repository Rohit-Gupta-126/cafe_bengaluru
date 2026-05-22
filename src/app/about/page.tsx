import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'Our Story | Cafe Bengaluru',
  description: 'Discover the heritage of Cafe Bengaluru. Journeying from the traditional coffee houses and stone grinders of Namma Bengaluru to the vibrant modern space in Vanivihar Square, Odisha.',
};

export default function AboutPage() {
  return <AboutClient />;
}
