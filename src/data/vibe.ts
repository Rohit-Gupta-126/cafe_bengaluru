export type NookItem = {
  title: string;
  desc: string;
  img: string;
  offset: number;
};

export const NOOKS: NookItem[] = [
  {
    title: 'The Brass Bar',
    desc: 'A front-row seat to the rhythmic art of traditional brewing. Brass filters clinking, aromatic steam rising, and the rich scent of dark-roasted chicory blend.',
    img: '/images/vibe_kaapi_pour.png',
    offset: 0
  },
  {
    title: 'The Courtyard',
    desc: 'Dappled sunlight filters through banana leaves onto terracotta tiles. A quiet, open-air sanctuary designed for slow mornings and quiet reflections.',
    img: '/images/vibe_interior.png',
    offset: 40
  },
  {
    title: 'The Gather Box',
    desc: 'Centred around a massive reclaimed timber table under warm amber lights. This is where plates are shared and city conversations naturally intersect.',
    img: '/images/vibe_friends.png',
    offset: 80
  }
];
