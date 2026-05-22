'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type MenuItem = {
  id: string;
  title: string;
  category: 'signatures' | 'dosas' | 'idlis' | 'kaapi';
  price: number;
  description: string;
  image: string;
  badge?: string;
};

const menuItems: MenuItem[] = [
  {
    id: 'dosa-sig',
    title: 'Ghee Podi Masala Dosa',
    category: 'dosas',
    price: 180,
    description: 'Crispy, golden, loaded with spicy gun powder.',
    image: '/images/editorial_dosa.png',
    badge: 'Signature',
  },
  {
    id: 'idli-thatte',
    title: 'Ghee Thatte Idli',
    category: 'idlis',
    price: 120,
    description: 'Thick, ultra-soft, drenched in ghee.',
    image: '/images/editorial_thatte_idli.png',
    badge: 'Bestseller',
  },
  {
    id: 'idli-mini',
    title: 'Mini Podi Idlis',
    category: 'idlis',
    price: 140,
    description: 'Bite-sized perfection.',
    image: '/images/editorial_mini_idlis.png',
  },
  {
    id: 'kaapi-trad',
    title: 'Traditional Filter Kaapi',
    category: 'kaapi',
    price: 90,
    description: 'Authentic brew served in a brass dabara.',
    image: '/images/editorial_filter_kaapi.png',
    badge: 'Hot Beverage',
  }
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<'signatures' | 'dosas' | 'idlis' | 'kaapi'>('signatures');
  
  const filteredItems = menuItems.filter(item => {
    if (activeCategory === 'signatures') return true;
    return item.category === activeCategory;
  });

  return (
    <>

      <div className="fixed top-1/4 -left-10 opacity-10 pointer-events-none floating-element z-[-1] blur-sm">
        <svg height="150" viewBox="0 0 24 24" width="150" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#4A2E1B"></path>
        </svg>
      </div>
      <div className="fixed top-2/3 -right-20 opacity-10 pointer-events-none floating-element z-[-1] blur-[2px]" style={{ animationDelay: '-2s' }}>
        <svg height="200" viewBox="0 0 24 24" width="200" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#2E5C31"></path>
        </svg>
      </div>

      <main className="grow pt-32 pb-xl relative z-10">
        <section className="max-w-container-max mx-auto px-lg mb-xl flex flex-col md:flex-row justify-between items-start md:items-end gap-lg relative">
          <div>
            <h1 className="font-display-lg text-headline-lg md:text-display-lg text-secondary mb-sm max-w-xl leading-tight">
              Sensory Heritage, Plated.
            </h1>
            <p className="text-on-surface-variant/80 font-body-lg text-body-lg max-w-md font-light">
              Discover the authentic flavors of South India, crafted with sensory heritage and premium ingredients.
            </p>
          </div>
          <div className="md:sticky md:top-24 z-40 bg-surface/80 backdrop-blur-md border border-outline-variant/30 p-1.5 rounded-full shadow-lg self-start md:self-end mt-sm md:mt-0">
            <div className="flex gap-1">
              {(['signatures', 'dosas', 'idlis', 'kaapi'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full font-label-md text-label-md transition-all duration-300 capitalize hover-target ${
                    activeCategory === cat
                      ? 'bg-secondary text-white shadow-sm'
                      : 'text-on-surface-variant hover:bg-surface-container/50'
                  }`}
                >
                  {cat === 'kaapi' ? 'Filter Kaapi' : cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Bento Box Menu Grid */}
        <section className="max-w-container-max mx-auto px-lg min-h-125">
          <div className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-12 relative w-full items-start">
            
            {/* Ghee Podi Masala Dosa */}
            {filteredItems.some(i => i.id === 'dosa-sig') && (
              <motion.div 
                whileHover={{ backgroundColor: "rgba(244, 180, 26, 0.08)", borderColor: "rgba(244, 180, 26, 0.6)", y: -10, boxShadow: "0 25px 50px rgba(244,180,26,0.2)" }}
                className="w-full md:w-[60%] lg:w-[55%] bg-white rounded-[2.5rem] card-shadow overflow-hidden group relative flex flex-col min-h-[450px] cursor-pointer transition-all duration-500 border border-secondary-container/10 z-10"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    alt="Ghee Podi Masala Dosa"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    src="/images/editorial_dosa.png"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                <div className="mt-auto relative z-10 p-8 flex flex-col md:flex-row justify-between items-start md:items-end w-full">
                  <div className="mb-4 md:mb-0">
                    <span className="inline-block px-4 py-1.5 bg-tertiary-fixed text-on-tertiary-fixed text-[11px] font-bold tracking-widest rounded-full uppercase mb-3 shadow-md">
                      Signature
                    </span>
                    <h3 className="font-headline-md text-display-sm text-white leading-tight mb-2">
                      Ghee Podi Masala Dosa
                    </h3>
                    <p className="text-white/80 font-body-md text-body-md max-w-sm font-light">
                      Crispy, golden, loaded with spicy gun powder.
                    </p>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <div className="font-title-lg text-[32px] text-white font-semibold mb-3">₹180</div>
                    <button className="add-btn bg-[#F4B41A] text-primary px-6 py-3 rounded-full font-label-md text-label-md flex items-center gap-2 shadow-lg hover:bg-white transition-all duration-300 font-bold">
                      Add to Order <span className="material-symbols-outlined text-[18px]">add</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Ghee Thatte Idli - Overlapping */}
            {filteredItems.some(i => i.id === 'idli-thatte') && (
              <motion.div 
                whileHover={{ backgroundColor: "rgba(244, 180, 26, 0.08)", borderColor: "rgba(244, 180, 26, 0.6)", y: -10, boxShadow: "0 25px 50px rgba(244,180,26,0.2)" }}
                className="w-full md:w-[45%] lg:w-[35%] md:-ml-[10%] lg:-ml-[5%] md:mt-16 bg-white rounded-[2.5rem] card-shadow overflow-hidden group relative flex flex-col min-h-[500px] cursor-pointer transition-all duration-500 border border-secondary-container/10 z-20"
              >
                <div className="h-[55%] overflow-hidden relative m-4 rounded-[2rem]">
                  <img
                    alt="Ghee Thatte Idli"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    src="/images/editorial_thatte_idli.png"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full font-title-lg text-title-lg text-secondary shadow-md font-bold">
                    ₹120
                  </div>
                </div>
                <div className="p-8 pt-4 flex flex-col grow bg-transparent relative z-10">
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[11px] font-bold tracking-widest rounded-full uppercase self-start mb-3">
                    Bestseller
                  </span>
                  <h3 className="font-headline-md text-title-lg md:text-[28px] text-primary mb-2 leading-tight">
                    Ghee Thatte Idli
                  </h3>
                  <p className="text-on-surface-variant/80 font-body-md text-body-md mb-6 grow font-light leading-relaxed">
                    Thick, ultra-soft, drenched in aromatic ghee.
                  </p>
                  <button className="w-full bg-primary text-white py-3.5 rounded-full font-label-md text-label-md flex justify-center items-center gap-2 shadow-md hover:bg-[#F4B41A] hover:text-primary transition-colors duration-300 group-hover:bg-[#F4B41A] group-hover:text-primary">
                    Add to Order
                  </button>
                </div>
              </motion.div>
            )}

            {/* Traditional Filter Kaapi */}
            {filteredItems.some(i => i.id === 'kaapi-trad') && (
              <motion.div 
                whileHover={{ backgroundColor: "rgba(244, 180, 26, 0.08)", borderColor: "rgba(244, 180, 26, 0.6)", y: -10, boxShadow: "0 25px 50px rgba(244,180,26,0.2)" }}
                className="w-full md:w-[65%] lg:w-[45%] bg-surface-container-high/40 rounded-[3rem] overflow-visible group flex items-center p-8 relative mt-16 md:-mt-12 lg:-mt-24 cursor-pointer transition-all duration-500 border border-secondary-container/10 z-30 ml-auto md:mr-12"
              >
                <div className="w-[45%] relative h-full flex items-center justify-center">
                  <img
                    alt="Traditional Filter Kaapi"
                    className="w-[140%] max-w-none h-auto object-contain absolute -left-12 -top-16 z-20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-1000 drop-shadow-2xl rounded-[3rem]"
                    src="/images/editorial_filter_kaapi.png"
                  />
                </div>
                <div className="w-[55%] pl-12 flex flex-col justify-center relative z-10 py-4">
                  <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-[11px] font-bold tracking-widest rounded-full uppercase mb-3 self-start">
                    Hot Beverage
                  </span>
                  <h3 className="font-headline-md text-title-lg md:text-[28px] text-primary leading-tight mb-2">
                    Traditional<br/>Filter Kaapi
                  </h3>
                  <p className="text-on-surface-variant/80 font-body-md text-body-md mt-1 mb-4 font-light">
                    Authentic brew served in a brass dabara.
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <div className="font-title-lg text-[28px] text-secondary font-bold">₹90</div>
                    <button className="bg-primary text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-[#F4B41A] hover:text-primary transition-colors duration-300 group-hover:bg-[#F4B41A] group-hover:text-primary">
                      <span className="material-symbols-outlined text-[24px]">add</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Mini Podi Idlis - Overlapping up */}
            {filteredItems.some(i => i.id === 'idli-mini') && (
              <motion.div 
                whileHover={{ backgroundColor: "rgba(244, 180, 26, 0.08)", borderColor: "rgba(244, 180, 26, 0.6)", y: -10, boxShadow: "0 25px 50px rgba(244,180,26,0.2)" }}
                className="w-full md:w-[50%] lg:w-[40%] md:-mt-32 lg:-mt-16 md:-ml-8 bg-white rounded-[2.5rem] card-shadow overflow-hidden group flex flex-col md:flex-row h-full min-h-[250px] cursor-pointer transition-all duration-500 border border-secondary-container/10 relative z-40"
              >
                <div className="w-full md:w-[45%] overflow-hidden relative h-48 md:h-full">
                  <img
                    alt="Mini Ghee Podi Idlis"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    src="/images/editorial_mini_idlis.png"
                  />
                </div>
                <div className="w-full md:w-[55%] p-8 flex flex-col justify-center bg-transparent relative h-full">
                  <div className="absolute top-6 right-6 font-title-lg text-title-lg text-secondary font-bold">
                    ₹140
                  </div>
                  <h3 className="font-headline-md text-title-lg text-primary mb-2 mt-2">
                    Mini Podi Idlis
                  </h3>
                  <p className="text-on-surface-variant/80 font-body-md text-body-md font-light leading-relaxed mb-6">
                    Bite-sized perfection.
                  </p>
                  <div className="mt-auto">
                    <button className="bg-primary text-white p-3 rounded-full shadow-md flex items-center justify-center hover:bg-[#F4B41A] hover:text-primary transition-colors duration-300 group-hover:bg-[#F4B41A] group-hover:text-primary">
                      <span className="material-symbols-outlined text-[20px]">add</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

          </div>
        </section>

        {/* Decorative Divider */}
        <div className="max-w-container-max mx-auto px-lg mt-xl pt-xl flex items-center justify-center opacity-40">
          <div className="h-px w-24 bg-secondary/30"></div>
          <span className="material-symbols-outlined text-secondary mx-4 text-3xl">eco</span>
          <div className="h-px w-24 bg-secondary/30"></div>
        </div>

      </main>
    </>
  );
}
