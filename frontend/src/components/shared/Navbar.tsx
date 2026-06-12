'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6 bg-deep-black/50 backdrop-blur-xl border-b border-white/5"
    >
      <Link href="/" className="text-2xl font-black tracking-tighter">
        AKAI<span className="text-anime-red">STREAM</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {['HOME', 'TRENDING', 'MOVIES', 'SEARCH'].map((item) => (
          <Link
            key={item}
            href={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
            className="text-xs font-bold tracking-widest hover:text-anime-red transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20" />
    </motion.nav>
  );
}
