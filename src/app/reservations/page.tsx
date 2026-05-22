import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations - Cafe Bengaluru",
  description: "Reserve a table at Cafe Bengaluru for an unforgettable dining experience.",
};

export default function ReservationsPage() {
  return (
    <main className="flex-grow pt-[140px] pb-xl relative z-10 overflow-hidden">
      <div className="fixed top-2/3 -left-20 opacity-10 pointer-events-none z-[-1] blur-sm">
        <svg height="250" viewBox="0 0 24 24" width="250" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#4A2E1B"></path>
        </svg>
      </div>

      <section className="max-w-container-max mx-auto px-gutter mb-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          
          {/* Headline and Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h1 className="font-display-lg text-headline-lg md:text-display-lg text-primary mb-md mix-blend-multiply leading-tight max-w-[24rem]">
              Reserve your <span className="italic text-secondary">Table.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant font-light max-w-[28rem] leading-relaxed mb-10">
              Join us for an immersive dining experience. Whether it's an intimate morning filter coffee or a bustling weekend breakfast, we have a spot for you.
            </p>

            <div className="bg-surface-container-low p-8 mask-arch-alt border border-outline-variant/10 shadow-sm relative overflow-hidden group hover-target w-full md:w-4/5">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <h3 className="font-headline-md text-headline-md text-secondary mb-4 relative z-10">Large Groups?</h3>
              <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed relative z-10">
                For parties of 8 or more, or private dining experiences, please call us directly so we can curate the perfect setting.
              </p>
              <div className="mt-6 pt-6 border-t border-outline/10">
                <p className="font-body-md text-body-md text-primary font-medium hover-target cursor-pointer w-max">
                  +91 (80) 4567-8900
                </p>
              </div>
            </div>
          </div>

          {/* Booking Form Bento */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -top-12 -right-8 w-24 h-24 bg-primary/80 mask-blob z-20 pointer-events-none mix-blend-multiply hidden md:block"></div>
            
            <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-lg border border-outline-variant/10 relative z-10">
              <form className="space-y-10">
                
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2 relative group hover-target">
                    <label className="block font-label-md text-label-md text-secondary uppercase tracking-widest transition-colors group-focus-within:text-primary">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b-2 border-outline/20 pb-3 font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-outline/40"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2 relative group hover-target">
                    <label className="block font-label-md text-label-md text-secondary uppercase tracking-widest transition-colors group-focus-within:text-primary">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b-2 border-outline/20 pb-3 font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-outline/40"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone & Guests */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2 relative group hover-target">
                    <label className="block font-label-md text-label-md text-secondary uppercase tracking-widest transition-colors group-focus-within:text-primary">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-transparent border-b-2 border-outline/20 pb-3 font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-outline/40"
                      placeholder="+91 XXXXXXXXXX"
                      required
                    />
                  </div>
                  <div className="space-y-2 relative group hover-target">
                    <label className="block font-label-md text-label-md text-secondary uppercase tracking-widest transition-colors group-focus-within:text-primary">Guests</label>
                    <div className="relative">
                      <select 
                        className="w-full bg-transparent border-b-2 border-outline/20 pb-3 font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled className="text-outline/40">Select guests</option>
                        <option value="1" className="text-on-surface">1 Guest</option>
                        <option value="2" className="text-on-surface">2 Guests</option>
                        <option value="3" className="text-on-surface">3 Guests</option>
                        <option value="4" className="text-on-surface">4 Guests</option>
                        <option value="5" className="text-on-surface">5 Guests</option>
                        <option value="6" className="text-on-surface">6 Guests</option>
                        <option value="7+" className="text-on-surface">7+ (Call us)</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pb-3 pointer-events-none text-secondary">
                        <span className="material-symbols-outlined">expand_more</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2 relative group hover-target">
                    <label className="block font-label-md text-label-md text-secondary uppercase tracking-widest transition-colors group-focus-within:text-primary">Date</label>
                    <input 
                      type="date" 
                      className="w-full bg-transparent border-b-2 border-outline/20 pb-3 font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-primary transition-colors cursor-pointer"
                      required
                    />
                  </div>
                  <div className="space-y-2 relative group hover-target">
                    <label className="block font-label-md text-label-md text-secondary uppercase tracking-widest transition-colors group-focus-within:text-primary">Time</label>
                    <input 
                      type="time" 
                      className="w-full bg-transparent border-b-2 border-outline/20 pb-3 font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-primary transition-colors cursor-pointer"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2 relative group hover-target">
                  <label className="block font-label-md text-label-md text-secondary uppercase tracking-widest transition-colors group-focus-within:text-primary">Special Requests (Optional)</label>
                  <textarea 
                    className="w-full bg-transparent border-b-2 border-outline/20 pb-3 font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-outline/40 resize-none pt-2"
                    placeholder="Dietary preferences, accessibility needs..."
                    rows={2}
                  ></textarea>
                </div>

                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                  <p className="font-body-md text-body-md text-outline font-light w-full md:w-1/2">
                    We'll confirm your reservation via email or phone within 2 hours.
                  </p>
                  <button 
                    type="button"
                    className="inline-flex items-center justify-center px-12 py-5 rounded-full bg-linear-to-r from-primary to-primary-container text-white hover:scale-105 transition-all duration-500 shadow-[0_10px_30px_rgba(22,68,28,0.3)] font-label-md text-label-md uppercase tracking-widest hover-target w-full md:w-auto shrink-0"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
