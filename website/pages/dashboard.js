export default function Dashboard() {
  // fake KPI demo data
  const kpis = {
    superstore: 125000,
    hr_attrition: "12%",
    retail_sales: 54000,
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        📊 Business Dashboard
      </h1>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white 
                        rounded-xl shadow-lg transform hover:scale-105 transition">
          <span className="text-4xl">💰</span>
          <h2 className="text-lg font-semibold mt-2">Superstore Revenue</h2>
          <p className="text-3xl font-bold mt-1">${kpis.superstore}</p>
        </div>
        <div className="p-6 bg-gradient-to-r from-red-500 to-pink-500 text-white 
                        rounded-xl shadow-lg transform hover:scale-105 transition">
          <span className="text-4xl">👥</span>
          <h2 className="text-lg font-semibold mt-2">HR Attrition</h2>
          <p className="text-3xl font-bold mt-1">{kpis.hr_attrition}</p>
        </div>
        <div className="p-6 bg-gradient-to-r from-green-500 to-teal-500 text-white 
                        rounded-xl shadow-lg transform hover:scale-105 transition">
          <span className="text-4xl">🛒</span>
          <h2 className="text-lg font-semibold mt-2">Retail Sales</h2>
          <p className="text-3xl font-bold mt-1">${kpis.retail_sales}</p>
        </div>
      </div>

      {/* Placeholder Chart */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Revenue Trends</h2>
        <div className="h-64 flex items-center justify-center text-gray-400">
          📈 Chart goes here
        </div>
      </div>
    </div>
  );
}
