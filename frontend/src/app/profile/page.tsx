'use client';

import Navbar from '@/components/shared/Navbar';
import { motion } from 'framer-motion';
import { Settings, History, Bookmark, Bell } from 'lucide-react';

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-deep-black text-white">
      <Navbar />

      <div className="pt-32 px-10 md:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-2">
            {[
              { icon: Bell, label: 'Notifications', active: true },
              { icon: Bookmark, label: 'Watchlist', active: false },
              { icon: History, label: 'History', active: false },
              { icon: Settings, label: 'Settings', active: false },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold uppercase tracking-widest text-xs ${item.active ? 'bg-anime-red text-white shadow-[0_0_20px_rgba(255,26,26,0.3)]' : 'bg-white/5 hover:bg-white/10 text-white/40 hover:text-white'}`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-10">
            <header className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-anime-red to-blue-500 p-1">
                <div className="w-full h-full rounded-[20px] bg-deep-black flex items-center justify-center text-3xl font-black">
                  JD
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-black uppercase tracking-tighter">John Doe</h1>
                <p className="text-white/40 font-bold uppercase tracking-widest text-xs">Premium Member Since 2024</p>
              </div>
            </header>

            <section>
              <h2 className="text-sm font-bold uppercase text-white/20 tracking-[0.2em] mb-6">Recent Notifications</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all cursor-pointer flex gap-6 items-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <div className="flex-1">
                      <p className="font-bold text-white/80">New Episode: Cyberpunk Edgerunners Ep 04 is now available!</p>
                      <p className="text-xs text-white/20 uppercase font-bold mt-1">2 hours ago</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
