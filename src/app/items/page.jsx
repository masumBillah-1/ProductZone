'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import itemsData from '@/data/items.json';

export default function ItemsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('Newest First');

  // Get unique categories
  const categories = ['All Categories', ...new Set(itemsData.map(item => item.category))];

  // Filter and sort items
  const filteredItems = itemsData
    .filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'Price: Low to High':
          return a.price - b.price;
        case 'Price: High to Low':
          return b.price - a.price;
        case 'Top Rated':
          return b.rating - a.rating;
        case 'Most Popular':
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-white dark:bg-slate-900/50 py-16 border-b border-slate-100 dark:border-slate-800">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">Browse our Items</h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl">
                Explore our curated selection of premium tools, templates, and digital assets designed to accelerate your growth.
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <div className="sticky top-20 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="max-w-[1200px] mx-auto px-6 py-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:max-w-md group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary">
                  search
                </span>
                <input
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                  placeholder="Search items, keywords..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 w-full lg:w-auto">
                <div className="flex items-center gap-2 flex-1 sm:flex-none">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Category:</span>
                  <select
                    className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 py-3 px-4 text-sm font-medium focus:ring-primary outline-none min-w-[160px]"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2 flex-1 sm:flex-none">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Sort by:</span>
                  <select
                    className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 py-3 px-4 text-sm font-medium focus:ring-primary outline-none min-w-[160px]"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option>Newest First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Top Rated</option>
                    <option>Most Popular</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        <section className="py-12 px-6">
          <div className="max-w-[1200px] mx-auto">
            {filteredItems.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-slate-500 text-lg">No items found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className={`bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group ${
                      item.badge === 'BEST SELLER' ? 'border-2 border-primary' : 'border border-slate-100 dark:border-slate-700'
                    }`}
                  >
                    {/* Image */}
                    <div className="relative h-60 overflow-hidden">
                      <img
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src={item.image}
                      />
                      {item.badge && (
                        <span className={`absolute top-4 left-4 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg ${
                          item.badge === 'BEST SELLER' ? 'bg-accent' : 'bg-primary'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-xl text-slate-900 dark:text-white">{item.name}</h3>
                        <div className="text-primary font-black text-xl">
                          ${item.price}{item.billing && '/mo'}
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-yellow-500 mb-4">
                        <span className="material-symbols-outlined text-sm fill-1">star</span>
                        <span className="text-sm font-bold">{item.rating}</span>
                        <span className="text-slate-400 text-xs font-normal ml-1">({item.reviews} reviews)</span>
                      </div>

                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2">
                        {item.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        <a
                          href={`/items/${item.id}`}
                          className="py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-center"
                        >
                          Details
                        </a>
                        <button className="py-2.5 rounded-lg bg-primary text-white text-sm font-bold hover:opacity-90 transition-all flex items-center justify-center gap-1">
                          <span className="material-symbols-outlined text-sm">shopping_cart</span>
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto bg-primary rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/30 opacity-50"></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">Stay updated on new releases</h2>
              <p className="text-primary-100/80 text-lg">
                Join 5,000+ creators and get the latest catalog updates, tips, and exclusive offers delivered to your inbox.
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
      </main>

      <Footer />
    </div>
  );
}
