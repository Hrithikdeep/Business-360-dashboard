export default function Insights() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">📑 Key Insights</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">📊 Sales Trends</h2>
          <p className="text-gray-700 mt-2">
            Superstore and Retail revenues show steady growth with holiday season peaks.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">🛒 Top Products</h2>
          <p className="text-gray-700 mt-2">
            Top 10 products contribute ~40% of sales, showing reliance on key SKUs.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">👥 HR Insights</h2>
          <p className="text-gray-700 mt-2">
            Attrition ~16%, highest in Sales & R&D. Job satisfaction strongly affects retention.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">📦 Customer Behavior</h2>
          <p className="text-gray-700 mt-2">
            Average Order Value is ~$457. Corporate customers make fewer but higher-value orders.
          </p>
        </div>
      </div>
    </div>
  );
}


