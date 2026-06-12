'use client';

import { Plus, Search, MoreHorizontal, Edit, Trash2 } from 'lucide-react';

export default function AnimeManagement() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-10">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-black uppercase tracking-tighter">Content Management</h1>
        <button className="flex items-center gap-2 px-6 py-3 bg-anime-red rounded-2xl font-bold uppercase tracking-widest text-xs shadow-[0_0_20px_#FF1A1A] transition-all">
          <Plus size={18} /> Add New Anime
        </button>
      </header>

      <div className="mb-8 relative max-w-xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={20} />
        <input
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 focus:border-anime-red focus:outline-none transition-all"
          placeholder="Filter anime library..."
        />
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white/5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            <tr>
              <th className="px-8 py-6">Anime</th>
              <th className="px-8 py-6">Episodes</th>
              <th className="px-8 py-6">Status</th>
              <th className="px-8 py-6">Rating</th>
              <th className="px-8 py-6">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-16 bg-white/10 rounded-lg overflow-hidden" />
                    <div>
                      <p className="font-bold uppercase text-sm">Cyberpunk Edgerunners</p>
                      <p className="text-xs text-white/20">Studio Trigger</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6 font-mono text-sm">10/10</td>
                <td className="px-8 py-6">
                  <span className="px-3 py-1 bg-pistachio/10 text-pistachio text-[10px] font-bold uppercase rounded-full">Finished</span>
                </td>
                <td className="px-8 py-6 font-mono text-sm">9.8</td>
                <td className="px-8 py-6">
                  <div className="flex gap-4">
                    <button className="p-2 hover:bg-blue-500/20 text-white/40 hover:text-blue-500 rounded-lg transition-all"><Edit size={18}/></button>
                    <button className="p-2 hover:bg-anime-red/20 text-white/40 hover:text-anime-red rounded-lg transition-all"><Trash2 size={18}/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
