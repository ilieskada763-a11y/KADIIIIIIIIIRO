import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative h-[80vh] w-full flex items-center px-10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.alphacoders.com/124/1248061.jpg"
          alt="Cyberpunk Edgerunners"
          fill
          className="object-cover opacity-40 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-0.5 w-10 bg-anime-red" />
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-anime-red">Trending Now</p>
        </div>
        <h1 className="text-8xl font-black uppercase tracking-tighter leading-[0.8]">
          Cyberpunk <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-anime-red to-blue-500">Edgerunners</span>
        </h1>
        <p className="mt-8 text-lg text-white/60 leading-relaxed max-w-lg">
          In a dystopia riddled with corruption and cybernetic implants, a talented but reckless street kid strives to become a mercenary outlaw.
        </p>
        <div className="flex gap-4 mt-10">
          <button className="px-10 py-4 bg-anime-red text-white font-bold rounded-2xl hover:shadow-[0_0_30px_#FF1A1A] transition-all">
            WATCH NOW
          </button>
          <button className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
            DETAILS
          </button>
        </div>
      </div>
    </div>
  );
}
