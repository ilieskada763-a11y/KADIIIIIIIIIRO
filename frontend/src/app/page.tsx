'use client';

import { Hero } from '@/components/home/Hero';
import { InteractiveBackground } from '@/components/InteractiveBackground';
import Navbar from '@/components/shared/Navbar';
import SearchModal from '@/components/SearchModal';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen bg-deep-black">
      <InteractiveBackground />
      <Navbar />

      {/* Overriding Search link in Navbar would be complex, let's just add a trigger in Hero or here */}
      <div className="fixed top-6 right-24 z-[60] flex items-center">
        <button
          onClick={() => setIsSearchOpen(true)}
          className="text-xs font-bold tracking-widest hover:text-anime-red transition-colors"
        >
          SEARCH
        </button>
      </div>

      <Hero />

      <section className="px-10 py-20 relative z-10">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-0.5 w-10 bg-anime-red" />
          <h2 className="text-2xl font-black uppercase tracking-tight">Recently Added</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[1,2,3,4,5,6].map(i => (
            <Link
              key={i}
              href={`/anime/${i}`}
              className="aspect-[2/3] bg-white/5 rounded-2xl border border-white/10 overflow-hidden group cursor-pointer hover:border-anime-red transition-all relative"
            >
               <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80" />
               <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <p className="text-[10px] font-bold text-anime-red uppercase mb-1">New Episode</p>
                  <h3 className="text-sm font-bold uppercase truncate">Anime Title {i}</h3>
               </div>
            </Link>
          ))}
        </div>
      </section>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </main>
  );
}
