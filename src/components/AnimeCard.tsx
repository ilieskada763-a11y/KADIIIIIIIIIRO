"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Star, Plus } from "lucide-react";
import Image from "next/image";

interface AnimeCardProps {
  title: string;
  image: string;
  rating: string;
  episodes: string;
  category: string;
}

export const AnimeCard: React.FC<AnimeCardProps> = ({
  title,
  image,
  rating,
  episodes,
  category,
}) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 p-5 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 bg-white/10 backdrop-blur-md rounded-md text-[10px] font-bold uppercase tracking-wider text-white">
            {category}
          </span>
          <div className="flex items-center gap-1 text-pistachio">
            <Star size={10} className="fill-current" />
            <span className="text-[10px] font-bold">{rating}</span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-white line-clamp-1 mb-1 group-hover:text-glow-red transition-all">
          {title}
        </h3>
        <p className="text-[11px] text-white/50 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
          {episodes} Episodes • Sub | Dub
        </p>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <button className="flex-1 flex items-center justify-center gap-2 bg-white text-black h-10 rounded-xl font-bold text-xs hover:bg-anime-red hover:text-white transition-colors">
            <Play size={14} className="fill-current" />
            Play
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-white/20 transition-colors">
            <Plus size={16} />
          </button>
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-anime-red/50 rounded-3xl transition-colors pointer-events-none" />
    </motion.div>
  );
};
