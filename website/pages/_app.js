import "../styles/globals.css";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">Business 360 Dashboard</h1>
      <div className="space-x-6">
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <Link href="/dashboard" className="hover:text-blue-400">Dashboard</Link>
        <Link href="/insights" className="hover:text-blue-400">Insights</Link>
        <Link href="/about" className="hover:text-blue-400">About</Link>
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


