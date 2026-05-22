import type { Metadata } from 'next';
import MenuClient from './MenuClient';

export const metadata: Metadata = {
  title: 'Menu | Cafe Bengaluru',
  description:
    'Explore the full menu of Cafe Bengaluru — authentic South Indian dosas, idlis, and filter kaapi crafted from stone-ground batters, artisanal ghee, and single-estate Chikmagalur beans.',
};

export default function MenuPage() {
  return <MenuClient />;
}
