import Image from "next/image";
import kpis from "../data/analysis/kpis_simple.json";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">📊 Business 360 Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Superstore Revenue */}
        <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-lg flex flex-col items-center">
          <span className="text-4xl">💰</span>
          <h2 className="text-lg font-semibold mt-2">Superstore Revenue</h2>
          <p className="text-3xl font-bold mt-1">
            ${kpis.superstore_revenue?.toLocaleString("en-US") ?? "N/A"}
          </p>
        </div>

        {/* Retail Revenue */}
        <div className="p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-lg flex flex-col items-center">
          <span className="text-4xl">📦</span>
          <h2 className="text-lg font-semibold mt-2">Retail Revenue</h2>
          <p className="text-3xl font-bold mt-1">
            ${kpis.retail_revenue?.toLocaleString("en-US") ?? "N/A"}
          </p>
        </div>

        {/* Attrition Rate */}
        <div className="p-6 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl shadow-lg flex flex-col items-center">
          <span className="text-4xl">👥</span>
          <h2 className="text-lg font-semibold mt-2">Attrition Rate</h2>
          <p className="text-3xl font-bold mt-1">
            {kpis.hr_attrition_rate ?? "N/A"}%
          </p>
        </div>
      </div>

      {/* Charts Section */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">📈 Trends & Visuals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Superstore Revenue Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-3">Monthly Revenue (Superstore)</h3>
          <Image
            src="/images/monthly_revenue_superstore.png"
            width={600}
            height={400}
            alt="Superstore Revenue"
            className="rounded"
          />
        </div>

        {/* Retail Revenue Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-3">Monthly Revenue (Retail)</h3>
          <Image
            src="/images/monthly_revenue_retail.png"
            width={600}
            height={400}
            alt="Retail Revenue"
            className="rounded"
          />
        </div>

        {/* Attrition by Department */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-3">Attrition by Department</h3>
          <Image
            src="/images/attrition_by_dept.png"
            width={600}
            height={400}
            alt="HR Attrition"
            className="rounded"
          />
        </div>

        {/* Top Products */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-3">Top Products (Superstore)</h3>
          <Image
            src="/images/top_products_superstore.png"
            width={600}
            height={400}
            alt="Top Products"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
}
