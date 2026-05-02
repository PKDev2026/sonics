import { Milestone } from '../types/index'

export default async function HistoryPage() {

  // 1. Fetch the data from your Spring Boot API
  const response = await fetch('http://localhost:8080/api/history_milestone', { 
    cache: 'no-store' 
  });

  const milestones = await response.json();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-sonics-green mb-10 italic">
          TIMELINE <span className="text-gray-400">/</span> HISTORY
        </h1>

        <div className="space-y-6">
          {milestones.map((item: Milestone) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-sonics-gold">
              <span className="text-sonics-green font-bold text-xl">{item.year}</span>
              <h2 className="text-xl font-bold uppercase mt-1">{item.event}</h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}