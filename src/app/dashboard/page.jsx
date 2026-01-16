'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import toast from 'react-hot-toast';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}

function DashboardContent() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const router = useRouter();
  const { user } = useAuth();

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

  // Get user display name or email
  const userName = user?.displayName || user?.email?.split('@')[0] || 'User';
  const userEmail = user?.email || '';
  const userPhoto = user?.photoURL || null;

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#1a2229] text-white flex flex-col shrink-0 border-r border-slate-800">
        <a href="/" className="p-6 hover:opacity-80 transition-opacity cursor-pointer">
          <Logo className="w-12 h-12" textClassName="text-xl" />
          <p className="text-xs text-slate-400 mt-2">Management Portal</p>
        </a>

        <nav className="flex-1 px-4 space-y-1 mt-4">
          <a
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === 'dashboard'
                ? 'bg-primary text-white'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
            href="#"
            onClick={() => setActiveTab('dashboard')}
          >
            <span className="material-symbols-outlined text-lg">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-lg text-slate-500">inventory_2</span>
            <span className="text-sm font-medium">My Items</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-lg text-slate-500">shopping_cart</span>
            <span className="text-sm font-medium">Orders</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-lg text-slate-500">bar_chart</span>
            <span className="text-sm font-medium">Analytics</span>
          </a>

          <div className="pt-4 pb-2 px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            Preferences
          </div>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-lg text-slate-500">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </a>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-rose-400 hover:bg-rose-500/10 transition-all"
          >
            <span className="material-symbols-outlined text-lg">logout</span>
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#f9fafb] dark:bg-background-dark overflow-y-auto">
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-8 py-5 bg-background-light dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10">
          <div className="flex items-center gap-8">
            <h2 className="text-xl font-bold tracking-tight">Overview</h2>
            <div className="relative w-72">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl leading-none">
                search
              </span>
              <input
                className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 py-2 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-500"
                placeholder="Search data, items, orders..."
                type="text"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            <button className="size-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 relative hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-rose-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold leading-none">{userName}</p>
                <p className="text-xs text-slate-500 mt-1">{userEmail}</p>
              </div>
              {userPhoto ? (
                <div
                  className="size-10 rounded-full bg-cover bg-center border-2 border-primary/20"
                  style={{
                    backgroundImage: `url('${userPhoto}')`,
                  }}
                ></div>
              ) : (
                <div className="size-10 rounded-full bg-primary flex items-center justify-center border-2 border-primary/20">
                  <span className="text-white font-bold text-lg">
                    {userName.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* Quick Actions Panel */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Welcome back, {userName}!</h3>
              <p className="text-sm text-slate-500">Here's what's happening with your account today.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-lg">file_download</span>
                View Reports
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
                <span className="material-symbols-outlined text-lg">add</span>
                Add New Item
              </button>
            </div>
          </div>

          {/* Stats Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">inventory_2</span>
                </div>
                <span className="text-emerald-500 text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-full">
                  +5.2%
                </span>
              </div>
              <p className="text-slate-500 text-sm font-medium">Total Items</p>
              <p className="text-2xl font-bold mt-1">1,240</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="size-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-orange-500">local_shipping</span>
                </div>
                <span className="text-emerald-500 text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-full">
                  +2.1%
                </span>
              </div>
              <p className="text-slate-500 text-sm font-medium">Active Orders</p>
              <p className="text-2xl font-bold mt-1">12</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="size-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-500">payments</span>
                </div>
                <span className="text-rose-500 text-xs font-bold bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-full">
                  -0.5%
                </span>
              </div>
              <p className="text-slate-500 text-sm font-medium">Total Spent</p>
              <p className="text-2xl font-bold mt-1">$4,502.00</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="size-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-purple-500">bookmark</span>
                </div>
                <span className="text-emerald-500 text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-full">
                  +12%
                </span>
              </div>
              <p className="text-slate-500 text-sm font-medium">Saved Items</p>
              <p className="text-2xl font-bold mt-1">45</p>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chart Section */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="font-bold text-lg">User Activity Trend</h4>
                  <p className="text-sm text-slate-500">Engagement over the last 30 days</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-xs font-bold bg-slate-100 dark:bg-slate-800 rounded-md">
                    Week
                  </button>
                  <button className="px-3 py-1 text-xs font-bold bg-primary text-white rounded-md">
                    Month
                  </button>
                </div>
              </div>
              <div className="h-64 flex items-center justify-center bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                <p className="text-slate-400 text-sm">Chart visualization area</p>
              </div>
            </div>

            {/* Recent Activity Section */}
            <div className="lg:col-span-1 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold text-lg">Recent Events</h4>
                <button className="text-primary text-sm font-semibold hover:underline">View All</button>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="size-2 mt-2 bg-emerald-500 rounded-full ring-4 ring-emerald-500/10 shrink-0"></div>
                  <div>
                    <p className="text-sm font-semibold">Order #8821 Processed</p>
                    <p className="text-xs text-slate-500 mt-0.5">Payment received for Smart Watch</p>
                    <p className="text-[10px] text-slate-400 mt-2 font-medium">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-2 mt-2 bg-primary rounded-full ring-4 ring-primary/10 shrink-0"></div>
                  <div>
                    <p className="text-sm font-semibold">New Item Added</p>
                    <p className="text-xs text-slate-500 mt-0.5">Premium Wireless Headphones v2</p>
                    <p className="text-[10px] text-slate-400 mt-2 font-medium">45 minutes ago</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-2 mt-2 bg-rose-500 rounded-full ring-4 ring-rose-500/10 shrink-0"></div>
                  <div>
                    <p className="text-sm font-semibold">Security Alert</p>
                    <p className="text-xs text-slate-500 mt-0.5">Unrecognized login from Berlin, DE</p>
                    <p className="text-[10px] text-slate-400 mt-2 font-medium">3 hours ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transactions Table */}
            <div className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <h4 className="font-bold text-lg">Transaction History</h4>
                <div className="flex gap-2">
                  <button className="size-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500">
                    <span className="material-symbols-outlined text-xl">filter_list</span>
                  </button>
                  <button className="size-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500">
                    <span className="material-symbols-outlined text-xl">more_vert</span>
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        Transaction ID
                      </th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        Item Description
                      </th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        Date
                      </th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        Amount
                      </th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        Status
                      </th>
                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium">#TX-10928</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded-lg bg-slate-100 dark:bg-slate-700"></div>
                          <span className="text-sm font-semibold">Apple iPhone 15 Pro</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">Oct 24, 2023</td>
                      <td className="px-6 py-4 text-sm font-bold">$999.00</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-tighter">
                          Completed
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary">
                          <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium">#TX-10927</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded-lg bg-slate-100 dark:bg-slate-700"></div>
                          <span className="text-sm font-semibold">Ergonomic Office Chair</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">Oct 22, 2023</td>
                      <td className="px-6 py-4 text-sm font-bold">$349.50</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded-md bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-tighter">
                          Pending
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary">
                          <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 flex justify-center">
                <button className="text-sm font-bold text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
                  Load more transactions
                  <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-8 mt-auto flex items-center justify-between text-slate-400 text-xs font-medium">
          <p>© 2024 ProductZone Management Dashboard. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-primary" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary" href="#">
              Terms of Service
            </a>
            <a className="hover:text-primary" href="#">
              Help Center
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
