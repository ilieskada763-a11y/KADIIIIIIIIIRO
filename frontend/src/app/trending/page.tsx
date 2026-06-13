import Navbar from '@/components/shared/Navbar';

export default function TrendingPage() {
  return (
    <main className="min-h-screen bg-deep-black text-white">
      <Navbar />
      <div className="pt-32 px-10">
        <h1 className="text-4xl font-black uppercase tracking-tighter">Trending Anime</h1>
        <p className="mt-4 text-white/40">Discover what's hot right now.</p>
      </div>
    </main>
  );
}
