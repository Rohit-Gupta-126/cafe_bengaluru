import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Cafe Bengaluru",
  description: "Get in touch with Cafe Bengaluru. We'd love to hear from you!",
};

export default function ContactPage() {
  return (
    <main className="grow w-full max-w-400 mx-auto px-gutter md:px-lg lg:px-xl py-16 md:py-24 mt-24 relative z-10 overflow-hidden">
      <div className="fixed top-1/4 -right-20 opacity-10 pointer-events-none z-[-1] blur-[2px]">
        <svg height="200" viewBox="0 0 24 24" width="200" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#2E5C31"></path>
        </svg>
      </div>

      <section className="max-w-container-max mx-auto mb-16 relative z-10">
        <div className="mb-16 max-w-3xl">
          <h1 className="font-display-lg text-headline-lg md:text-display-lg text-primary mb-sm mix-blend-multiply leading-tight">
            Come Say <span className="italic text-secondary">Hello.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant font-light max-w-128">
            Whether it's a catering request, feedback, or just a shared love for filter coffee. We're listening.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          {/* Info Bento */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-white p-8 md:p-12 mask-leaf shadow-sm border border-outline-variant/10 relative overflow-hidden group hover-target">
              <div className="absolute inset-0 bg-tertiary-fixed-dim/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <h3 className="font-headline-md text-headline-md text-primary mb-8 relative z-10">Reach Us</h3>
              
              <div className="space-y-8 relative z-10">
                <div>
                  <h4 className="font-title-lg text-title-lg text-secondary mb-2">Visit</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
                    123 Heritage Lane,<br/>
                    Indiranagar, Bengaluru<br/>
                    India 560038
                  </p>
                </div>
                <div>
                  <h4 className="font-title-lg text-title-lg text-secondary mb-2">Call</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed hover:text-primary transition-colors hover-target cursor-pointer w-max">
                    +91 (80) 4567-8900
                  </p>
                </div>
                <div>
                  <h4 className="font-title-lg text-title-lg text-secondary mb-2">Email</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed hover:text-primary transition-colors hover-target cursor-pointer w-max">
                    hello@cafebengaluru.com
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary p-8 md:p-10 rounded-5xl shadow-sm relative overflow-hidden group hover-target">
              <h3 className="font-headline-md text-headline-md text-white mb-6">Hours</h3>
              <div className="space-y-4 text-white/90">
                <div className="flex justify-between items-center pb-2">
                  <span className="font-body-md text-body-md font-light">Daily</span>
                  <span className="font-body-md text-body-md font-medium">8:30 AM - 11:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Bento */}
          <div className="lg:col-span-8 relative">
            <div className="bg-white p-8 md:p-16 rounded-4xl shadow-sm border border-outline-variant/10 h-full">
              <h3 className="font-headline-md text-headline-md text-primary mb-10">Send a Message</h3>
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2 relative group hover-target">
                    <label className="block font-label-md text-label-md text-secondary uppercase tracking-widest transition-colors group-focus-within:text-primary">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b-2 border-outline/20 pb-3 font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-outline/40"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2 relative group hover-target">
                    <label className="block font-label-md text-label-md text-secondary uppercase tracking-widest transition-colors group-focus-within:text-primary">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b-2 border-outline/20 pb-3 font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-outline/40"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2 relative group hover-target">
                  <label className="block font-label-md text-label-md text-secondary uppercase tracking-widest transition-colors group-focus-within:text-primary">Message</label>
                  <textarea 
                    className="w-full bg-transparent border-b-2 border-outline/20 pb-3 font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-outline/40 resize-none pt-4"
                    placeholder="Tell us what's on your mind..."
                    rows={4}
                  ></textarea>
                </div>

                <div className="pt-4 flex justify-end">
                  <button 
                    type="button"
                    className="inline-flex items-center justify-center px-12 py-5 rounded-full bg-linear-to-r from-primary to-primary-container text-white hover:scale-105 transition-all duration-500 shadow-[0_10px_30px_rgba(22,68,28,0.3)] font-label-md text-label-md uppercase tracking-widest hover-target"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            {/* Decorative pebble overlapping */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-tertiary-fixed-dim/80 mask-pebble z-20 pointer-events-none mix-blend-multiply hidden md:block"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
