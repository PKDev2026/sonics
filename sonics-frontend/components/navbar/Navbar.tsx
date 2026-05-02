import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-sonicsGreen text-sonicsWhite p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          SEATTLE <span className="text-sonicsGold">SUPERSONICS</span>
        </Link>
        <div className="space-x-6 font-medium">
          <Link href="/" className="hover:text-sonicsGold transition">Home</Link>
          <Link href="/staff" className="hover:text-sonicsGold transition">Staff</Link>
          <Link href="/facility" className="hover:text-sonicsGold transition">Facility</Link>
          <Link href="/roster" className="hover:text-sonicsGold transition">Roster</Link>
          <Link href="/history" className="hover:text-sonicsGold transition">History</Link>
          <Link href="/social_media" className="hover:text-sonicsGold transition">Social Media</Link>
        </div>
      </div>
    </nav>
  );
}