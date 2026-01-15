'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';
import ThemeToggle from '@/components/ThemeToggle';
import toast from 'react-hot-toast';

export default function RegisterPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [emailLoading, setEmailLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  useEffect(() => {
    if (!authLoading && user) {
      router.push('/dashboard');
    }
  }, [user, authLoading, router]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      const errorMsg = 'Passwords do not match';
      setError(errorMsg);
      toast.error(errorMsg);
      return;
    }

    if (password.length < 6) {
      const errorMsg = 'Password must be at least 6 characters';
      setError(errorMsg);
      toast.error(errorMsg);
      return;
    }

    setEmailLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: fullName
      });
      toast.success('Account created successfully!');
      router.push('/dashboard');
    } catch (err) {
      const errorMessage = err.message.replace('Firebase: ', '').replace(/\(auth.*\)/, '');
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setEmailLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setError('');
    setGoogleLoading(true);

    try {
      await signInWithPopup(auth, googleProvider);
      toast.success('Successfully signed up with Google!');
      router.push('/dashboard');
    } catch (err) {
      const errorMessage = err.message.replace('Firebase: ', '').replace(/\(auth.*\)/, '');
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setGoogleLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <main className="flex-1 flex items-stretch min-h-screen">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-3 md:p-4 auth-bg-pattern">
          <div className="w-full max-w-[360px] space-y-3">
            {/* Header */}
            <div className="space-y-0.5">
              <h1 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                Create your account
              </h1>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">
                Join our community today.
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-2 bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 rounded-lg">
                <p className="text-[10px] text-rose-600 dark:text-rose-400">{error}</p>
              </div>
            )}

            {/* Social Button - Only Google */}
            <button 
              className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-semibold text-[11px] disabled:opacity-50 disabled:cursor-not-allowed"
              type="button"
              onClick={handleGoogleSignUp}
              disabled={emailLoading || googleLoading}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
              </svg>
              {googleLoading ? 'Signing up...' : 'Sign up with Google'}
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
              </div>
              <div className="relative flex justify-center text-[9px] uppercase">
                <span className="bg-background-light dark:bg-background-dark px-2 text-slate-500 font-bold tracking-widest">
                  or continue with
                </span>
              </div>
            </div>

            {/* Registration Form */}
            <form className="space-y-2.5" onSubmit={handleRegister}>
              <div className="space-y-0.5">
                <label className="text-[10px] font-bold text-slate-700 dark:text-slate-300" htmlFor="fullname">
                  Full Name
                </label>
                <input
                  className="w-full px-2.5 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                  id="fullname"
                  placeholder="John Doe"
                  required
                  type="text"
                  autoComplete="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={emailLoading || googleLoading}
                />
              </div>

              <div className="space-y-0.5">
                <label className="text-[10px] font-bold text-slate-700 dark:text-slate-300" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full px-2.5 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                  id="email"
                  placeholder="name@example.com"
                  required
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={emailLoading || googleLoading}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-2.5">
                <div className="space-y-0.5">
                  <label className="text-[10px] font-bold text-slate-700 dark:text-slate-300" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="w-full px-2.5 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                    id="password"
                    placeholder="••••••••"
                    required
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={emailLoading || googleLoading}
                  />
                </div>
                <div className="space-y-0.5">
                  <label className="text-[10px] font-bold text-slate-700 dark:text-slate-300" htmlFor="confirm-password">
                    Confirm Password
                  </label>
                  <input
                    className="w-full px-2.5 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                    id="confirm-password"
                    placeholder="••••••••"
                    required
                    type="password"
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={emailLoading || googleLoading}
                  />
                </div>
              </div>

              <div className="flex items-start gap-2 py-0.5">
                <input
                  className="mt-0.5 size-3 rounded border-slate-300 text-primary focus:ring-primary/20 cursor-pointer"
                  id="terms"
                  type="checkbox"
                />
                <label className="text-[9px] text-slate-600 dark:text-slate-400 leading-tight" htmlFor="terms">
                  I agree to the{' '}
                  <a className="text-primary font-bold hover:underline" href="#">
                    Terms
                  </a>{' '}
                  and{' '}
                  <a className="text-primary font-bold hover:underline" href="#">
                    Privacy
                  </a>
                  .
                </label>
              </div>

              <button
                className="w-full bg-primary text-white py-2 rounded-lg font-bold text-xs hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={emailLoading || googleLoading}
              >
                {emailLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <p className="text-center text-[10px] text-slate-600 dark:text-slate-400">
              Already have an account?{' '}
              <Link className="text-primary font-bold hover:underline ml-1" href="/login">
                Login
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side - Image with Testimonial */}
        <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/60 z-10"></div>
          <img
            alt="Modern professional workspace"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV88dEB8wP9YYqXx3l-wD5Qy3OeMxc7Wdm8K9f9M4q0xHIce0LilZ4T6es6CKhnD-3xRxX-jFuvz4e45zEg7yI780CJBYESyn31kq8cn0XVrZuSmeFZqjB_CRotwDYNZnRE3sUYucOYlkUSHai1tetA2gKI2PXdClushZ14Y_yTxdQc5ir2YJMgFxo5EF3vd3kIDYZPdSF-HnFmhrkYm_yiZ2UVdhYP7DnxxgR5Se-EmpDkA8ex5v6WWKp-JdU9f46IrzSKFjcwyDI"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-20 text-white">
            <div className="space-y-6 max-w-lg">
              <div className="flex gap-1 text-accent">
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
              </div>
              <blockquote className="text-3xl font-medium leading-tight">
                "The most intuitive platform I've ever used. Joining this community was the best decision for our team's creative workflow."
              </blockquote>
              <div>
                <p className="font-bold text-xl">James Anderson</p>
                <p className="text-white/70 font-medium">Lead Designer at StudioFlow</p>
              </div>
            </div>
          </div>
          <div className="absolute top-1/4 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl z-10"></div>
          <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl z-10"></div>
        </div>
      </main>
    </>
  );
}
