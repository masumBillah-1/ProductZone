import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function LoginPage() {
  return (
      <main className="flex w-full min-h-screen relative">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Left Side - Brand Section */}
      <section className="hidden lg:flex w-1/2 relative bg-primary items-center justify-center p-6 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 size-[400px] bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 size-[400px] bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-md text-white">
          <Link href="/" className="flex items-center gap-2 mb-6 w-fit hover:opacity-80 transition-opacity">
            <div className="p-1.5 bg-white/10 backdrop-blur-md rounded-lg text-white">
              <span className="material-symbols-outlined text-2xl">layers</span>
            </div>
            <h2 className="text-lg font-bold tracking-tight">ProductZone</h2>
          </Link>
          
          <div className="space-y-4">
            <h1 className="text-3xl font-black leading-tight">
              Empowering your digital creative workflow.
            </h1>
            <p className="text-sm text-primary-100/70 leading-relaxed">
              Join over 10,000+ professionals who have simplified their workflows.
            </p>
            
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-1 text-accent mb-2">
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
              </div>
              <p className="text-sm italic text-white/90 mb-3">
                "The interface is so clean and inviting. It has transformed how our team works."
              </p>
              <div className="flex items-center gap-3">
                <div 
                  className="size-10 rounded-full border-2 border-white/20" 
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7OuX20qJNit9LDZAeeAVn8BzM5_01Gkoyd72xiYGeW9p26gaCrUDkQ6aNrY6ofbEozvlaOanLQtq_eMUjne4kuGxn_1R8NHdANyQebM8-QIstANWr6vmtStW_UCY65ajJjIaqap-ZDeWaU_R5H_zTl0dcCL0pPyGKS3v09kBznF5XgHsSrQGsiHUigAxXRJisEyJ5NXTs0U55kRJpg1OWuOXcjMAon747IY06t0ORNgwHlx3HAnFQy04sRsgpJB-frTx0ZDbe0C6g')", backgroundSize: 'cover'}}
                ></div>
                <div>
                  <p className="font-bold text-sm">Sarah Jenkins</p>
                  <p className="text-[10px] text-white/50 uppercase font-bold tracking-widest">Product Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          className="absolute inset-0 opacity-10 bg-center bg-cover mix-blend-overlay" 
          style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCV88dEB8wP9YYqXx3l-wD5Qy3OeMxc7Wdm8K9f9M4q0xHIce0LilZ4T6es6CKhnD-3xRxX-jFuvz4e45zEg7yI780CJBYESyn31kq8cn0XVrZuSmeFZqjB_CRotwDYNZnRE3sUYucOYlkUSHai1tetA2gKI2PXdClushZ14Y_yTxdQc5ir2YJMgFxo5EF3vd3kIDYZPdSF-HnFmhrkYm_yiZ2UVdhYP7DnxxgR5Se-EmpDkA8ex5v6WWKp-JdU9f46IrzSKFjcwyDI')"}}
        ></div>
      </section>

      {/* Right Side - Login Form */}
      <section className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-6 bg-background-light dark:bg-background-dark">
        <div className="w-full max-w-[380px]">
          {/* Mobile Logo */}
          <Link href="/" className="lg:hidden flex items-center gap-2 mb-6 justify-center hover:opacity-80 transition-opacity">
            <div className="p-1.5 bg-primary rounded-lg text-white">
              <span className="material-symbols-outlined text-xl">layers</span>
            </div>
            <h2 className="text-lg font-bold tracking-tight text-primary dark:text-white">ProductZone</h2>
          </Link>

          {/* Header */}
          <div className="mb-6 text-center lg:text-left">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-1">Welcome Back</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Please sign in to your account.</p>
          </div>

          {/* Login Form */}
          <form className="space-y-4">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300" htmlFor="email">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined text-lg">mail</span>
                </div>
                <input
                  className="w-full pl-10 pr-3 py-2.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  required
                  type="email"
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300" htmlFor="password">
                  Password
                </label>
                <a className="text-[10px] font-bold text-primary hover:underline transition-all" href="#">
                  Forgot Password?
                </a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined text-lg">lock</span>
                </div>
                <input
                  className="w-full pl-10 pr-3 py-2.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  type="password"
                  autoComplete="current-password"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                className="w-3.5 h-3.5 rounded border-slate-300 text-primary focus:ring-primary"
                id="remember"
                type="checkbox"
              />
              <label className="text-xs text-slate-600 dark:text-slate-400" htmlFor="remember">
                Keep me signed in
              </label>
            </div>

            {/* Submit Button */}
            <button
              className="w-full bg-primary text-white py-2.5 rounded-lg font-bold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-md active:scale-[0.98]"
              type="submit"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase">
                <span className="bg-background-light dark:bg-background-dark px-3 text-slate-500 font-bold tracking-widest">
                  Or sign in with
                </span>
              </div>
            </div>

            {/* Social Login Button */}
            <button
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-semibold text-xs"
              type="button"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
              </svg>
              Sign in with Google
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-xs text-slate-500">
              Don't have an account?{' '}
              <Link className="text-primary font-bold hover:underline ml-1 transition-all" href="/register">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
