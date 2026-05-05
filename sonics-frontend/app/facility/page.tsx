import Image from 'next/image';
import { Facility } from '../../types';

export default async function FacilitiesPage() {
  const response = await fetch('http://localhost:8080/api/facilities', { cache: 'no-store' });
  const facilities: Facility[] = await response.json();
  console.log(facilities);

  return (
    <main className=" bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-sonics-green mb-10 italic uppercase">
          The <span className="text-sonics-gold">Compound</span>
        </h1>
        <div className="grid grid-cols-1 gap-8">
          {facilities.map((place) => (
            <div key={place.id} className="bg-white rounded-2xl shadow-md p-8 border-t-8 border-sonics-green flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <span className="text-xs font-black uppercase tracking-widest text-sonics-gold">{place.category}</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-1">{place.name}</h2>
                <p className="text-gray-500 mt-2 italic">{place.locationAddress}</p>
                <p className="mt-4 text-gray-700 leading-relaxed">{place.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {place.amenities.map((amenity, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative md:w-64 h-48 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 group">
                {place.imageUrl ? (
                  <Image 
                    src={place.imageUrl} 
                    alt={place.name}
                    fill 
                    className="object-cover transition-all duration-700 ease-in-out" 
                    sizes="(max-width: 768px) 100vw, 256px"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 font-bold uppercase tracking-widest bg-gray-100">
                    No Photo
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}