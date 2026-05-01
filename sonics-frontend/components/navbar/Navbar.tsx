import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-sonicsGreen text-sonicsWhite p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          SEATTLE <span className="text-sonicsGold">SUPERSONICS</span>
        </Link>
        <div className="space-x-6 font-medium">
          <Link href="/stadium" className="hover:text-sonicsGold transition">Stadium</Link>
          <Link href="/roster" className="hover:text-sonicsGold transition">Roster</Link>
          <Link href="/history" className="hover:text-sonicsGold transition">History</Link>
          <Link href="/bellevue" className="hover:text-sonicsGold transition">Bellevue Compound</Link>
        </div>
      </div>
    </nav>
  );
}