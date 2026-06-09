"use client";

import React, { useState } from "react";
import { Search, Filter, Calendar, Star, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const mockResults = [
  { id: "1", title: "Cyberpunk: Edgerunners", rating: "9.8", year: 2022, image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&q=80&w=200" },
  { id: "2", title: "Attack on Titan", rating: "9.5", year: 2013, image: "https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&q=80&w=200" },
  { id: "3", title: "Akira", rating: "8.8", year: 1988, image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=200" },
];

export const SearchSystem = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className={cn(
        "flex items-center gap-3 glass-dark px-4 py-2 rounded-2xl border border-white/10 transition-all",
        isOpen ? "w-80 border-anime-red/50" : "w-48"
      )}>
        <Search size={18} className="text-white/50" />
        <input
          type="text"
          placeholder="Search anime..."
          className="bg-transparent border-none outline-none text-sm text-white w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
        />
        {isOpen && (
          <button onClick={() => {setIsOpen(false); setQuery("");}}>
            <X size={16} className="text-white/50 hover:text-white" />
          </button>
        )}
      </div>

      {isOpen && query.length > 0 && (
        <div className="absolute top-full mt-4 left-0 right-0 glass-dark rounded-3xl border border-white/10 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
          <div className="p-4 border-b border-white/5 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Results</span>
            <Filter size={14} className="text-white/40" />
          </div>
          <div className="max-h-80 overflow-y-auto">
            {mockResults.filter(a => a.title.toLowerCase().includes(query.toLowerCase())).map((anime) => (
              <div key={anime.id} className="p-4 flex items-center gap-4 hover:bg-white/5 cursor-pointer group transition-colors">
                <div className="w-12 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                  <Image src={anime.image} alt={anime.title} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-anime-red transition-colors">{anime.title}</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex items-center gap-1 text-pistachio">
                      <Star size={10} className="fill-current" />
                      <span className="text-[10px] font-bold">{anime.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/40">
                      <Calendar size={10} />
                      <span className="text-[10px] font-bold">{anime.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
