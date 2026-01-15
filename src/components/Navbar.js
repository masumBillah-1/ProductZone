export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-primary rounded-lg text-white">
            <span className="material-symbols-outlined text-2xl">layers</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-primary dark:text-white">ModernApp</h2>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Home</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Items</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Lists</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">About</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-bold text-primary dark:text-white px-4">Sign Up</button>
          <button className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-all shadow-md">Login</button>
        </div>
      </div>
    </header>
  );
}
