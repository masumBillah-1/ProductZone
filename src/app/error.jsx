'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '@/components/Logo';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-light via-slate-50 to-rose-50 dark:from-background-dark dark:via-slate-900 dark:to-rose-950/20 flex items-center justify-center p-4">
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
          {/* Error Icon */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
          >
            <div className="relative">
              <div className="size-20 rounded-full bg-gradient-to-br from-rose-500/20 to-orange-500/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-[50px] text-rose-500">
                  error
                </span>
              </div>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
              Something went wrong
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
              We encountered an unexpected error. Please try again.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button 
              onClick={reset}
              className="px-6 py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="material-symbols-outlined text-lg">refresh</span>
              Try Again
            </motion.button>
            <Link href="/">
              <motion.button 
                className="px-6 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="material-symbols-outlined text-lg">home</span>
                Back to Home
              </motion.button>
            </Link>
          </motion.div>

          {/* Error ID */}
          <motion.p 
            className="text-xs text-slate-400 dark:text-slate-500 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Error ID: {Date.now().toString(36).toUpperCase()}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
