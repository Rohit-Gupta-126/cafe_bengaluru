export type TimelineEvent = {
  id: string;
  time: string;
  label: string;
  title: string;
  desc: string;
  image: string;
  sensory: {
    aroma: string;
    sound: string;
    vibe: string;
  };
};

export type CarouselItem = {
  img: string;
  title: string;
  price: string;
  desc: string;
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'morning',
    time: '08:30 AM',
    label: 'The Awakening',
    title: 'Firing the Tawas & Roasting the Beans',
    desc: 'The day begins in silence as the heavy cast-iron tawas are heated. The aroma of dark-roasted Chikmagalur beans spreads through the space, and the first slow drops of thick decoction fill the brass filters.',
    image: '/images/vibe_coffee_beans.png',
    sensory: {
      aroma: 'Roasting coffee beans & warm ghee',
      sound: 'The quiet drip of brass filters',
      vibe: 'Misty, peaceful, and full of anticipation'
    }
  },
  {
    id: 'rush',
    time: '11:00 AM',
    label: 'The Breakfast Rush',
    title: 'The Sizzle of Ghee & Golden Dosas',
    desc: 'The kitchen is alive with activity. Clouds of steam rise from steaming idli pots, and ladlefuls of 14-hour fermented batter hit the tawas with a sharp hiss, crisped to a perfect golden podi crunch.',
    image: '/images/podi_dosa.png',
    sensory: {
      aroma: 'Toasted curry leaves, mustard seeds, and hot sambar',
      sound: 'The rhythmic scraping of spatulas on iron tawas',
      vibe: 'Vibrant, fast-paced, and energetic'
    }
  },
  {
    id: 'kaapi',
    time: '04:30 PM',
    label: 'The Filter Coffee Hour',
    title: 'The Art of the High-Altitude Pull',
    desc: 'As the sun dips, the city gathers. Baristas pull filter coffee back and forth from soaring heights between brass dabarahs and tumblers, cooling the coffee and creating a rich, frothed velvet foam.',
    image: '/images/barista_pour.png',
    sensory: {
      aroma: 'Sweet caramelized milk & frothed coffee foam',
      sound: 'The metallic clatter and ring of brass dabarahs',
      vibe: 'Social, relaxing, and filled with chatter'
    }
  },
  {
    id: 'supper',
    time: '09:00 PM',
    label: 'The Slow Supper',
    title: 'Shared Plates & Warm Amber Lights',
    desc: 'Under the warm amber glow of custom terracotta lights, long conversations linger. Plate-sized Thatte Idlis and warm Saffron Kesari Bath are shared slowly, bringing a comforting end to the day.',
    image: '/images/vibe_friends.png',
    sensory: {
      aroma: 'Cardamom kesari pudding & earthy spices',
      sound: 'Soft clinking of cutlery and gentle laughter',
      vibe: 'Warm, intimate, and wabi-sabi cozy'
    }
  }
];

export const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    img: '/images/podi_dosa.png',
    title: 'Ghee Podi Masala Dosa',
    price: '₹180',
    desc: 'Crispy, golden, loaded with spicy gun powder.'
  },
  {
    img: '/images/thatte_idli.png',
    title: 'Ghee Thatte Idli',
    price: '₹120',
    desc: 'Thick, ultra-soft, drenched in ghee.'
  },
  {
    img: '/images/mini_idlis.png',
    title: 'Mini Ghee Podi Idlis',
    price: '₹140',
    desc: 'Bite-sized perfection tossed in milagai podi.'
  }
];
