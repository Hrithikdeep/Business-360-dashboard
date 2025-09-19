# 🚀 Business 360 Dashboard  

A full-stack **Business Analytics Portfolio Project** that provides a **360° view of business performance** across **Sales, HR, and Retail** domains.  

This project is designed to demonstrate end-to-end **Data Analyst skills**:  
- Data Cleaning & Preparation  
- Exploratory Data Analysis (EDA)  
- KPI & Dashboard Creation  
- Deployment of a Live Portfolio Website
- This project combines multiple domains (Sales, HR, and Retail) to provide a 360° view of business performance.

---

## 🏛️ Project Architecture

```text
Business-360-dashboard/
│
├── data/
│   ├── raw/        # Raw datasets (Superstore, HR, Retail)
│   ├── cleaned/    # Cleaned datasets ready for analysis
│   └── analysis/   # EDA outputs, CSV summaries, charts
│
├── notebooks/      # Jupyter Notebooks for cleaning & EDA
│
├── website/        # Next.js frontend (deployed on Vercel)
│   ├── pages/      # Home, Dashboard, Insights, About
│   ├── public/     # Static assets (charts, screenshots)
│   ├── styles/     # TailwindCSS styles
│   └── package.json
│
├── README.md       # Documentation
└── requirements.txt# Python dependencies
```


---

## 🛠️ Tech Stack

- **Languages & Tools**: Python, SQL, Pandas, NumPy, Matplotlib/Seaborn  
- **Visualization & Dashboard**: Tableau (initial), Next.js + Tailwind CSS (final)  
- **Frontend Framework**: Next.js (React-based)  
- **Styling**: Tailwind CSS (with gradients, hover animations)  
- **Deployment**: Vercel (auto CI/CD from GitHub)  

---

## 📂 Project Phases

### **Phase 1 – Data Preparation**
- Datasets collected:  
  - 📊 Superstore Sales  
  - 👥 HR Employee Attrition  
  - 🛒 Retail Transactions  
- Tasks performed:  
  - Removed duplicates & irrelevant rows  
  - Handled missing values (e.g., product `Description`)  
  - Normalized date & numeric formats  
- Output: `data/cleaned/` CSVs for each domain  

---

### **Phase 2 – Analysis & Insights**
- Conducted **Exploratory Data Analysis (EDA)** using Python:  
  - Revenue trends by month & region (Superstore)  
  - Attrition rate analysis by department/education (HR)  
  - Top customers & product patterns (Retail)  
- Generated KPIs:  
  - Total Revenue  
  - Attrition %  
  - Sales per Region / Category  
- Output stored in `data/analysis/` with charts & CSV summaries  

---

### **Phase 3 – Dashboard Building**
- Initially attempted Tableau → shifted to **Next.js dashboard** for cross-platform & deployment.  
- **Website Pages**:  
  - 🏠 Home → Landing page with project overview  
  - 📊 Dashboard → KPI cards (Revenue, Attrition %, Sales) & Chart placeholders  
  - 📑 Insights → Written business insights in card format  
  - 👨‍💻 About → Portfolio, GitHub & LinkedIn links  

**Design Features:**  
- Gradient backgrounds  
- Hover animations on KPI cards  
- Glassmorphism buttons  
- Responsive layout (desktop + mobile)  

---

### **Phase 4 – Deployment**
- Version control using Git & GitHub  
- Deployed frontend on **Vercel**  
- Config:  
  - Framework Preset → Next.js  
  - Root Directory → `/website`  
  - Build Command → `npm run build`  
  - Output → `.next/`  

**Live Links:**  
- 🌐 [Live Demo](https://business-360-dashboard-22c2.vercel.app/)  
- 📦 [GitHub Repo](https://github.com/Hrithikdeep/Business-360-dashboard)  

---

## 📸 Screenshots (Sample)

> *(Add actual screenshots in `website/public/screenshots/` and reference here)*

- **Home Page**  
  ![Home](<https://github.com/Hrithikdeep/Business-360-dashboard/blob/main/website/public/screenshot/Screenshot%202025-09-20%20at%2012.18.41%E2%80%AFAM.png?raw=true>)

- **Dashboard**  
  ![Dashboard](https://github.com/Hrithikdeep/Business-360-dashboard/blob/main/website/public/screenshot/Screenshot%202025-09-20%20at%2012.35.37%E2%80%AFAM.png?raw=true)

- **Insights**  
  ![Insights](https://github.com/Hrithikdeep/Business-360-dashboard/blob/main/website/public/screenshot/Screenshot%202025-09-20%20at%2012.35.43%E2%80%AFAM.png?raw=true)

- **About**  
  ![About](https://github.com/Hrithikdeep/Business-360-dashboard/blob/main/website/public/screenshot/Screenshot%202025-09-20%20at%2012.35.47%E2%80%AFAM.png?raw=true)

---

## 🎯 Skills Demonstrated

✅ Data Cleaning (Pandas, NumPy)  
✅ Exploratory Data Analysis (Python, SQL)  
✅ KPI Calculation & Business Insights  
✅ Dashboard Building (Next.js, Tailwind, Tableau)  
✅ Deployment (Vercel, GitHub CI/CD)  

---

## 🧑‍💻 Author

**Hrithik Deep**  
- 🌐 [GitHub](https://github.com/Hrithikdeep)  
- 🔗 [LinkedIn](https://linkedin.com/in/YOUR-LINKEDIN)  

---



