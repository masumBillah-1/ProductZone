'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';
import toast from 'react-hot-toast';
import Logo from '@/components/Logo';

export default function Navbar() {
  const { user } = useAuth();
  const router = useRouter();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Get theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log('Toggling theme from', theme, 'to', newTheme);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      console.log('Added dark class to html');
    } else {
      document.documentElement.classList.remove('dark');
      console.log('Removed dark class from html');
    }
    console.log('HTML classes:', document.documentElement.className);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Successfully logged out!');
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to logout. Please try again.');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Logo className="w-10 h-10" textClassName="text-xl" />
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="/#home">Home</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="/items">Items</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="/#about">About</a>
        </nav>
        <div className="flex items-center gap-4">
          {/* Custom Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="h-6 w-6 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
              </svg>
            ) : (
              <svg className="h-6 w-6 fill-current text-slate-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
              </svg>
            )}
          </button>

          {user ? (
            <>
              <Link href="/dashboard" className="hidden sm:block text-sm font-bold text-primary dark:text-white px-4">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="bg-rose-500 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-all shadow-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/register" className="hidden sm:block text-sm font-bold text-primary dark:text-white px-4">
                Sign Up
              </Link>
              <Link href="/login" className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-all shadow-md">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
