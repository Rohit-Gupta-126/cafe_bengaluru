export type JourneyChapter = {
  num: string;
  heading: string;
  body: string;
  img: string;
  alt: string;
};

export const JOURNEY_CHAPTERS: JourneyChapter[] = [
  {
    num: '01',
    heading: 'We Packed the Stone Grinders.',
    body: 'Every grain of rice. Every lentil measured by memory, not measurement. The stone grinders that our grandmothers used — carried across state lines because the batter they produced simply could not be replicated any other way.',
    img: '/images/story_journey_path.png',
    alt: 'Stone grinder heritage',
  },
  {
    num: '02',
    heading: 'We Sourced the Exact Beans.',
    body: 'Single-estate Arabica from Chikmagalur, dark-roasted and blended with 20% chicory. The decoction must be heavy-bodied, intensely aromatic, and capable of standing tall even when diluted with frothed milk.',
    img: '/images/filter_coffee_vibe.png',
    alt: 'Chikmagalur filter coffee',
  },
  {
    num: '03',
    heading: 'We Opened the Doors.',
    body: 'Vanivihar Square, Saheed Nagar. A space designed with earthy tones, tactile textures, and the low hum of conversation — a small corner of Bengaluru planted firmly in Bhubaneswar.',
    img: '/images/cafe_interior.png',
    alt: 'Cafe Bengaluru interior',
  },
];
