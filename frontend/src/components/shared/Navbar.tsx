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
        {[
          { label: 'HOME', href: '/' },
          { label: 'TRENDING', href: '/trending' },
          { label: 'MOVIES', href: '/movies' },
          { label: 'NEW', href: '/new-episodes' },
          { label: 'SEARCH', href: '#' },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-xs font-bold tracking-widest hover:text-anime-red transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <Link href="/profile" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 overflow-hidden flex items-center justify-center hover:border-anime-red transition-all">
        <div className="text-[10px] font-bold">JD</div>
      </Link>
    </motion.nav>
  );
}
