import { Staff } from '../types';

export default async function StaffPage() {
  const response = await fetch('http://localhost:8080/api/staff', { cache: 'no-store' });
  const staffMembers: Staff[] = await response.json();

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
                  <td className="p-4 font-bold">{member.fullName}</td>
                  <td className="p-4 text-gray-600">{member.role}</td>
                  <td className="p-4 text-sm font-semibold text-sonics-green">{member.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}