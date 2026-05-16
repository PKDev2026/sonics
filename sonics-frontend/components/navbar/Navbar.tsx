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
          <Link href="/store" className="hover:text-sonics-gold transition">Store</Link>
          <Link href="/social_media" className="hover:text-sonics-gold transition">Social Media</Link>
          <Link 
            href="/registry"
            className="bg-sonics-gold border-2 border-sonics-green px-4 py-2 text-xs md:text-sm font-black 
            stext-sonics-green uppercase italic hover:bg-sonics-green hover:text-white transition-all 
            shadow-[4px_4px_0px_0px_#00653a] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
}