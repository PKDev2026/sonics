export default function Home() {
  return (
    <main className="relative flex h-full items-center justify-center bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none">
        <div className="text-[20vw] font-black text-gray-200/50 italic leading-none tracking-tighter uppercase">
          SEATTLE
        </div>
        <div className="text-[20vw] font-black text-gray-200/50 italic leading-none tracking-tighter uppercase">
          SONICS
        </div>
      </div>
      <div className="relative z-10 text-center">
        <div className="w-24 h-2 bg-sonics-green mx-auto mb-8" />
        <div className="border-10 border-sonics-green p-12 md:p-20 bg-white shadow-[20px_20px_0px_0px_#ffc200]">
          <h1 className="text-7xl md:text-9xl font-black text-sonics-green italic tracking-tighter leading-none uppercase">
            SONICS <br />
            <span className="text-sonics-gold drop-shadow-[4px_4px_0px_rgba(0,101,58,1)]">CENTRAL</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-600 max-w-lg mx-auto font-bold uppercase tracking-tight">
            Digital Headquarters: Version 2.0
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-sonics-green text-white font-black italic hover:bg-black transition-colors rounded-none uppercase tracking-widest">
              The Roster
            </button>
            <button className="px-8 py-4 border-4 border-sonics-green text-sonics-green font-black italic hover:bg-sonics-green hover:text-white transition-all rounded-none uppercase tracking-widest">
              Our History
            </button>
          </div>
        </div>
        <div className="mt-8 font-black text-sonics-green text-sm tracking-[0.3em] uppercase">
          Bringing Basketball Back to the 206
        </div>
      </div>
    </main>
  );
}