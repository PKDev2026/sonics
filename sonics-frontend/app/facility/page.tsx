import Image from 'next/image';
import { Facility } from '../../types';

export default async function FacilitiesPage() {
  const response = await fetch('http://localhost:8080/api/facilities', { cache: 'no-store' });
  const facilities: Facility[] = await response.json();

  return (
    <main className="relative min-h-screen bg-gray-50 p-6 lg:p-20 overflow-x-hidden">
      <div className="fixed inset-0 flex flex-col justify-center items-center pointer-events-none select-none opacity-[0.02] rotate-12">
        <div className="text-[20vw] font-black text-sonics-green italic uppercase leading-none">FACILITIES</div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <header className="mb-20">
          <h1 className="text-7xl md:text-9xl font-black text-sonics-green italic uppercase tracking-tighter leading-none">
            THE <span className="text-sonics-gold drop-shadow-[4px_4px_0px_rgba(0,101,58,1)]">COMPOUND</span>
          </h1>
          <p className="mt-4 text-xl font-bold text-gray-500 uppercase tracking-[0.2em] italic">
            Elite Infrastructure // World-Class Standards
          </p>
        </header>
        <div className="space-y-24">
          {facilities.map((place) => (
            <div key={place.id} className="relative group">
              <div className="absolute -top-12 -left-4 text-8xl font-black text-gray-100 italic select-none group-hover:text-sonics-gold/10 transition-colors">
                {place.category.split(' ')[0]}
              </div>
              <div className="relative bg-white border-4 border-sonics-green shadow-[20px_20px_0px_0px_#00653a] flex flex-col lg:flex-row overflow-hidden">
                <div className="lg:w-2/5 h-80 lg:h-auto relative bg-gray-200 border-b-4 lg:border-b-0 lg:border-r-4 border-sonics-green">
                  {place.imageUrl ? (
                    <Image 
                      src={place.imageUrl} 
                      alt={place.name}
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 font-black italic tracking-widest">
                      IMG_NOT_FOUND
                    </div>
                  )}
                  <div className="absolute top-0 left-0 bg-sonics-gold text-sonics-green px-6 py-2 font-black italic uppercase border-b-4 border-r-4 border-sonics-green">
                    {place.category}
                  </div>
                </div>
                <div className="lg:w-3/5 p-8 md:p-12">
                  <div className="mb-6">
                    <h2 className="text-4xl md:text-5xl font-black text-sonics-green uppercase italic tracking-tighter leading-none mb-2">
                      {place.name}
                    </h2>
                    <p className="text-sonics-gold font-black uppercase text-sm tracking-widest italic flex items-center gap-2">
                       <span className="w-8 h-1 bg-sonics-gold" /> {place.locationAddress}
                    </p>
                  </div>
                  <p className="text-gray-600 text-lg font-medium leading-relaxed mb-8 uppercase tracking-tight">
                    {place.description}
                  </p>
                  <div className="border-t-2 border-gray-100 pt-8">
                    <h3 className="text-xs font-black text-gray-300 uppercase tracking-[0.3em] mb-6">Facility Amenities</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {place.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2">
                           <div className="w-2 h-2 bg-sonics-green rotate-45" />
                           <span className="text-[10px] md:text-xs font-black text-sonics-green uppercase italic tracking-wider">
                             {amenity}
                           </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-sonics-green/5 flex items-center justify-center border-t-2 border-l-2 border-transparent group-hover:border-sonics-green/20 group-hover:bg-sonics-gold transition-all">
                   <div className="w-1 h-1 bg-sonics-green rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <footer className="mt-32 text-center pb-20">
           <div className="inline-block border-2 border-dashed border-gray-300 p-8">
            <p className="text-gray-300 font-black italic uppercase tracking-[0.4em] text-xs">
              Restricted Access // Sonics Personnel Only
            </p>
           </div>
        </footer>
      </div>
    </main>
  );
}