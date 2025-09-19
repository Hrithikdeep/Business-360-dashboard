export default function Insights() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        📑 Business Insights
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">📊 Sales Trends</h2>
          <p className="text-gray-700 mt-2">
            Superstore revenue shows growth with seasonal peaks in Q4.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-red-500 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">👥 HR Insights</h2>
          <p className="text-gray-700 mt-2">
            Attrition highest among employees under 2 years experience.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">🛒 Retail Insights</h2>
          <p className="text-gray-700 mt-2">
            Retail sales spike during holidays and weekends.
          </p>
        </div>
      </div>
    </div>
  );
}

