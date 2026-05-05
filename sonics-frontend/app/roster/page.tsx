import Link from 'next/link';
import { Player } from '../../types';

export default async function RosterPage() {
  const response = await fetch('http://localhost:8080/api/player', { 
    cache: 'no-store' 
  });
  const players: Player[] = await response.json();

  if (players.length === 0) {
    return (
      <main className="relative flex h-full items-center justify-center bg-gray-50 overflow-hidden p-6">
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none opacity-[0.03]">
          <div className="text-[20vw] font-black text-sonics-green italic uppercase leading-none">SCOUTING</div>
        </div>
        <div className="relative z-10 text-center border-10 border-sonics-green p-12 bg-white shadow-[20px_20px_0px_0px_#ffc200]">
          <div className="text-6xl mb-4">🏀</div>
          <h1 className="text-5xl font-black text-sonics-green uppercase italic tracking-tighter">
            ROSTER <span className="text-sonics-gold">PENDING</span>
          </h1>
          <p className="text-gray-500 mt-4 max-w-sm font-bold uppercase tracking-tight">
            The front office is finalizing the rotation. Check back soon for the official roster.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link href="/" className="px-6 py-3 border-4 border-sonics-green text-sonics-green font-black italic hover:bg-sonics-green hover:text-white transition-all uppercase">
              Dashboard
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-gray-50 p-8 lg:p-16">
      <div className="fixed inset-0 flex flex-col justify-center items-center pointer-events-none select-none opacity-[0.02] -rotate-12">
        <div className="text-[25vw] font-black text-sonics-green italic uppercase leading-none">EMERALD</div>
        <div className="text-[25vw] font-black text-sonics-green italic uppercase leading-none">CITY</div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16 border-l-12 border-sonics-gold pl-6">
          <h1 className="text-7xl md:text-8xl font-black text-sonics-green italic uppercase tracking-tighter leading-none">
            ACTIVE <br />
            <span className="text-sonics-gold drop-shadow-[4px_4px_0px_rgba(0,101,58,1)]">ROSTER</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {players.map((player) => (
            <div 
              key={player.id} 
              className="group relative bg-white border-4 border-sonics-green p-0 transition-all hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_#00653a]"
            >
              <div className="absolute top-2 right-4 text-8xl font-black text-gray-100 italic group-hover:text-sonics-gold/20 transition-colors">
                {player.number}
              </div>
              <div className="relative z-10">
                <div className="p-8 border-b-4 border-sonics-green">
                  <span className="bg-sonics-gold text-sonics-green px-3 py-1 text-xs font-black uppercase italic border-2 border-sonics-green mb-4 inline-block">
                    {player.position}
                  </span>
                  <h2 className="text-4xl font-black text-sonics-green italic uppercase leading-tight tracking-tighter">
                    {player.firstName} <br />
                    {player.lastName}
                  </h2>
                </div>
                <div className="grid grid-cols-2 divide-x-4 divide-sonics-green">
                  <div className="p-6 bg-sonics-green/5 flex flex-col items-center">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Height</span>
                    <span className="text-2xl font-black text-sonics-green italic">{player.height}</span>
                  </div>
                  <div className="p-6 bg-sonics-green/5 flex flex-col items-center">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Weight</span>
                    <span className="text-2xl font-black text-sonics-green italic">{player.weight} <span className="text-xs">LBS</span></span>
                  </div>
                </div>
                <div className="bg-sonics-green p-4 flex justify-between items-center group-hover:bg-black transition-colors">
                  <span className="text-sonics-gold font-black italic tracking-widest text-sm">SONICS 2.0</span>
                  <div className="h-6 w-12 bg-sonics-gold/30 rounded-sm overflow-hidden flex items-center justify-center">
                     <div className="w-full h-1 bg-sonics-gold/50" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}