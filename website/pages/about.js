export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen 
                    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6">
      <h1 className="text-4xl font-bold mb-4">👨‍💻 About Me</h1>
      <p className="max-w-2xl text-center mb-6">
        Hi, I’m <span className="font-semibold">Hrithik Deep</span>, a Data Analyst passionate 
        about transforming raw data into meaningful insights. <br />
        Skilled in Python, SQL, Tableau, Power BI, and building end-to-end dashboards 
        with real-world business impact.
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/Hrithikdeep"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-900 text-white rounded-lg shadow hover:scale-105 transition"
        >
          🌐 GitHub
        </a>
        <a
          href="https://linkedin.com/in/YOUR-LINKEDIN"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:scale-105 transition"
        >
          🔗 LinkedIn
        </a>
      </div>
    </div>
  );
}

    
