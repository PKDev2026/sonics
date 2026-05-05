export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      <div className="text-center">
        <h1 className="text-6xl font-black text-sonics-green italic">
          SONICS <span className="text-sonics-gold">CENTRAL</span>
        </h1>
        <p className="mt-4 text-xl text-gray-700">
          Welcome to the digital headquarters of the Seattle Supersonics.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <div className="p-4 border-2 border-sonics-green rounded-lg">
            <p className="font-bold text-sonics-green">VERSION 2.0</p>
          </div>
        </div>
      </div>
    </main>
  );
}