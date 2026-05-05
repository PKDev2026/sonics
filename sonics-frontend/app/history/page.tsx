import Image from 'next/image';
import { Milestone } from '../../types';

export default async function HistoryPage() {
  // Use the EXACT mapping from your Java Controller: /api/history_milestone
  const response = await fetch('http://localhost:8080/api/history_milestone', { 
    cache: 'no-store' 
  });

  // 1. Safety check for the 404 or Server Errors
  if (!response.ok) {
    return (
      <main className=" bg-gray-50 p-8 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-xl shadow-md border border-red-200">
          <h1 className="text-2xl font-bold text-red-600">Connection Error</h1>
          <p className="text-gray-600 mt-2">Could not reach the Sonics API (Status: {response.status})</p>
        </div>
      </main>
    );
  }

  const data = await response.json();
  // 2. Ensure data is an array before mapping
  const milestones: Milestone[] = Array.isArray(data) ? data : [];
  console.log(milestones);

  return (
    <main className=" bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-black text-sonics-green italic uppercase tracking-tighter">
            Timeline <span className="text-sonics-gold">/</span> History
          </h1>
          <div className="h-2 w-24 bg-sonics-gold mt-2"></div>
        </header>

        <div className="space-y-12">
          {milestones.map((item: Milestone) => (
            <div 
              key={item.id} 
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image Section */}
              <div className="md:w-1/3 h-64 relative overflow-hidden bg-gray-200">
                {item.imageUrl ? (
                  <Image 
                    src={item.imageUrl} 
                    alt={item.event}
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 font-bold uppercase tracking-widest bg-gray-100">
                    No Photo
                  </div>
                )}
                
                {item.isChampionship && (
                  <div className="absolute top-4 left-4 bg-sonics-gold text-sonics-green font-black px-4 py-1 rounded-full text-[10px] uppercase shadow-lg z-10 border border-sonics-green/20">
                    🏆 Champions
                  </div>
                )}
              </div>

              {/* Text Section */}
              <div className="p-8 md:w-2/3 flex flex-col justify-center border-l border-gray-100">
                <span className="text-sonics-green font-black text-4xl tracking-tighter opacity-80">
                  {item.year}
                </span>
                <h2 className="text-2xl font-bold uppercase mt-1 text-gray-900 group-hover:text-sonics-green transition-colors">
                  {item.event}
                </h2>
                <p className="text-gray-600 mt-4 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}