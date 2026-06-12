'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAccessToken } from '@/lib/auth/auth';
import { motion } from 'framer-motion';
import { Users, Eye, Activity, Database, TrendingUp, ShieldAlert } from 'lucide-react';

export default function OwnerDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getAccessToken();
    if (!token) {
      router.push('/404');
      return;
    }

    // Authentication check logic...
    setLoading(false);
  }, [router]);

  if (loading) return (
    <div className="min-h-screen bg-deep-black flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-anime-red border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white p-10 font-sans">
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-5xl font-black uppercase tracking-tighter flex items-center gap-4">
            <span className="w-3 h-12 bg-anime-red rounded-full" />
            Control Center
          </h1>
          <p className="text-white/20 font-bold uppercase tracking-widest mt-2 ml-7">System Version 9.2.7-Akira</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
            System Logs
          </button>
          <button className="px-6 py-3 bg-anime-red rounded-2xl font-bold uppercase tracking-widest text-xs shadow-[0_0_20px_#FF1A1A] transition-all">
            Deploy Update
          </button>
        </div>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-6 h-[800px]">
        {/* Large Analytics Card */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="md:col-span-2 md:row-span-2 bg-white/5 border border-white/10 rounded-[40px] p-10 flex flex-col justify-between overflow-hidden relative group"
        >
          <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
            <TrendingUp size={200} />
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase text-white/40 tracking-[0.3em] mb-2">Network Traffic</h2>
            <p className="text-7xl font-black tracking-tighter">1.2M <span className="text-2xl text-pistachio font-bold">+12%</span></p>
          </div>
          <div className="h-40 w-full flex items-end gap-2">
            {[40, 70, 45, 90, 65, 80, 50, 100, 85].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-anime-red to-blue-500 rounded-t-lg" style={{ height: `${h}%` }} />
            ))}
          </div>
        </motion.div>

        {/* Users Status */}
        <div className="md:col-span-1 md:row-span-1 bg-white/5 border border-white/10 rounded-[40px] p-8 flex flex-col justify-center">
          <Users className="text-blue-500 mb-4" size={32} />
          <h2 className="text-xs font-bold uppercase text-white/40 tracking-widest mb-1">Active Users</h2>
          <p className="text-4xl font-black">42,890</p>
        </div>

        {/* Server Health */}
        <div className="md:col-span-1 md:row-span-1 bg-white/5 border border-white/10 rounded-[40px] p-8 flex flex-col justify-center">
          <Activity className="text-pistachio mb-4" size={32} />
          <h2 className="text-xs font-bold uppercase text-white/40 tracking-widest mb-1">System Health</h2>
          <p className="text-4xl font-black text-pistachio uppercase">99.9%</p>
        </div>

        {/* Database Stats */}
        <div className="md:col-span-2 md:row-span-1 bg-white/5 border border-white/10 rounded-[40px] p-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
             <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center">
                <Database className="text-white/40" />
             </div>
             <div>
               <h2 className="text-xs font-bold uppercase text-white/40 tracking-widest">Storage</h2>
               <p className="text-2xl font-black">4.2 TB / 10 TB</p>
             </div>
          </div>
          <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 w-[42%]" />
          </div>
        </div>

        {/* Security Events */}
        <div className="md:col-span-2 md:row-span-1 bg-white/5 border border-white/10 rounded-[40px] p-8 flex items-center gap-8">
           <div className="p-6 bg-anime-red/10 rounded-3xl">
              <ShieldAlert className="text-anime-red" size={40} />
           </div>
           <div className="flex-1">
              <h2 className="text-sm font-bold uppercase text-white/40 tracking-widest mb-1">Security Events</h2>
              <div className="flex gap-4 mt-4">
                 <div className="flex-1 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-2xl font-black text-anime-red">03</p>
                    <p className="text-[10px] font-bold text-white/40 uppercase">Critical</p>
                 </div>
                 <div className="flex-1 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-2xl font-black">128</p>
                    <p className="text-[10px] font-bold text-white/40 uppercase">Blocked</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
