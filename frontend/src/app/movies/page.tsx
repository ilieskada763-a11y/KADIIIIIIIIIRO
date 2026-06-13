import Navbar from '@/components/shared/Navbar';

export default function MoviesPage() {
  return (
    <main className="min-h-screen bg-deep-black text-white">
      <Navbar />
      <div className="pt-32 px-10">
        <h1 className="text-4xl font-black uppercase tracking-tighter">Anime Movies</h1>
        <p className="mt-4 text-white/40">Cinematic experiences on demand.</p>
      </div>
    </main>
  );
}
