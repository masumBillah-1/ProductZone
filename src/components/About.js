export default function About() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full order-2 lg:order-1">
            <div className="relative">
              <div className="absolute top-0 right-0 -mr-12 -mt-12 size-64 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="relative bg-slate-200 dark:bg-slate-800 rounded-3xl aspect-[4/3] overflow-hidden shadow-2xl">
                <img 
                  alt="Our diverse team working together" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVtfZXhODVZgLsK22TjNOhWDfTpW2OVSYsPkqW5lRc84wEw_TNwAFFeF0de-bsNLv6phwM06yVVSoS7IhnEOtsrSDBJYh6S7ZIZu1asRzYIlUasoyE-x19GXQXtAILW8_VROgqF6BsnzWyRD1F9moMD3CDaGi0n2ccNIp3rA14Zr3rrrYsE6SbjDsOly5_KCyfC8CROh_SgHZflr2_j1XIu8aTh7Vla5s3Aycj10RQ3ZlTeOdmMa_-7RXmYeDh_qolT-YXlnhNlTQV"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-6 order-1 lg:order-2">
            <h2 className="text-accent font-bold uppercase tracking-widest text-sm">Our Story</h2>
            <h3 className="text-4xl font-bold leading-tight">We believe in the power of professional design.</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Founded in 2024, our mission has been to simplify the digital landscape. We combine high-end aesthetics with technical prowess to create tools that don't just work—they inspire.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                <span className="font-medium">Sustainable and ethical business practices</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                <span className="font-medium">User-centric design philosophy</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                <span className="font-medium">Global support team available 24/7</span>
              </li>
            </ul>
            <button className="flex items-center gap-2 group text-primary font-bold pt-4">
              Learn more about our team
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
