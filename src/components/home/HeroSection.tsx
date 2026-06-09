"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Info, Star, Calendar } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative h-[90vh] w-full flex items-center px-6 md:px-20 overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black via-deep-black/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent z-10" />
        <Image
          src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&q=80&w=1920"
          alt="Featured Anime"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      <div className="max-w-3xl z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-anime-red/20 border border-anime-red/30 rounded-full text-anime-red text-xs font-bold uppercase tracking-widest neon-glow-red">
              Trending #1
            </span>
            <div className="flex items-center gap-1 text-pistachio">
              <Star size={14} className="fill-current" />
              <span className="text-xs font-bold">9.8 Rating</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-4 leading-none tracking-tighter uppercase">
            Cyberpunk <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-anime-red to-electric-blue">
              Edgerunners
            </span>
          </h1>

          <p className="text-lg text-white/60 mb-8 max-w-xl leading-relaxed">
            In a dystopia riddled with corruption and cybernetic implants, a talented but reckless street kid strives to become a mercenary outlaw — an edgerunner.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 bg-anime-red hover:bg-anime-red/90 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 neon-glow-red group">
              <Play className="fill-white group-hover:scale-110 transition-transform" size={20} />
              Watch Now
            </button>
            <button className="flex items-center gap-2 glass hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105">
              <Info size={20} />
              More Info
            </button>
          </div>
        </motion.div>
      </div>

      <div className="hidden lg:flex absolute right-20 bottom-20 flex-col gap-6 z-20">
        <div className="glass p-6 rounded-3xl w-64">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-electric-blue/20 rounded-xl flex items-center justify-center text-electric-blue">
              <Calendar size={20} />
            </div>
            <div>
              <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Next Episode</p>
              <p className="text-sm font-bold">Today at 18:00</p>
            </div>
          </div>
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-electric-blue neon-glow-blue" />
          </div>
        </div>
      </div>
    </section>
  );
};
