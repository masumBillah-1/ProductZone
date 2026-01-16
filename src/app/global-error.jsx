'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error('Global Application Error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-rose-950 flex items-center justify-center p-4">
          <div className="max-w-lg w-full text-center space-y-4">
            {/* Error Icon */}
            <div className="flex justify-center">
              <div className="size-20 rounded-full bg-rose-500/20 flex items-center justify-center">
                <svg className="size-12 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-2">
              <h1 className="text-3xl font-black text-white">
                Critical Error
              </h1>
              <p className="text-sm text-slate-300 max-w-sm mx-auto">
                A critical error occurred. Please try refreshing the page.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button 
                onClick={reset}
                className="px-6 py-2.5 bg-rose-500 text-white rounded-lg font-bold text-sm hover:bg-rose-600 transition-all"
              >
                Try Again
              </button>
              <a 
                href="/"
                className="px-6 py-2.5 bg-white/10 text-white border border-white/20 rounded-lg font-bold text-sm hover:bg-white/20 transition-all"
              >
                Go to Homepage
              </a>
            </div>

            {/* Error ID */}
            <p className="text-xs text-slate-500 pt-2">
              Error ID: {Date.now().toString(36).toUpperCase()}
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
