"use client";

import React from "react";
import {
  Users, Play, Eye, DollarSign,
  Plus, Search, MoreVertical, TrendingUp,
  LayoutDashboard, Film, List, Settings, LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const stats = [
  { label: "Total Users", value: "128,430", change: "+12%", icon: Users, color: "text-electric-blue" },
  { label: "Active Now", value: "4,231", change: "+5%", icon: Eye, color: "text-pistachio" },
  { label: "Watch Time", value: "840k hrs", change: "+18%", icon: Play, color: "text-anime-red" },
  { label: "Revenue", value: "$42,120", change: "+7%", icon: DollarSign, color: "text-white" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#020202] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 flex flex-col p-6 gap-8">
        <div className="flex items-center gap-2 px-2">
          <div className="w-8 h-8 bg-anime-red rounded-lg flex items-center justify-center neon-glow-red">
            <Play className="fill-white text-white w-5 h-5" />
          </div>
          <span className="text-xl font-black tracking-tighter">AKIRA <span className="text-xs text-white/40 block -mt-1 uppercase tracking-[0.2em]">Admin</span></span>
        </div>

        <nav className="flex flex-col gap-2">
           <button className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl text-sm font-bold text-anime-red transition-all">
             <LayoutDashboard size={18} />
             Dashboard
           </button>
           <button className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-sm font-bold text-white/60 hover:text-white transition-all">
             <Film size={18} />
             Anime Management
           </button>
           <button className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-sm font-bold text-white/60 hover:text-white transition-all">
             <List size={18} />
             Genres & Tags
           </button>
           <button className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-sm font-bold text-white/60 hover:text-white transition-all">
             <Users size={18} />
             User Management
           </button>
        </nav>

        <div className="mt-auto flex flex-col gap-2">
           <button className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-sm font-bold text-white/60 hover:text-white transition-all">
             <Settings size={18} />
             Settings
           </button>
           <button className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-sm font-bold text-white/60 hover:text-red-500 transition-all">
             <LogOut size={18} />
             Logout
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex items-center justify-between mb-12">
           <div>
              <h1 className="text-3xl font-black uppercase">System Overview</h1>
              <p className="text-white/40 text-sm mt-1">Welcome back, Administrator Akira.</p>
           </div>
           <div className="flex gap-4">
              <div className="glass-dark px-4 py-2 rounded-xl flex items-center gap-3 border border-white/10">
                <Search size={16} className="text-white/40" />
                <input type="text" placeholder="Search data..." className="bg-transparent border-none outline-none text-xs w-48" />
              </div>
              <button className="flex items-center gap-2 bg-anime-red px-6 py-2 rounded-xl text-xs font-bold neon-glow-red hover:scale-105 transition-all">
                <Plus size={16} />
                New Anime
              </button>
           </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
           {stats.map((stat, i) => (
             <div key={i} className="glass p-6 rounded-[2rem] border border-white/5">
                <div className="flex items-center justify-between mb-4">
                   <div className={cn("p-3 rounded-2xl bg-white/5", stat.color)}>
                      <stat.icon size={20} />
                   </div>
                   <span className="text-pistachio text-[10px] font-bold px-2 py-1 bg-pistachio/10 rounded-lg">{stat.change}</span>
                </div>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-2xl font-black mt-1">{stat.value}</h3>
             </div>
           ))}
        </div>

        {/* Bento Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           <div className="lg:col-span-2 glass p-8 rounded-[2.5rem] border border-white/5">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-black uppercase tracking-tight">Recent Content Updates</h3>
                <button className="text-xs font-bold text-white/40 hover:text-white underline">View All</button>
              </div>

              <div className="space-y-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-deep-black overflow-hidden relative">
                        <Image
                          src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&q=80&w=100"
                          alt="Thumb"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold group-hover:text-anime-red transition-colors">Cyberpunk: Edgerunners</h4>
                        <p className="text-[10px] text-white/40 font-bold mt-0.5">S1 Episode 10 &bull; Uploaded 2h ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                       <span className="text-[10px] font-bold px-2 py-1 bg-pistachio/10 text-pistachio rounded-lg uppercase tracking-widest">Live</span>
                       <button className="text-white/40 hover:text-white"><MoreVertical size={16} /></button>
                    </div>
                  </div>
                ))}
              </div>
           </div>

           <div className="glass p-8 rounded-[2.5rem] border border-white/5 flex flex-col">
              <div className="flex items-center gap-2 mb-8">
                 <TrendingUp size={20} className="text-electric-blue" />
                 <h3 className="text-lg font-black uppercase tracking-tight">Traffic Analytics</h3>
              </div>

              <div className="flex-1 flex flex-col justify-center gap-6">
                 <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Mobile Users</span>
                      <span className="text-sm font-bold">64%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full w-[64%] bg-electric-blue neon-glow-blue" />
                    </div>
                 </div>
                 <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Desktop Users</span>
                      <span className="text-sm font-bold">36%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full w-[36%] bg-anime-red neon-glow-red" />
                    </div>
                 </div>

                 <div className="mt-8 p-6 bg-white/5 rounded-3xl text-center">
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-2">System Health</p>
                    <div className="text-2xl font-black text-pistachio uppercase">Optimal</div>
                    <p className="text-[10px] text-white/20 mt-1 uppercase">Latancy: 24ms &bull; Uptime: 99.9%</p>
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}
