'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAccessToken } from '@/lib/auth/auth';

export default function OwnerDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getAccessToken();
    if (!token) {
      router.push('/404');
      return;
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    fetch(`${apiUrl}/auth/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.role !== 'OWNER') {
          router.push('/404');
        } else {
          setLoading(false);
        }
      })
      .catch(() => router.push('/404'));
  }, [router]);

  if (loading) return <div>Loading Control Center...</div>;

  return (
    <div className="p-10">
      <h1 className="text-4xl font-black mb-10 uppercase tracking-tighter">Owner Control Center</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-anime-red transition-all">
          <h2 className="text-sm font-bold uppercase text-white/40 tracking-widest mb-2">Total Users</h2>
          <p className="text-4xl font-black">128,430</p>
        </div>
        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-anime-red transition-all">
          <h2 className="text-sm font-bold uppercase text-white/40 tracking-widest mb-2">Total Views</h2>
          <p className="text-4xl font-black">1.2M</p>
        </div>
        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-anime-red transition-all">
          <h2 className="text-sm font-bold uppercase text-white/40 tracking-widest mb-2">System Health</h2>
          <p className="text-4xl font-black text-pistachio uppercase">Optimal</p>
        </div>
      </div>
    </div>
  );
}
