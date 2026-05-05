import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="top-0 left-0 w-full z-50 bg-sonics-green text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter italic">
          SEATTLE <span className="text-sonics-gold">SUPERSONICS</span>
        </Link>
        <div className="space-x-6 font-medium">
          <Link href="/" className="hover:text-sonics-gold transition">Home</Link>
          <Link href="/staff" className="hover:text-sonics-gold transition">Staff</Link>
          <Link href="/facility" className="hover:text-sonics-gold transition">Facility</Link>
          <Link href="/roster" className="hover:text-sonics-gold transition">Roster</Link>
          <Link href="/history" className="hover:text-sonics-gold transition">History</Link>
          <Link href="/social_media" className="hover:text-sonics-gold transition">Social Media</Link>
        </div>
      </div>
    </nav>
  );
}