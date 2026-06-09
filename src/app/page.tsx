import { HeroSection } from "@/components/home/HeroSection";
import { AnimeCard } from "@/components/AnimeCard";
import { ChevronRight, Sparkles, TrendingUp, Play, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const continueWatching = [
  {
    title: "Cyberpunk: Edgerunners",
    episode: "S1 E04",
    progress: 65,
    image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&q=80&w=400",
    id: "1"
  },
  {
    title: "Attack on Titan",
    episode: "S4 E12",
    progress: 30,
    image: "https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&q=80&w=400",
    id: "2"
  }
];

const trendingAnime = [
  {
    title: "Cyberpunk: Edgerunners",
    image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&q=80&w=600",
    rating: "9.8",
    episodes: "10",
    category: "Cyberpunk"
  },
  {
    title: "Attack on Titan",
    image: "https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&q=80&w=600",
    rating: "9.5",
    episodes: "87",
    category: "Action"
  },
  {
    title: "Jujutsu Kaisen",
    image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&q=80&w=600",
    rating: "9.2",
    episodes: "47",
    category: "Supernatural"
  },
  {
    title: "Demon Slayer",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&q=80&w=600",
    rating: "9.0",
    episodes: "55",
    category: "Fantasy"
  }
];

const newEpisodes = [
  {
    title: "Chainsaw Man",
    image: "https://images.unsplash.com/photo-1614583225154-5feaba1bd5df?auto=format&fit=crop&q=80&w=600",
    rating: "8.9",
    episodes: "12",
    category: "Action"
  },
  {
    title: "Solo Leveling",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=600",
    rating: "9.4",
    episodes: "12",
    category: "Fantasy"
  },
  {
    title: "Spy x Family",
    image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=600",
    rating: "8.7",
    episodes: "37",
    category: "Comedy"
  },
  {
    title: "Blue Lock",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600",
    rating: "8.5",
    episodes: "24",
    category: "Sports"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <HeroSection />

      {/* Continue Watching Section */}
      <section className="px-6 md:px-20 -mt-12 relative z-20">
        <div className="flex items-center gap-3 mb-8">
           <div className="w-10 h-10 bg-pistachio/10 rounded-xl flex items-center justify-center text-pistachio border border-pistachio/20">
              <Clock size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-tight uppercase">Continue <span className="text-pistachio">Watching</span></h2>
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest">Pick up where you left off</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {continueWatching.map((item) => (
             <Link key={item.id} href={`/watch/${item.id}`} className="group glass p-4 rounded-[2rem] flex items-center gap-6 hover:bg-white/5 transition-all">
                <div className="w-40 aspect-video rounded-2xl overflow-hidden relative flex-shrink-0">
                   <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 bg-pistachio rounded-full flex items-center justify-center shadow-lg shadow-pistachio/20">
                         <Play size={16} className="fill-white ml-1" />
                      </div>
                   </div>
                   <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                      <div className="h-full bg-pistachio neon-glow-green" style={{ width: `${item.progress}%` }} />
                   </div>
                </div>
                <div className="flex-1">
                   <p className="text-[10px] font-bold text-pistachio uppercase tracking-widest mb-1">{item.episode}</p>
                   <h3 className="text-lg font-black group-hover:text-pistachio transition-colors">{item.title}</h3>
                   <p className="text-xs text-white/40 font-bold uppercase mt-1 tracking-widest">{item.progress}% Watched</p>
                </div>
             </Link>
           ))}
        </div>
      </section>

      {/* Trending Section */}
      <section className="px-6 md:px-20">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-anime-red/10 rounded-xl flex items-center justify-center text-anime-red border border-anime-red/20">
              <TrendingUp size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-tight">TRENDING <span className="text-anime-red uppercase">Now</span></h2>
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest">Most watched this week</p>
            </div>
          </div>
          <button className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest group">
            View All
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingAnime.map((anime, index) => (
            <AnimeCard key={index} {...anime} />
          ))}
        </div>
      </section>

      {/* Bento Grid - Special Categories */}
      <section className="px-6 md:px-20">
        <div className="bento-grid">
          <div className="bento-item col-span-2 row-span-2 relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-anime-red/20 to-transparent pointer-events-none" />
             <div className="relative z-10 flex flex-col h-full">
                <Sparkles className="text-anime-red mb-4" size={32} />
                <h3 className="text-3xl font-black mb-2">PREMIUM <br/> SELECTIONS</h3>
                <p className="text-white/60 max-w-xs text-sm mb-auto">Curated list of the most stunning animation and storytelling in the industry.</p>
                <button className="w-fit px-6 py-3 bg-white text-black rounded-xl font-bold text-xs hover:bg-anime-red hover:text-white transition-all">Explore Collection</button>
             </div>
             <div className="absolute right-[-10%] bottom-[-10%] w-2/3 aspect-square bg-anime-red/5 blur-3xl rounded-full group-hover:bg-anime-red/10 transition-colors" />
          </div>
          <div className="bento-item col-span-2 flex flex-col justify-center border-l-4 border-electric-blue">
            <h4 className="text-electric-blue font-bold text-xs uppercase tracking-widest mb-1">Coming Soon</h4>
            <h3 className="text-xl font-black uppercase">Solo Leveling: Ragnarok</h3>
            <p className="text-white/40 text-xs mt-2 uppercase font-bold tracking-widest">Summer 2025 • Exclusively on AKAI STREAM</p>
          </div>
          <div className="bento-item col-span-1 bg-pistachio/10 border-pistachio/20">
             <h3 className="text-lg font-black text-pistachio uppercase">Genres</h3>
             <p className="text-[10px] text-pistachio/60 font-bold uppercase mt-1 tracking-widest">24+ Categories</p>
          </div>
          <div className="bento-item col-span-1 flex items-center justify-center group cursor-pointer hover:bg-white/5">
             <div className="text-center">
                <div className="text-2xl font-black group-hover:text-anime-red transition-colors">150+</div>
                <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">New Episodes</div>
             </div>
          </div>
        </div>
      </section>

      {/* New Episodes Section */}
      <section className="px-6 md:px-20">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-electric-blue/10 rounded-xl flex items-center justify-center text-electric-blue border border-electric-blue/20">
              <Play size={20} className="fill-current" />
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-tight">NEW <span className="text-electric-blue uppercase">Releases</span></h2>
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest">Just updated</p>
            </div>
          </div>
          <button className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest group">
            View All
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newEpisodes.map((anime, index) => (
            <AnimeCard key={index} {...anime} />
          ))}
        </div>
      </section>
    </div>
  );
}
