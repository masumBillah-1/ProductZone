'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '@/components/Logo';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background-light via-slate-50 to-primary/5 dark:from-background-dark dark:via-slate-900 dark:to-primary/10 flex items-center justify-center p-4">
      <div className="max-w-xl w-full">
        {/* Logo */}
        <motion.div 
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/">
            <Logo className="w-12 h-12" textClassName="text-lg" />
          </Link>
        </motion.div>

        {/* Error Content */}
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* 404 Number */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="text-[120px] md:text-[140px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary to-accent">
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
              Page Not Found
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
              The page you're looking for doesn't exist.
            </p>
          </motion.div>

          {/* Illustration */}
          <motion.div 
            className="flex justify-center py-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="relative">
              <div className="size-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-[60px] text-primary/40">
                  search_off
                </span>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 justify-center pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link href="/">
              <motion.button 
                className="px-6 py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="material-symbols-outlined text-lg">home</span>
                Back to Home
              </motion.button>
            </Link>
            <Link href="/items">
              <motion.button 
                className="px-6 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="material-symbols-outlined text-lg">shopping_bag</span>
                Browse Items
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
