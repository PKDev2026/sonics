export default function Home() {
  return (
    <main className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-green-950">
      <div className="absolute inset-0 z-0 bg-green-950">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full opacity-40 blur-[120px]"
          style={{ backgroundColor: '#00653a' }} 
        />
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-20 blur-[120px]"
          style={{ backgroundColor: '#ffc200' }} 
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,101,58,0.15)_0%,transparent_70%)]" />
      </div>
      <div className="relative z-10 w-full max-w-4xl mx-4 p-8 md:p-16 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 mb-6 rounded-full border border-sonics-gold/30 bg-sonics-gold/10 text-sonics-gold text-xs font-bold tracking-widest uppercase">
            Seattle, Washington
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter">
            SONICS <span className="text-sonics-gold">CENTRAL</span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-xl mx-auto">
            The digital headquarters for the next era of SuperSonics basketball.
          </p>
        </div>
      </div>
    </main>
  );
}