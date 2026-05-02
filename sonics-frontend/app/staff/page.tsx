import { Staff } from '../types';
import Link from 'next/link'; // 1. Always import the Link component

export default async function StaffPage() {
  const response = await fetch('http://localhost:8080/api/staff', { cache: 'no-store' });
  const staffMembers: Staff[] = await response.json();
  console.log("STAFF DATA:", staffMembers);

  if (!staffMembers || staffMembers.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
        <div className="text-center p-12 bg-white rounded-2xl shadow-sm border border-gray-200">
          <div className="text-6xl mb-4">📋</div>
          <h2 className="text-2xl font-bold text-gray-800">No Staff Found</h2>
          <p className="text-gray-500 mt-2">
            The front office directory is currently being updated.
          </p>
          
          {/* 2. Replace <a> with <Link> */}
          <Link 
            href="/" 
            className="mt-6 inline-block text-sonics-green font-bold hover:underline"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-black text-sonics-green mb-10 italic uppercase">
          Front <span className="text-sonics-gold">Office</span>
        </h1>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-sonics-green text-white uppercase text-sm">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Role</th>
                <th className="p-4">Department</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {staffMembers.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50 transition">
                  <td className="p-4 font-bold">{member.name}</td>
                  <td className="p-4 text-gray-600">{member.role}</td>
                  <td className="p-4 text-sm font-semibold text-sonics-green">
                    {member.department}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}