'use client';

import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import itemsData from '@/data/items.json';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ItemDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  
  const item = itemsData.find(i => i.id === params.id);

  if (!item) {
    return (
      <div className="bg-background-light dark:bg-background-dark min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Item not found</h1>
            <button
              onClick={() => router.push('/items')}
              className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:opacity-90"
            >
              Back to Items
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} ${item.name} to cart!`);
  };

  const relatedItems = itemsData
    .filter(i => i.category === item.category && i.id !== item.id)
    .slice(0, 3);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      
      <main className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <a href="/" className="text-slate-500 hover:text-primary">Home</a>
            <span className="text-slate-400">/</span>
            <a href="/items" className="text-slate-500 hover:text-primary">Items</a>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 dark:text-white font-medium">{item.name}</span>
          </div>

          {/* Product Details */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-2xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {item.badge && (
                <span className={`absolute top-6 left-6 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg ${
                  item.badge === 'BEST SELLER' ? 'bg-accent' : 'bg-primary'
                }`}>
                  {item.badge}
                </span>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                  {item.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-black mb-4">{item.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <span className="material-symbols-outlined fill-1">star</span>
                    <span className="text-lg font-bold">{item.rating}</span>
                  </div>
                  <span className="text-slate-500">({item.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-black text-primary">
                    ${item.price}
                  </span>
                  {item.billing && (
                    <span className="text-xl text-slate-500">/{item.billing}</span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-b border-slate-200 dark:border-slate-700 py-6">
                <h3 className="font-bold text-lg mb-3">Description</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-bold text-lg mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                    <span className="text-slate-600 dark:text-slate-400">Lifetime updates and support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                    <span className="text-slate-600 dark:text-slate-400">Commercial license included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                    <span className="text-slate-600 dark:text-slate-400">Comprehensive documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                    <span className="text-slate-600 dark:text-slate-400">Priority customer support</span>
                  </li>
                </ul>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <span className="px-6 py-3 font-bold min-w-[60px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">shopping_cart</span>
                  Add to Cart
                </button>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Secure Payment</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">local_shipping</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Instant Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">replay</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">30-Day Refund</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">support_agent</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Items */}
          {relatedItems.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black">Related Items</h2>
                <a href="/items" className="text-primary font-bold hover:underline">
                  View All
                </a>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedItems.map((relatedItem) => (
                  <div
                    key={relatedItem.id}
                    className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group border border-slate-100 dark:border-slate-700"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <img
                        alt={relatedItem.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src={relatedItem.image}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-xl">{relatedItem.name}</h3>
                        <div className="text-primary font-black text-xl">${relatedItem.price}</div>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-500 mb-4">
                        <span className="material-symbols-outlined text-sm fill-1">star</span>
                        <span className="text-sm font-bold">{relatedItem.rating}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <a
                          href={`/items/${relatedItem.id}`}
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
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
