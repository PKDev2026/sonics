import Link from 'next/link';
import { Player } from '../../types'; // or '@/types' if the fix above is done

export default async function RosterPage() {
  const response = await fetch('http://localhost:8080/api/player', { 
    cache: 'no-store' 
  });
  const players: Player[] = await response.json();

  if (players.length === 0) {
    return (
      <main className="bg-gray-50 flex flex-col h-full items-center justify-center p-8 text-center">
        <div className="max-w-md bg-white p-10 rounded-3xl shadow-xl border-t-8 border-sonics-green">
          <div className="text-6xl mb-6 animate-bounce">🏀</div>
          <h1 className="text-3xl font-black text-sonics-green uppercase italic tracking-tight">
            Scouting in <span className="text-sonics-gold">Progress</span>
          </h1>
          <p className="text-gray-600 mt-4 leading-relaxed">
            We are currently finalizing the roster for the upcoming season. Check back soon to see the starting lineup for the return of your Sonics!
          </p>
          <div className="mt-8 space-y-4">
            <Link 
              href="/" 
              className="block w-full py-3 border-2 border-sonics-green text-sonics-green font-bold rounded-lg hover:bg-gray-50 transition"
            >
              Return to Dashboard
            </Link>
            <Link 
              href="/staff" 
              className="block w-full py-3 border-2 border-sonics-green text-sonics-green font-bold rounded-lg hover:bg-gray-50 transition"
            >
              View Team Staff
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-sonics-green mb-10 italic uppercase">
          Active <span className="text-sonics-gold">Roster</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player) => (
            <div key={player.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition">
              <div className="bg-sonics-green p-4 flex justify-between items-center">
                <span className="text-sonics-gold text-2xl font-black">#{player.number}</span>
                <span className="text-white font-bold uppercase tracking-widest">{player.position}</span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {player.firstName} {player.lastName}
                </h2>
                <div className="mt-4 flex gap-4 text-sm text-gray-500 font-medium">
                  <div className="flex flex-col">
                    <span>HEIGHT</span>
                    <span className="text-gray-900">{player.height}</span>
                  </div>
                  <div className="flex flex-col border-l pl-4">
                    <span>WEIGHT</span>
                    <span className="text-gray-900">{player.weight} lbs</span>
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