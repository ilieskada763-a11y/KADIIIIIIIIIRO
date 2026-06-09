"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Play, Plus, Star, Calendar, Clock, Share2, Download, MessageCircle, User } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const mockAnime = {
  id: "1",
  title: "Cyberpunk: Edgerunners",
  synopsis: "In a dystopia riddled with corruption and cybernetic implants, a talented but reckless street kid strives to become a mercenary outlaw — an edgerunner.",
  banner: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&q=80&w=1920",
  rating: "9.8",
  year: "2022",
  episodes: [
    { id: "e1", number: 1, title: "Let You Down", duration: "24m", thumbnail: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&q=80&w=400" },
    { id: "e2", number: 2, title: "Like A Boy", duration: "24m", thumbnail: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&q=80&w=400" },
    { id: "e3", number: 3, title: "Smooth Criminal", duration: "24m", thumbnail: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&q=80&w=400" },
  ],
  genres: ["Action", "Cyberpunk", "Sci-Fi", "Drama"],
  studio: "Studio Trigger",
  characters: [
    { name: "David Martinez", role: "Main Protagonist", image: "https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&q=80&w=200" },
    { name: "Lucy", role: "Netrunner", image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=200" },
    { name: "Rebecca", role: "Solo", image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&q=80&w=200" },
    { name: "Maine", role: "Leader", image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&q=80&w=200" },
  ]
};

export default function AnimeDetails() {
  const params = useParams();
  const id = params?.id as string;

  return (
    <div className="min-h-screen pb-20">
      {/* Banner */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent z-10" />
        <Image
          src={mockAnime.banner}
          alt={mockAnime.title}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-20 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
               {mockAnime.genres.map(g => (
                 <span key={g} className="px-3 py-1 glass text-[10px] font-bold uppercase tracking-widest rounded-full">{g}</span>
               ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight tracking-tighter uppercase">{mockAnime.title}</h1>

            <div className="flex items-center gap-6 text-sm font-bold">
               <div className="flex items-center gap-1 text-pistachio">
                 <Star size={16} className="fill-current" />
                 <span>{mockAnime.rating}</span>
               </div>
               <div className="flex items-center gap-1 text-white/60">
                 <Calendar size={16} />
                 <span>{mockAnime.year}</span>
               </div>
               <div className="flex items-center gap-1 text-white/60">
                 <Clock size={16} />
                 <span>{mockAnime.episodes.length} Episodes</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="px-6 md:px-20 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Info, Characters & Episodes */}
        <div className="lg:col-span-2">
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href={`/watch/${id}`} className="flex items-center gap-2 bg-anime-red text-white px-8 py-4 rounded-2xl font-bold neon-glow-red hover:scale-105 transition-all">
              <Play size={20} className="fill-current" />
              Watch Episode 1
            </Link>
            <button className="flex items-center gap-2 glass px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
              <Plus size={20} />
              Add to Watchlist
            </button>
            <div className="flex items-center gap-2">
              <button className="p-4 glass rounded-2xl hover:bg-white/10 transition-all"><Share2 size={20}/></button>
              <button className="p-4 glass rounded-2xl hover:bg-white/10 transition-all"><Download size={20}/></button>
            </div>
          </div>

          <section className="mb-12">
            <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-anime-red">Synopsis</h3>
            <p className="text-white/60 leading-relaxed text-lg">{mockAnime.synopsis}</p>
          </section>

          <section className="mb-16">
            <h3 className="text-xl font-black uppercase tracking-tight mb-8">Characters</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
               {mockAnime.characters.map((char, i) => (
                 <div key={i} className="group">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden relative mb-3">
                       <Image src={char.image} alt={char.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h4 className="font-bold text-sm group-hover:text-anime-red transition-colors">{char.name}</h4>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{char.role}</p>
                 </div>
               ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black uppercase tracking-tight">Episodes</h3>
              <span className="text-xs font-bold text-white/40 uppercase tracking-widest">{mockAnime.episodes.length} Total</span>
            </div>

            <div className="flex flex-col gap-4">
              {mockAnime.episodes.map((ep) => (
                <div key={ep.id} className="glass p-4 rounded-3xl flex items-center gap-6 group cursor-pointer hover:bg-white/5 transition-all">
                  <div className="w-40 aspect-video rounded-xl overflow-hidden relative flex-shrink-0">
                    <Image
                      src={ep.thumbnail}
                      alt={ep.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 bg-anime-red rounded-full flex items-center justify-center neon-glow-red">
                        <Play size={16} className="fill-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-bold text-anime-red uppercase tracking-widest mb-1">Episode {ep.number}</p>
                    <h4 className="text-lg font-bold group-hover:text-glow-red transition-all">{ep.title}</h4>
                    <p className="text-sm text-white/40 mt-1">{ep.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
             <div className="flex items-center gap-3 mb-8">
               <MessageCircle className="text-anime-red" />
               <h3 className="text-xl font-black uppercase tracking-tight">Comments</h3>
             </div>

             <div className="space-y-6">
                <div className="glass p-6 rounded-[2rem]">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                         <User size={18} className="text-white/40" />
                      </div>
                      <div>
                         <p className="font-bold text-sm">Akira_Fan99</p>
                         <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">2 hours ago</p>
                      </div>
                   </div>
                   <p className="text-sm text-white/60 leading-relaxed">This episode was absolutely insane! The animation by Studio Trigger is on another level. Can&apos;t wait for the next one!</p>
                </div>
             </div>
          </section>
        </div>

        {/* Right Column: Details & Recommendations */}
        <div className="space-y-12">
           <div className="glass p-8 rounded-[40px]">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Anime Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-sm text-white/60">Studio</span>
                  <span className="text-sm font-bold">{mockAnime.studio}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-sm text-white/60">Status</span>
                  <span className="text-sm font-bold text-pistachio">Completed</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-sm text-white/60">Type</span>
                  <span className="text-sm font-bold">TV Series</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/60">Language</span>
                  <span className="text-sm font-bold">Sub | Dub</span>
                </div>
              </div>
           </div>

           <div className="glass p-8 rounded-[40px]">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">You might also like</h3>
              <div className="space-y-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="w-20 h-28 rounded-xl overflow-hidden flex-shrink-0 relative">
                      <Image
                        src="https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&q=80&w=200"
                        alt="Rec"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-sm font-bold group-hover:text-anime-red transition-colors line-clamp-1">Attack on Titan</h4>
                      <p className="text-[10px] text-white/40 font-bold uppercase mt-1">Action • Fantasy</p>
                      <div className="flex items-center gap-1 text-pistachio mt-2">
                        <Star size={10} className="fill-current" />
                        <span className="text-[10px] font-bold">9.5</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
