import { SocialMedia } from '../../types';

export default async function SocialPage() {
  const response = await fetch('http://localhost:8080/api/social_media', { cache: 'no-store' });
  const links: SocialMedia[] = await response.json();

  return (
    <main className="relative flex h-full items-center justify-center bg-gray-50 overflow-hidden p-6">
      
      {/* 1. GHOST TEXT: Keeping the brand consistency with the home page */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none opacity-[0.03] rotate-12 scale-150">
        <div className="text-[15vw] font-black text-sonics-green italic leading-none tracking-tighter uppercase">
          CONNECT
        </div>
        <div className="text-[15vw] font-black text-sonics-green italic leading-none tracking-tighter uppercase">
          NETWORK
        </div>
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        {/* Header with that "Hard Shadow" style */}
        <div className="mb-12 text-center">
            <h1 className="inline-block text-6xl md:text-8xl font-black text-sonics-green italic uppercase tracking-tighter bg-white border-8 border-sonics-green px-8 py-4 shadow-[12px_12px_0px_0px_#ffc200]">
                FOLLOW <span className="text-sonics-gold drop-shadow-[2px_2px_0px_rgba(0,101,58,1)]">US</span>
            </h1>
        </div>

        {/* 2. THE GRID: Breaking the "Basic List" habit */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link) => (
            <a 
              key={link.id} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-white border-4 border-sonics-green p-8 transition-all hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_#00653a]"
            >
              {/* Platform Tag */}
              <div className="absolute -top-4 -right-2 bg-sonics-gold text-sonics-green px-3 py-1 text-xs font-black uppercase italic border-2 border-sonics-green">
                {link.platform}
              </div>

              <div className="flex flex-col h-full justify-between">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Official Handle</p>
                  <h2 className="text-2xl font-black text-sonics-green break-all leading-none uppercase italic">
                    {link.handle}
                  </h2>
                </div>
                
                <div className="mt-8 flex items-center gap-2 text-sonics-green font-black text-sm uppercase italic">
                  <span>Visit Profile</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Detail */}
        <div className="mt-12 text-center">
            <p className="text-sonics-green font-black italic tracking-widest uppercase text-sm">
                #BringBackOurSonics // #SeattleBasketball
            </p>
        </div>
      </div>
    </main>
  );
}