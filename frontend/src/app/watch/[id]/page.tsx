'use client';

import { use } from 'react';
import Navbar from '@/components/shared/Navbar';
import VideoPlayer from '@/components/VideoPlayer';

export default function WatchPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <main className="min-h-screen bg-deep-black text-white">
      <Navbar />

      <div className="pt-24 px-10 md:px-20">
        <div className="aspect-video w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,26,26,0.1)]">
          <VideoPlayer videoUrl="https://vjs.zencdn.net/v/oceans.mp4" />
        </div>

        <div className="mt-10 mb-20">
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">Cyberpunk Edgerunners</h1>
          <p className="text-xl text-white/40 font-bold uppercase tracking-widest">Episode 01: Let You Down</p>

          <div className="mt-10 flex gap-4">
             <button className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 hover:border-anime-red transition-all font-bold">
               NEXT EPISODE
             </button>
             <button className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 hover:border-anime-red transition-all font-bold">
               REPORT ISSUE
             </button>
          </div>
        </div>
      </div>
    </main>
  );
}
