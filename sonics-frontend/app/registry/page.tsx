export default function TicketRegistry() {
  return (
    <main className="relative h-full bg-gray-50 p-4 lg:p-8 flex items-center justify-center overflow-hidden">
      <div className="fixed inset-0 flex flex-col justify-center items-center pointer-events-none select-none opacity-[0.02] -rotate-6">
        <div className="text-[18vw] font-black text-sonics-green italic uppercase leading-none">RESERVE</div>
        <div className="text-[18vw] font-black text-sonics-green italic uppercase leading-none">PRIORITY</div>
      </div>
      <div className="relative z-10 max-w-2xl w-full mx-auto">
        <header className="mb-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-black text-sonics-green italic uppercase tracking-tighter leading-none">
            PRIORITY <span className="text-sonics-gold drop-shadow-[3px_3px_0px_rgba(0,101,58,1)]">ACCESS</span>
          </h1>
          <p className="mt-6 text-lg font-bold text-gray-500 uppercase italic">
            Secure your season tickets for the return of the Sonics.
          </p>
        </header>
        <div className="relative bg-white border-4 border-sonics-green p-6 md:p-8 shadow-[16px_16px_0px_0px_#00653a]">
          <div className="flex justify-between items-center border-b-2 border-gray-100 pb-4 mb-6">
            <p className="text-[10px] font-black text-sonics-green uppercase italic">Season Ticket Application v2.1</p>
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-sonics-gold" />
              <div className="w-4 h-3 bg-sonics-green" />
            </div>
          </div>
          <form className="space-y-5">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-black text-sonics-green uppercase tracking-widest italic">Full Name</label>
                <input 
                  type="text" 
                  placeholder="GARY PAYTON"
                  className="bg-gray-50 border-2 border-gray-200 p-3 text-sm font-bold text-sonics-green focus:border-sonics-green focus:outline-none transition-colors uppercase italic"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-black text-sonics-green uppercase tracking-widest italic">Email Address</label>
                <input 
                  type="email" 
                  placeholder="GARY@SONICSCENTRAL.COM"
                  className="bg-gray-50 border-2 border-gray-200 p-3 text-sm font-bold text-sonics-green focus:border-sonics-green focus:outline-none transition-colors uppercase italic"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-black text-sonics-green uppercase tracking-widest italic">Seating Preference</label>
              <select className="bg-gray-50 border-2 border-gray-200 p-3 text-sm font-bold text-sonics-green focus:border-sonics-green focus:outline-none transition-colors uppercase italic appearance-none cursor-pointer">
                <option>Floor Seats</option>
                <option>Lower Bowl</option>
                <option>Upper Deck</option>
                <option>Executive Suites</option>
              </select>
            </div>
            <div className="flex items-start gap-3 py-2">
                <input type="checkbox" className="mt-1 w-4 h-4 border-2 border-sonics-green accent-sonics-green cursor-pointer" />
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tight leading-tight">
                    I agree to be contacted for official news & updates.
                </span>
            </div>
            <button className="w-full py-4 bg-sonics-green text-white font-black text-xl italic uppercase tracking-tighter hover:bg-black transition-all flex items-center justify-center gap-2">
                Register Now →
            </button>
          </form>
        </div>
        <div className="mt-6 text-center">
            <p className="text-gray-300 font-black italic tracking-[0.3em] uppercase text-[9px]">
                #BringBackOurSonics // 2026 Registry
            </p>
        </div>
      </div>
    </main>
  );
}