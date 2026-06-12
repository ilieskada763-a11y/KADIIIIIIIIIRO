'use client';

import { use } from 'react';
import Navbar from '@/components/shared/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AnimeDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <main className="min-h-screen bg-deep-black text-white">
      <Navbar />

      {/* Cinematic Hero */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent z-10" />
        <Image
          src="https://images.alphacoders.com/124/1248061.jpg"
          alt="Cyberpunk Edgerunners"
          fill
          className="object-cover scale-110 blur-[2px]"
          priority
        />

        <div className="relative z-20 h-full flex flex-col justify-end p-10 md:p-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter"
          >
            Cyberpunk <br /> <span className="text-anime-red">Edgerunners</span>
          </motion.h1>

          <div className="flex gap-4 mt-8">
            <button className="px-10 py-4 bg-anime-red text-white font-bold rounded-full hover:shadow-[0_0_20px_#FF1A1A] transition-all">
              WATCH NOW
            </button>
            <button className="px-10 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all">
              + WATCHLIST
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-10 md:p-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 uppercase tracking-widest text-white/40">Synopsis</h2>
          <p className="text-xl text-white/80 leading-relaxed">
            In a dystopia riddled with corruption and cybernetic implants, a talented but reckless street kid strives to become a mercenary outlaw — an edgerunner.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 uppercase tracking-widest text-white/40">Episodes</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((ep) => (
              <div key={ep} className="group bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-anime-red transition-all flex items-center gap-6 cursor-pointer">
                <div className="text-3xl font-black text-white/20 group-hover:text-anime-red">{ep.toString().padStart(2, '0')}</div>
                <div>
                  <h3 className="font-bold text-lg uppercase">Episode {ep} Title</h3>
                  <p className="text-sm text-white/40">24 Minutes</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h2 className="text-sm font-bold uppercase text-white/40 tracking-widest mb-4">Details</h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-white/20 uppercase tracking-widest">Studio</p>
                <p className="font-bold">TRIGGER</p>
              </div>
              <div>
                <p className="text-xs font-bold text-white/20 uppercase tracking-widest">Released</p>
                <p className="font-bold">2022</p>
              </div>
              <div>
                <p className="text-xs font-bold text-white/20 uppercase tracking-widest">Rating</p>
                <p className="font-bold text-pistachio">9.8/10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
