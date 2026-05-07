import Image from 'next/image';
import { TeamStoreProduct } from '../../types/index';

export default async function StorePage() {
  const response = await fetch('http://localhost:8080/api/store', { cache: 'no-store' });
  const products: TeamStoreProduct[] = await response.json();
  console.log(products);
//   const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <main className="relative h-full bg-gray-50 p-6 lg:p-20 overflow-x-hidden">
        <div className="fixed inset-0 flex flex-col justify-center items-center pointer-events-none select-none opacity-[0.02] -rotate-12">
            <div className="text-[20vw] font-black text-sonics-green italic uppercase leading-none">THE</div>
            <div className="text-[20vw] font-black text-sonics-green italic uppercase leading-none">SHOP</div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
            <header className="mb-16">
            <h1 className="text-7xl md:text-9xl font-black text-sonics-green italic uppercase tracking-tighter leading-none">
                TEAM <span className="text-sonics-gold drop-shadow-[4px_4px_0px_rgba(0,101,58,1)]">STORE</span>
            </h1>
            <p className="mt-4 text-xl font-bold text-gray-500 uppercase tracking-[0.2em] italic">
                Official Team Merchandise
            </p>
            </header>
            <div className="flex gap-4 mb-12 border-b-4 border-gray-200 pb-6 overflow-x-auto">
            <button className="px-6 py-2 bg-sonics-green text-white font-black italic uppercase text-sm border-2 border-sonics-green">
                All Gear
            </button>
            {/* {categories.map(cat => (
                <button key={cat} className="px-6 py-2 border-2 border-gray-300 text-gray-400 font-black italic uppercase text-sm hover:border-sonics-green hover:text-sonics-green transition-all">
                {cat}
                </button>
            ))} */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
                <div key={product.id} className="group relative flex flex-col">
                    <div className="relative aspect-4/5 bg-white border-4 border-sonics-green overflow-hidden shadow-[12px_12px_0px_0px_#00653a] group-hover:shadow-[12px_12px_0px_0px_#ffc200] transition-all">
                        {product.imageUrl ? (
                            <Image 
                                src={product.imageUrl} 
                                alt={product.name}
                                fill 
                                className="object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            ) : (
                            <div className="flex items-center justify-center h-full bg-gray-100 text-gray-300 font-black italic uppercase">
                                Asset_Pending
                            </div>
                        )}
                        <div className={`absolute top-4 right-4 px-3 py-1 font-black italic uppercase text-[10px] border-2 rotate-12 ${
                            product.status === 'In Stock' 
                                ? 'bg-sonics-green text-white border-white' 
                                : 'bg-sonics-gold text-sonics-green border-sonics-green'
                        }`}>
                            {product.status}
                        </div>
                    </div>
                <div className="mt-6 flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                        <h2 className="text-2xl font-black text-sonics-green uppercase italic tracking-tighter leading-none">
                            {product.name}
                        </h2>
                        <span className="text-xl font-black text-sonics-green bg-sonics-gold px-2 italic">
                            ${product.price}
                        </span>
                    </div>
                    {/* <p className="text-xs font-bold text-gray-400 uppercase tracking-widest italic">
                        Category: {product.category}
                    </p>
                    <p className="text-sm text-gray-600 font-medium leading-tight mt-2 uppercase">
                        {product.description}
                    </p>
                    <button className="mt-4 w-full py-3 border-2 border-sonics-green text-sonics-green font-black italic uppercase hover:bg-sonics-green hover:text-white transition-all">
                        View Details
                    </button> */}
                </div>
                </div>
            ))}
            </div>
            <footer className="mt-32 border-t-4 border-sonics-green pt-10 text-center">
            <p className="text-xs font-black text-gray-300 uppercase tracking-[0.5em]">
                Official Merchandising Division
            </p>
            </footer>
        </div>
    </main>
  );
}