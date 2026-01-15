export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark py-20 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-primary rounded-md text-white">
              <span className="material-symbols-outlined text-xl">layers</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-primary dark:text-white">ProductZone</h2>
          </div>
          <p className="text-slate-500 max-w-sm leading-relaxed">
            Designing the future of digital management with a focus on simplicity, elegance, and performance.
          </p>
          <div className="flex gap-4">
            <a className="size-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all" href="#">
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.599 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a className="size-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all" href="#">
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.106.29 2.6.481.654.254 1.12.556 1.609 1.045.49.49.79.956 1.045 1.61.19.494.419 1.233.481 2.6.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.29 2.106-.481 2.6-.254.654-.556 1.12-1.045 1.609-.49.49-.956.79-1.61 1.045-.494.19-1.233.419-2.6.481-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.106-.29-2.6-.481-.654-.254-1.12-.556-1.609-1.045-.49-.49-.79-.956-1.045-1.61-.19-.494-.419-1.233-.481-2.6-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.29-2.106.481-2.6.254-.654.556-1.12 1.045-1.609.49-.49.956-.79 1.61-1.045.494-.19 1.233-.419 2.6-.481 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.347.062-2.26.279-3.069.593-.834.324-1.541.758-2.245 1.462-.704.704-1.138 1.411-1.462 2.245-.314.808-.531 1.722-.593 3.069-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.062 1.347.279 2.26.593 3.069.324.834.758 1.541 1.462 2.245.704.704 1.411 1.138 2.245 1.462.808.314 1.722.531 3.069.593 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.347-.062 2.26-.279 3.069-.593.834-.324 1.541-.758 2.245-1.462.704-.704 1.138-1.411 1.462-2.245.314-.808.531-1.722.593-3.069.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.062-1.347-.279-2.26-.593-3.069-.324-.834-.758-1.541-1.462-2.245-.704-.704-1.411-1.138-2.245-1.462-.808-.314-1.722-.531-3.069-.593-1.28-.058-1.688-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold">Product</h4>
          <ul className="space-y-3 text-slate-500 text-sm">
            <li><a className="hover:text-primary transition-colors" href="#">Features</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Items Catalog</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Integrations</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold">Company</h4>
          <ul className="space-y-3 text-slate-500 text-sm">
            <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Press Kit</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 mt-20 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-xs uppercase tracking-widest font-bold">
        <p>© 2024 ProductZone. All rights reserved.</p>
        <div className="flex gap-8">
          <a className="hover:text-primary" href="#">Privacy Policy</a>
          <a className="hover:text-primary" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
