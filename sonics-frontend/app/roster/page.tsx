import { Player } from '../../types'; // or '@/types' if the fix above is done

export default async function RosterPage() {
  const response = await fetch('http://localhost:8080/api/player', { 
    cache: 'no-store' 
  });
  const players: Player[] = await response.json();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
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