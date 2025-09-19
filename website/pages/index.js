 import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen 
                    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                    text-white px-6 text-center">
      <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
        🚀 Business 360 Dashboard
      </h1>
      <p className="text-lg max-w-2xl mb-10 drop-shadow-md">
        Unified insights for <span className="font-semibold">Sales</span>,{" "}
        <span className="font-semibold">HR</span>, and{" "}
        <span className="font-semibold">Retail</span>. <br />
        Showcase of analytics, KPIs, visualization, and deployment skills.
      </p>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <Link href="/dashboard" 
          className="px-6 py-3 bg-white/20 backdrop-blur-lg text-white font-semibold 
                     rounded-xl shadow-lg hover:scale-105 hover:bg-white/30 transition">
          📊 View Dashboard
        </Link>
        <Link href="/insights" 
          className="px-6 py-3 bg-white/20 backdrop-blur-lg text-white font-semibold 
                     rounded-xl shadow-lg hover:scale-105 hover:bg-white/30 transition">
          📑 Read Insights
        </Link>
        <Link href="/about" 
          className="px-6 py-3 bg-white/20 backdrop-blur-lg text-white font-semibold 
                     rounded-xl shadow-lg hover:scale-105 hover:bg-white/30 transition">
          👨‍💻 About Me
        </Link>
      </div>
    </div>
  );
}
