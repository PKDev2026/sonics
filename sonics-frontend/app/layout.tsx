import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 flex flex-col h-screen overflow-hidden">
        <Navbar />
        {/* flex-1 makes this container take up all remaining space below the navbar */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}