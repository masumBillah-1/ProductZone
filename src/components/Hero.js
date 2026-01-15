export default function Hero() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8 z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full w-fit">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            <span className="text-xs font-bold uppercase tracking-wider">New Version 2.0 Live</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter text-slate-900 dark:text-white">
            Elevate Your <span className="text-primary">Digital</span> Experience.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            Discover a seamless way to manage your premium items and services with our professional-grade platform. Built for the modern creator.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              Get Started Free
            </button>
            <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined">play_circle</span>
              Watch Demo
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-2xl group-hover:bg-primary/10 transition-colors"></div>
          <div 
            className="relative aspect-square w-full rounded-[2rem] bg-center bg-cover shadow-2xl overflow-hidden" 
            style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCV88dEB8wP9YYqXx3l-wD5Qy3OeMxc7Wdm8K9f9M4q0xHIce0LilZ4T6es6CKhnD-3xRxX-jFuvz4e45zEg7yI780CJBYESyn31kq8cn0XVrZuSmeFZqjB_CRotwDYNZnRE3sUYucOYlkUSHai1tetA2gKI2PXdClushZ14Y_yTxdQc5ir2YJMgFxo5EF3vd3kIDYZPdSF-HnFmhrkYm_yiZ2UVdhYP7DnxxgR5Se-EmpDkA8ex5v6WWKp-JdU9f46IrzSKFjcwyDI')"}}
          ></div>
          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100 dark:border-slate-700">
            <div className="p-3 bg-accent/20 text-accent rounded-full">
              <span className="material-symbols-outlined">trending_up</span>
            </div>
            <div>
              <p className="text-sm font-bold">Performance Boost</p>
              <p className="text-xs text-slate-500">+124% this month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
