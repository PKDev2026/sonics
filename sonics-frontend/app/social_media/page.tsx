import { SocialMedia } from '../types';

export default async function SocialPage() {
  const response = await fetch('http://localhost:8080/api/social_media', { cache: 'no-store' });
  const links: SocialMedia[] = await response.json();

  return (
    <main className="min-h-screen bg-sonics-green p-8 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-black text-white mb-10 text-center italic uppercase">
          Follow <span className="text-sonics-gold">The Boom</span>
        </h1>
        <div className="space-y-4">
          {links.map((link) => (
            <a 
              key={link.id} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white/10 hover:bg-white/20 border border-white/20 p-6 rounded-2xl transition group"
            >
              <div className="flex flex-col">
                <span className="text-sonics-gold font-black uppercase text-sm tracking-tighter">{link.platform}</span>
                <span className="text-white text-xl font-bold">{link.handle}</span>
              </div>
              <div className="text-white group-hover:translate-x-2 transition">
                →
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}