import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen 
                    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                    text-white px-6 text-center">
      
      {/* Hero Section */}
      <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
        🚀 Business 360 Dashboard
      </h1>
      
      <p className="text-lg max-w-2xl mb-10 drop-shadow-md">
        A unified view of <span className="font-semibold">Sales</span>,{" "}
        <span className="font-semibold">HR</span>, and{" "}
        <span className="font-semibold">Retail</span> performance. <br />
        Built to showcase end-to-end data analysis, KPI generation,
        visualization, and deployment skills.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <Link
          href="/dashboard"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200"
        >
          📊 View Dashboard
        </Link>
        <Link
          href="/insights"
          className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200"
        >
          📑 Read Insights
        </Link>
        <Link
          href="/about"
          className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow-lg hover:bg-gray-200"
        >
          👨‍💻 About Me
        </Link>
      </div>
    </div>
  );
}
