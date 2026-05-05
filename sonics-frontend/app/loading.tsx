export default function Loading() {
  return (
    <div className="min-h-100 flex flex-col items-center justify-center bg-gray-50">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-sonics-green border-t-sonics-gold"></div>
      <p className="mt-4 font-black uppercase tracking-widest text-sonics-green animate-pulse">
        Updating Data...
      </p>
    </div>
  );
}