export type MenuItem = {
  id: string;
  category: 'all' | 'dosas' | 'idlis' | 'kaapi';
  title: string;
  subtitle: string;
  price: number;
  description: string;
  image: string;
  badge?: string;
  badgeColor?: string;
};

export type PairingItem = {
  id: string;
  tabLabel: string;
  emoji: string;
  title: string;
  subtitle: string;
  desc: string;
  tiffinName: string;
  tiffinDetails: string;
  brewName: string;
  brewDetails: string;
  dishImg: string;
  coffeeImg: string;
  flavors: {
    spicy: number;
    sweet: number;
    savory: number;
    bitter: number;
  };
};

export const MENU: MenuItem[] = [
  // 1. Signature Dosa (Badge)
  {
    id: 'ghee-podi-masala-dosa',
    category: 'dosas',
    title: 'Ghee Podi Masala Dosa',
    subtitle: 'Stone-ground batter · Gunpowder spice',
    price: 180,
    description:
      'Fermented stone-ground batter crisped on a cast-iron tawa, filled with spiced mashed potato, and generously coated in milagai podi with artisanal ghee.',
    image: '/images/editorial_dosa.png',
    badge: 'Signature',
    badgeColor: '#F4B41A',
  },
  // 2. Bestseller Idli (Badge)
  {
    id: 'ghee-thatte-idli',
    category: 'idlis',
    title: 'Ghee Thatte Idli',
    subtitle: 'Plate-sized · 14-hour ferment',
    price: 120,
    description:
      'Our version of the iconic Davangere idli — thick, ultra-soft, and drenched in pure artisanal ghee the moment it leaves the steamer.',
    image: '/images/editorial_thatte_idli.png',
    badge: 'Bestseller',
    badgeColor: '#16441c',
  },
  // 3. Classic Filter Coffee (Badge)
  {
    id: 'filter-kaapi',
    category: 'kaapi',
    title: 'Traditional Filter Coffee',
    subtitle: 'Chikmagalur · 20% chicory blend',
    price: 90,
    description:
      'Single-estate Arabica from Chikmagalur dark-roasted and blended with 20% chicory. Decocted slowly, served in a traditional brass dabara-tumbler.',
    image: '/images/editorial_filter_kaapi.png',
    badge: 'Classic',
    badgeColor: '#795741',
  },
  // 4. Local Favourite Dosa (Badge)
  {
    id: 'set-dosa',
    category: 'dosas',
    title: 'Set Dosa',
    subtitle: 'Soft & fluffy · Served in threes',
    price: 130,
    description:
      'Three small, pillowy dosas served with coconut chutney and a thick, aromatic sagu. The Bengaluru breakfast staple, done the traditional way.',
    image: '/images/editorial_set_dosa.png',
    badge: 'Local Favourite',
    badgeColor: '#16441c',
  },
  // 5. Bengaluru Born Idli (Badge)
  {
    id: 'rava-idli',
    category: 'idlis',
    title: 'Rava Idli',
    subtitle: 'Semolina · Mustard seeds · Roasted cashew',
    price: 120,
    description:
      'A Bengaluru invention born out of necessity. Semolina idlis seasoned with mustard seeds, curry leaves, and topped with roasted cashews. Fluffy and satisfying.',
    image: '/images/editorial_rava_idli.png',
    badge: 'Bengaluru Born',
    badgeColor: '#16441c',
  },
  // 6. House Favourite Coffee (Badge)
  {
    id: 'cafe-bengaluru-special',
    category: 'kaapi',
    title: 'Cafe Bengaluru Special',
    subtitle: 'Double decoction · Extra strong · Full milk',
    price: 110,
    description:
      'Double-strength decoction made with an extra-dark roast, mixed with full-fat milk pulled to a frothy tumbler. Our boldest, most uncompromising brew.',
    image: '/images/barista_pour.png',
    badge: 'House Favourite',
    badgeColor: '#16441c',
  },
  // 7. Regional Special Dosa (Badge)
  {
    id: 'neer-dosa',
    category: 'dosas',
    title: 'Neer Dosa',
    subtitle: 'Coastal Karnataka · Rice batter · Soft',
    price: 120,
    description:
      'Delicate, lace-thin crepes from the coastal Karnataka tradition. Made from freshly ground raw rice, served soft and folded with coconut chutney.',
    image: '/images/editorial_neer_dosa.png',
    badge: 'Regional Special',
    badgeColor: '#795741',
  },
  // 8. Chef's Special Idli (Badge)
  {
    id: 'kanchipuram-idli',
    category: 'idlis',
    title: 'Kanchipuram Idli',
    subtitle: 'Temple-style · Pepper & cumin',
    price: 130,
    description:
      'Temple-style idli from Tamil Nadu — batter spiced with black pepper, cumin, and ginger, steamed in banana leaf cups for extra fragrance.',
    image: '/images/mini_idlis.png',
    badge: "Chef's Special",
    badgeColor: '#F4B41A',
  },
  // 9. Seasonal Coffee (Badge)
  {
    id: 'cold-brew-kaapi',
    category: 'kaapi',
    title: 'Cold Brew Coffee',
    subtitle: 'Chikmagalur · 18-hour steep · Chilled',
    price: 120,
    description:
      'Our single-estate Arabica cold-steeped for 18 hours. Smooth and rich with notes of dark chocolate and subtle fruit — served over hand-cracked ice.',
    image: '/images/editorial_cold_brew.png',
    badge: 'Seasonal',
    badgeColor: '#795741',
  },
  // 10. Plain Ghee Dosa
  {
    id: 'plain-ghee-dosa',
    category: 'dosas',
    title: 'Plain Ghee Dosa',
    subtitle: 'Classic · Thin & crisp',
    price: 100,
    description:
      'The original. Stone-ground batter spread paper-thin on a cast-iron tawa and finished with a generous ladle of artisanal ghee. Simple, perfect, timeless.',
    image: '/images/podi_dosa.png',
  },
  // 11. Classic Steamed Idlis
  {
    id: 'classic-steamed-idlis',
    category: 'idlis',
    title: 'Classic Steamed Idlis',
    subtitle: 'Two pieces · Sambar & 3 chutneys',
    price: 100,
    description:
      'Pillowy idlis from a 14-hour fermented batter, steamed to perfection. Served with piping hot sambar and a trio of coconut, tomato, and mint chutneys.',
    image: '/images/thatte_idli.png',
  },
  // 12. Crispy Rava Dosa
  {
    id: 'crispy-rava-dosa',
    category: 'dosas',
    title: 'Crispy Rava Dosa',
    subtitle: 'Semolina · Green chilli · Cumin',
    price: 150,
    description:
      'Lacy, net-textured rava dosa made from fine semolina batter with onions, cumin, green chillies, and curry leaves. Crisp to the very last bite.',
    image: '/images/editorial_rava_dosa.png',
  },
  // 13. Mini Ghee Podi Idlis
  {
    id: 'mini-podi-idlis',
    category: 'idlis',
    title: 'Mini Ghee Podi Idlis',
    subtitle: 'Bite-sized · Milagai podi toss',
    price: 140,
    description:
      'Bite-sized idlis tossed generously in milagai podi and ghee. Perfect for sharing — or not.',
    image: '/images/editorial_mini_idlis.png',
  },
  // 14. Onion Uthappam
  {
    id: 'onion-uthappam',
    category: 'dosas',
    title: 'Onion Uthappam',
    subtitle: 'Thick · Caramelised onion topping',
    price: 140,
    description:
      'A thick, soft rice-batter pancake topped with generous amounts of finely chopped onion, tomato, and green chillies, cooked slowly until golden.',
    image: '/images/editorial_uthappam.png',
  },
  // 15. Mysore Masala Dosa
  {
    id: 'mysore-masala-dosa',
    category: 'dosas',
    title: 'Mysore Masala Dosa',
    subtitle: 'Red chutney inside · Spiced potato filling',
    price: 160,
    description:
      'Spread with house-made spicy red coconut chutney before crisping, filled with well-seasoned aloo masala. A Mysore classic reimagined.',
    image: '/images/plated_dish.png',
  },
  // 16. Idli Vada Combo
  {
    id: 'idli-vada-combo',
    category: 'idlis',
    title: 'Idli Vada Combo',
    subtitle: 'Two idlis · One medu vada · Full sambar',
    price: 150,
    description:
      'The quintessential South Indian breakfast — two cloud-soft idlis paired with a crispy medu vada, drenched in house-made tamarind sambar.',
    image: '/images/authentic_taste.png',
  },
];

export const CATEGORIES: { key: 'all' | 'dosas' | 'idlis' | 'kaapi'; label: string }[] = [
  { key: 'all',   label: 'All' },
  { key: 'dosas', label: 'Dosas' },
  { key: 'idlis', label: 'Idlis' },
  { key: 'kaapi', label: 'Filter Coffee' },
];

export const PAIRINGS: PairingItem[] = [
  {
    id: 'spicy',
    tabLabel: 'Spicy & Intense',
    emoji: '🌶️',
    title: 'The Fiery Morning Spark',
    subtitle: 'Ghee Podi Masala Dosa + Double Filter Coffee',
    desc: 'The intense, smoky spice of stone-ground gunpowder podi is coated in golden caramelized ghee on a crispy crepe. Pairing this with a heavy-bodied filter coffee cuts through the heat, cleansing your palate with sweet, frothy cocoa notes.',
    tiffinName: 'Ghee Podi Masala Dosa',
    tiffinDetails: 'Crispy fermented rice-lentil crepe, brushed with pure Salem ghee, dusted with spicy chana and urad dal podi, and stuffed with a spiced potato mash.',
    brewName: 'Double Filter Coffee',
    brewDetails: 'A high-ratio extraction of Chikmagalur Arabica and Robusta peaberry beans blended with 20% chicory, frothed with boiling whole milk from heights.',
    dishImg: '/images/podi_dosa.png',
    coffeeImg: '/images/vibe_kaapi_pour.png',
    flavors: { spicy: 90, sweet: 30, savory: 80, bitter: 70 }
  },
  {
    id: 'soothing',
    tabLabel: 'Soft & Soothing',
    emoji: '☁️',
    title: 'The Comforting Hug',
    subtitle: 'Ghee Thatte Idli + Single Estate Brew',
    desc: 'A plate-sized, pillowy-soft steamed rice cake drenched in fresh, aromatic melted ghee. Paired with our smooth, single-estate brew, it offers a gentle, velvety texture that warms the senses and starts the day with pure comfort.',
    tiffinName: 'Ghee Thatte Idli',
    tiffinDetails: 'Thick, spongy plate idli steamed in traditional brass plates, served warm with signature coconut chutney and spicy tomato-lentil sambar.',
    brewName: 'Single Estate Filter Coffee',
    brewDetails: 'A smoother, medium-roasted peaberry decoction focusing on delicate floral and nutty notes, served with lightly frothed organic milk.',
    dishImg: '/images/thatte_idli.png',
    coffeeImg: '/images/barista_pour.png',
    flavors: { spicy: 10, sweet: 40, savory: 70, bitter: 40 }
  },
  {
    id: 'recharging',
    tabLabel: 'Quick & Recharging',
    emoji: '⚡',
    title: 'The Midday Recharge',
    subtitle: 'Mini Ghee Podi Idlis + Classic Coffee',
    desc: 'Fourteen bite-sized button idlis tossed in hot ghee and podi powder. This savory, spice-packed snack is paired with a strong, traditional filter coffee to provide an immediate burst of energy and rich flavor.',
    tiffinName: 'Mini Ghee Podi Idlis',
    tiffinDetails: 'Mini steamed idli buttons tossed on a hot clarified butter, curry leaves, and a generous coating of gun powder spice.',
    brewName: 'Namma Filter Coffee',
    brewDetails: 'Our standard robust blend of dark-roasted estate beans, offering a heavy-bodied cup with a lingering chocolate finish.',
    dishImg: '/images/mini_idlis.png',
    coffeeImg: '/images/filter_coffee_vibe.png',
    flavors: { spicy: 75, sweet: 20, savory: 90, bitter: 65 }
  },
  {
    id: 'indulgent',
    tabLabel: 'Sweet & Indulgent',
    emoji: '🍯',
    title: 'The Golden Treat',
    subtitle: 'Saffron Kesari Bath + Frothy Filter Coffee',
    desc: 'Indulge in a melt-in-your-mouth semolina pudding loaded with pure ghee, organic saffron, and toasted cashews. Paired with a piping-hot, bitter-sweet frothy coffee, the bitter coffee notes provide a perfect counterpoint to the sweet saffron cream.',
    tiffinName: 'Saffron Kesari Bath',
    tiffinDetails: 'Roasted fine semolina simmered with sugar syrup, organic Kashmiri saffron, pure ghee, and topped with toasted cashews and golden raisins.',
    brewName: 'Traditional Frothy Coffee',
    brewDetails: 'Freshly pressed brass-filter decoction, frothed high into a bubbling velvet layer in a brass tumbler, with just a hint of raw sugar.',
    dishImg: '/images/plated_dish.png',
    coffeeImg: '/images/hero_coffee.png',
    flavors: { spicy: 0, sweet: 95, savory: 30, bitter: 60 }
  }
];
