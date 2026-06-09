"use client";

import React from "react";
import { useParams } from "next/navigation";
import { VideoPlayer } from "@/components/video/VideoPlayer";
import { ChevronLeft, Info, List, MessageSquare, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WatchPage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-black pb-20">
      <div className="max-w-[1600px] mx-auto px-6 pt-24">
        {/* Navigation back */}
        <Link href={`/anime/${id}`} className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 group transition-colors">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold text-sm uppercase tracking-widest">Back to Details</span>
        </Link>

        {/* Video Player Container */}
        <div className="mb-12">
          <VideoPlayer
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            title="Cyberpunk: Edgerunners - Episode 01"
          />
        </div>

        {/* Watch Page Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
             <div className="flex items-center justify-between mb-8">
               <div>
                 <h1 className="text-3xl font-black tracking-tight uppercase">Let You Down</h1>
                 <p className="text-white/40 font-bold uppercase tracking-widest mt-2">Cyberpunk: Edgerunners &bull; S1 E1</p>
               </div>
               <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 glass hover:bg-white/10 rounded-2xl text-xs font-bold uppercase tracking-widest">
                    <MessageSquare size={16} />
                    Comments
                  </button>
               </div>
             </div>

             <div className="glass p-8 rounded-[40px] border border-white/5">
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-anime-red mb-4">
                  <Info size={16} />
                  Description
                </h3>
                <p className="text-white/60 leading-relaxed">
                  David Martinez, a top student at the prestigious Arasaka Academy, struggles with his mother&apos;s financial burdens. After a tragic car accident, David discovers a military-grade cybernetic implant among his mother&apos;s belongings.
                </p>
             </div>
          </div>

          <div className="space-y-8">
             <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                  <List size={16} />
                  Up Next
                </h3>
                <span className="text-[10px] text-white/40 font-bold">12 Episodes</span>
             </div>

             <div className="flex flex-col gap-4">
                {[2, 3, 4, 5].map(i => (
                  <div key={i} className="glass p-3 rounded-2xl flex gap-4 group cursor-pointer hover:bg-white/5 transition-all">
                    <div className="w-24 aspect-video rounded-lg overflow-hidden flex-shrink-0 relative">
                      <Image
                        src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&q=80&w=200"
                        alt="Next"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                         <Play size={12} className="fill-white" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                       <h4 className="text-xs font-bold group-hover:text-anime-red transition-colors">Episode {i < 10 ? `0${i}` : i}</h4>
                       <p className="text-[10px] text-white/40 mt-1">24 min</p>
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
