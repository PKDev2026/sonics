import Image from 'next/image';
import { Milestone } from '../../types';

export default async function HistoryPage() {
  const response = await fetch('http://localhost:8080/api/history_milestone', { 
    cache: 'no-store' 
  });

  if (!response.ok) {
    return (
      <main className="relative flex h-full items-center justify-center bg-gray-50 p-6">
        <div className="relative z-10 text-center border-10 border-red-600 p-12 bg-white shadow-[20px_20px_0px_0px_#000]">
          <h1 className="text-4xl font-black text-red-600 uppercase italic">Connection Error</h1>
          <p className="text-gray-500 mt-2 font-bold italic">API UNREACHABLE // STATUS: {response.status}</p>
        </div>
      </main>
    );
  }

  const data = await response.json();
  const milestones: Milestone[] = Array.isArray(data) ? data : [];

  return (
    <main className="relative min-h-screen bg-gray-50 p-6 lg:p-20 overflow-x-hidden">
      <div className="fixed inset-0 flex flex-col justify-center items-center pointer-events-none select-none opacity-[0.02] rotate-90">
        <div className="text-[30vw] font-black text-sonics-green italic uppercase leading-none">LEGACY</div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <header className="mb-24 relative">
          <div className="absolute -left-10 top-0 w-2 h-full bg-sonics-gold hidden md:block" />
          <h1 className="text-7xl md:text-9xl font-black text-sonics-green italic uppercase tracking-tighter leading-none">
            THE <br />
            <span className="text-sonics-gold drop-shadow-[4px_4px_0px_rgba(0,101,58,1)]">TIMELINE</span>
          </h1>
          <p className="mt-6 text-xl font-bold text-gray-500 uppercase tracking-widest italic">
            Decades of dominance in the 206
          </p>
        </header>
        <div className="relative space-y-32">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-sonics-green/10 md:-translate-x-1/2" />
          {milestones.map((item: Milestone, index: number) => (
            <div 
              key={item.id} 
              className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
            >
              <div
                className={`absolute -top-16 ${index % 2 === 0 ? 'md:-left-10' : 'md:-right-10'} text-8xl md:text-9xl font-black 
                text-gray-100 italic z-0 select-none group-hover:text-sonics-gold/20 transition-colors`}
              >
                {item.year}
              </div>
              <div className="w-full md:w-1/2 z-10">
                <div className="relative border-4 border-sonics-green shadow-[12px_12px_0px_0px_#00653a] overflow-hidden group">
                  <div className="h-80 relative">
                    {item.imageUrl ? (
                      <Image 
                        src={item.imageUrl} 
                        alt={item.event}
                        fill 
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                        sizes="50vw"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-gray-200 text-gray-400 font-black italic">
                        ARCHIVE_IMG_NULL
                      </div>
                    )}
                  </div>
                  {item.isChampionship && (
                    <div className="absolute bottom-0 right-0 bg-sonics-gold text-sonics-green font-black px-6 py-2 italic uppercase border-t-4 border-l-4 border-sonics-green">
                      🏆 CHAMPIONS
                    </div>
                  )}
                </div>
              </div>
              <div className={`w-full md:w-1/2 p-8 md:p-12 z-20 ${index % 2 === 0 ? 'md:pl-20' : 'md:pr-20'}`}>
                <div className="inline-block bg-sonics-green text-white px-4 py-1 font-black italic text-2xl mb-4">
                  {item.year}
                </div>
                <h2 className="text-4xl font-black text-sonics-green uppercase italic leading-none mb-4 tracking-tighter">
                  {item.event}
                </h2>
                <div className="w-12 h-1 bg-sonics-gold mb-6" />
                <p className="text-lg text-gray-600 font-bold leading-tight uppercase">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <footer className="mt-40 text-center">
          <div className="inline-block border-t-4 border-sonics-green pt-8">
            <p className="text-sonics-green font-black italic tracking-[0.5em] uppercase">
              More History to be Written
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}