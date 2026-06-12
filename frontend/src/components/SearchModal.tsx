'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useState } from 'react';

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [query, setQuery] = useState('');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-20 bg-deep-black/90 backdrop-blur-3xl p-6"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="w-full max-w-4xl"
          >
            <div className="relative flex items-center mb-10">
              <Search className="absolute left-6 text-white/40" size={32} />
              <input
                autoFocus
                className="w-full bg-white/5 border border-white/10 rounded-3xl py-8 pl-20 pr-10 text-3xl font-black focus:border-anime-red focus:outline-none transition-all"
                placeholder="SEARCH ANIME..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                onClick={onClose}
                className="absolute right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Action', 'Sci-Fi', 'Romance', 'Seinen', 'Horror', 'Music'].map((genre) => (
                <button
                  key={genre}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-anime-red transition-all text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white"
                >
                  {genre}
                </button>
              ))}
            </div>

            {query.length > 2 && (
              <div className="mt-10 space-y-4">
                <p className="text-xs font-bold text-white/20 uppercase tracking-widest px-4">Results</p>
                <div className="bg-white/5 rounded-3xl p-6 border border-white/10 hover:border-anime-red transition-all cursor-pointer flex gap-6">
                  <div className="w-24 h-32 bg-white/10 rounded-xl" />
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tighter">Cyberpunk Edgerunners</h3>
                    <p className="text-sm text-white/40">Studio Trigger • 2022</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
