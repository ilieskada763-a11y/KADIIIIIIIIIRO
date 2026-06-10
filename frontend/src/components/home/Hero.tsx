'use client';

import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="relative h-[80vh] flex items-center px-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent z-10" />
      <div className="max-w-2xl z-20">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-anime-red font-black uppercase tracking-[0.3em] text-xs mb-4 block"
        >
          Trending Now
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-7xl md:text-8xl font-black uppercase leading-[0.8] mb-6 tracking-tighter"
        >
          Cyberpunk <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-anime-red to-electric-blue">
            Edgerunners
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/60 text-lg mb-10 max-w-lg leading-relaxed"
        >
          In a dystopia riddled with corruption and cybernetic implants, a talented but reckless street kid strives to become a mercenary outlaw.
        </motion.p>
        <div className="flex gap-4">
          <button className="bg-anime-red text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all neon-glow-red">
            Watch Now
          </button>
          <button className="bg-white/10 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};
