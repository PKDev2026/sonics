import { Staff } from '../../types';

export default async function StaffPage() {
  const response = await fetch('http://localhost:8080/api/staff', { 
    cache: 'no-store' 
  });
  const staffMembers: Staff[] = await response.json();
  const departments = {
    "Ownership": staffMembers.filter(s => s.department === "Ownership"),
    "Basketball Operations": staffMembers.filter(s => s.department === "Basketball Operations"),
    "Business Operations": staffMembers.filter(s => s.department === "Business Operations")
  };

  return (
    <main className="relative min-h-screen bg-gray-50 p-6 lg:p-20 overflow-x-hidden">
      <div className="fixed inset-0 flex flex-col justify-center items-center pointer-events-none select-none opacity-[0.02]">
        <div className="text-[20vw] font-black text-sonics-green italic uppercase leading-none">OFFICE</div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <header className="mb-24">
          <h1 className="text-7xl md:text-9xl font-black text-sonics-green italic uppercase tracking-tighter leading-none">
            FRONT <span className="text-sonics-gold drop-shadow-[4px_4px_0px_rgba(0,101,58,1)]">OFFICE</span>
          </h1>
        </header>
        {(Object.entries(departments) as [keyof typeof departments, Staff[]][]).map(([deptName, members]) => {
          if (members.length === 0)
          {
            return null;
          }

          return (
            <section key={deptName} className="mb-32">
              <div className="flex items-end gap-4 mb-12 border-b-8 border-sonics-green pb-4">
                <h2 className="text-4xl md:text-5xl font-black text-sonics-green uppercase italic tracking-tighter">
                  {deptName}
                </h2>
                <span className="text-sonics-gold font-black mb-1">- {members.length} MEMBERS</span>
              </div>
              <div className={`grid gap-8 ${
                deptName === "Ownership" 
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}>
                {members.map((member) => (
                  <div key={member.id} className="group relative">
                    <div className={`relative bg-white border-4 border-sonics-green p-8 transition-all 
                      ${deptName === "Ownership" 
                        ? "shadow-[16px_16px_0px_0px_#ffc200] border-t-16"
                        : "shadow-[10px_10px_0px_0px_#00653a] hover:shadow-[10px_10px_0px_0px_#ffc200]"
                      }`}>
                      <div className="flex flex-col h-full">
                        <span className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
                          {member.role}
                        </span>
                        <h3 className={`font-black text-sonics-green italic uppercase leading-none tracking-tighter mb-4
                          ${deptName === "Ownership" ? "text-5xl" : "text-3xl"}`}>
                          {member.name}
                        </h3>
                        <div className="mt-auto pt-6 flex justify-between items-center border-t border-gray-100">
                          <span className="text-[10px] font-bold text-gray-400 uppercase">Employee Verified</span>
                          <div className="flex gap-1">
                            <div className="w-1 h-3 bg-sonics-gold" />
                            <div className="w-4 h-3 bg-sonics-green" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
        <footer className="mt-20 py-10 border-t-4 border-dashed border-gray-200 text-center">
          <p className="text-sonics-green font-black italic tracking-[0.3em] uppercase text-sm">
            Confidential Roster // Seattle Supersonics HQ
          </p>
        </footer>
      </div>
    </main>
  );
}