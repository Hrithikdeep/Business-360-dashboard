export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">👨‍💻 About Me</h1>

      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl text-center">
        <p className="text-gray-700 mb-4">
          Hi, I’m <span className="font-semibold">Hrithik Deep</span>, a Data Analyst
          passionate about turning raw data into actionable insights.  
          I built this Business 360 Dashboard to showcase my skills in
          <span className="font-semibold"> Python, SQL, EDA, KPIs, and dashboard deployment</span>.
        </p>

        <p className="text-gray-700 mb-4">
          🎓 Education: Bachelor’s in Computer Applications (BCA).  
          💡 Interests: Data Analytics, Visualization, and Business Insights.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://github.com/Hrithikdeep"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-700"
          >
            🌐 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hrithikdeep/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500"
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

