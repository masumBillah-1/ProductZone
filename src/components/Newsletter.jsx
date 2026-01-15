export default function Newsletter() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto bg-primary rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/30 opacity-50"></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Ready to transform your workflow?</h2>
          <p className="text-primary-100/80 text-lg">
            Join 5,000+ subscribers and get the latest updates, tips, and exclusive offers delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              className="flex-1 rounded-xl px-6 py-4 text-slate-900 border-none focus:ring-4 focus:ring-accent/50 outline-none" 
              placeholder="Enter your email" 
              type="email"
            />
            <button className="bg-accent text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform whitespace-nowrap">
              Subscribe Now
            </button>
          </form>
          <p className="text-xs text-white/60">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  );
}
