import type { Metadata } from 'next';
import VibeClient from './VibeClient';

export const metadata: Metadata = {
  title: 'The Vibe | Cafe Bengaluru',
  description: 'Experience the unique sensory heritage of Cafe Bengaluru. Dappled sunlight, aromatic steam, banana leaves, and lingering conversations in a premium aesthetic space.',
};

export default function VibePage() {
  return <VibeClient />;
}
