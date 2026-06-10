import { Hero } from '@/components/home/Hero';
import { InteractiveBackground } from '@/components/InteractiveBackground';

export default function Home() {
  return (
    <main>
      <InteractiveBackground />
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-6 glass">
        <div className="text-2xl font-black tracking-tighter">
          AKAI<span className="text-anime-red">STREAM</span>
        </div>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white/50">
          <a href="#" className="hover:text-anime-red transition-colors">Home</a>
          <a href="#" className="hover:text-anime-red transition-colors">Trending</a>
          <a href="#" className="hover:text-anime-red transition-colors">Movies</a>
          <a href="#" className="hover:text-anime-red transition-colors">New</a>
        </div>
        <div className="w-10 h-10 bg-white/10 rounded-full border border-white/10" />
      </nav>
      <Hero />
      <section className="px-10 py-20">
        <h2 className="text-2xl font-black uppercase tracking-tight mb-8">Recently Added</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="aspect-[2/3] bg-white/5 rounded-2xl border border-white/10 overflow-hidden group cursor-pointer hover:border-anime-red transition-all">
               <div className="w-full h-full bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
