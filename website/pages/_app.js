import "../styles/globals.css";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                    text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold tracking-wide">🚀 Business 360</h1>
      <div className="space-x-6">
        <Link href="/" className="hover:text-yellow-300 font-medium">Home</Link>
        <Link href="/dashboard" className="hover:text-yellow-300 font-medium">Dashboard</Link>
        <Link href="/insights" className="hover:text-yellow-300 font-medium">Insights</Link>
        <Link href="/about" className="hover:text-yellow-300 font-medium">About</Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-12 border-t">
      <p className="text-sm text-gray-600">
        © 2025 Hrithik Deep – Business 360 Dashboard
      </p>
    </footer>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}


