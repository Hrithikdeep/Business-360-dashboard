# Business 360° Dashboard Project

This project is a **360° Business Insights Dashboard** combining HR, Sales, and Retail datasets.  
It covers the **full data analytics lifecycle** — from raw data → cleaning → database → analysis → dashboard → deployment.  
The goal is to demonstrate **end-to-end Data Analyst skills** for real-world business use cases.

---

## 📅 Day 1 – Project Setup

**Steps Completed**
- Created project folder structure:
business-360-dashboard/
├── data/raw # original raw datasets
├── data/cleaned # cleaned datasets
├── notebooks # Jupyter notebooks
├── backend # SQL + APIs (later)
├── frontend # dashboard (later)
├── docs # screenshots, notes
└── README.md

- Downloaded datasets:
- **HR Employee Attrition** (HR analysis, attrition, churn risk).
- **Sample Superstore** (Sales by region, category, profit).
- **Online Retail** (transaction-level sales, customer segmentation).
- Installed Python environment (`pandas`, `jupyterlab`).
- Ran quick inspection notebook:
- Checked dataset shapes, columns, and missing values.
- Saved first screenshots into `/docs/`.

**Key Learnings**
- Organized project structure makes development easier.
- Data inspection shows issues early (missing values, wrong types).
- Business questions are linked to datasets:
- HR → attrition & retention analysis.
- Superstore → regional/category performance.
- Retail → customer segmentation & sales patterns.

---

## 📅 Day 2 – Data Cleaning

**Steps Completed**
- **HR Dataset**
- Removed duplicates.
- Converted `Attrition` (Yes/No) into numeric (`AttritionFlag` = 1/0).
- Converted other Yes/No categorical columns to numeric.
- Saved as `data/cleaned/hr_clean.csv`.

- **Superstore Dataset**
- Removed duplicates.
- Dropped rows with missing `Postal Code` (only 11 rows).
- Saved as `data/cleaned/superstore_clean.csv`.

- **Online Retail Dataset**
- Removed rows with missing `CustomerID` (anonymous shoppers).
- Filled missing `Description` with `"Unknown"`.
- Removed negative or zero `Quantity` and `UnitPrice` (invalid/returns).
- Converted `InvoiceDate` to proper datetime format.
- Removed duplicates.
- Saved as `data/cleaned/retail_clean.csv`.

**Quick Validation**
- Checked shapes before & after cleaning.
- Confirmed missing values are handled.
- Clean datasets are ready for database import.

**Key Learnings**
- Data cleaning is critical — real-world data is always messy.
- Decision-making for missing values:
- Drop when essential (e.g., CustomerID).
- Fill when non-critical (e.g., Product Description).
- Always save a **clean copy** separate from raw data.

---

## ✅ Status After Day 2
- All cleaned datasets are stored in `data/cleaned/`.
- Project README is updated with documentation.
- Next step: Load datasets into **PostgreSQL** and design schema for SQL queries.


#3      Day-by-Day Documentation (README)

**Project:** 360° Business Insight Dashboard

**Purpose:** Keep a short, consistent log of what you did each day so you (and others) can reproduce your work, explain it in interviews, and pick the project up again later without confusion.

---

## How to use this file

* Every working day, add a new **Day X** entry at the top (newest first).
* Keep entries short and factual — bullet points are fine. Include commands, file paths, and links to important outputs (CSV/SQL/notebooks).
* Save changes and commit (`git add docs/README.md && git commit -m "Day X: summary"`).

---

## Project folder quick map

```
360_dashboard_project/
├── data/
│   ├── raw/              # original files (do not overwrite)
│   ├── clean/            # cleaned versions (CSV)
│   └── exports/          # SQL result CSVs for dashboard
├── sql/                  # all .sql scripts per dataset/day
├── notebooks/            # Jupyter notebooks (cleaning / exploratory)
├── docs/                 # this README + other docs
└── dashboard/            # viz files / dashboard code (Streamlit/PowerBI)
```

---

## Daily entry template (copy + paste)

Use this exact structure for every day so entries are consistent:

````
### Day <N> — <YYYY-MM-DD>  
**Goal:** Short sentence of what you planned.  
**What I did:**
- Action 1 (commands or steps) — include exact command or file path.  
- Action 2 (e.g., created tables, cleaned file, ran queries).  
**Commands / SQL run:**
```sql
-- small sample or main query you ran
SELECT ... FROM ...;
````

**Files created / updated:**

* data/clean/<filename>.csv
* sql/day4\_eda.sql
* data/exports/<result>.csv
  **Results / Notes:**
* Short summary of results (counts, success/failure, important numbers)
  **Issues / Fixes:**
* Any errors you hit and how you fixed them (very brief).
  **Next steps:**
* What to do next day.

````

---

## Example entries (copy these and edit)

### Day 3 — 2025-09-16  
**Goal:** Load cleaned CSVs into PostgreSQL and create base tables for HR, Superstore, Retail.  
**What I did:**
- Created database `business_dashboard` in pgAdmin.  
- Created tables `hr`, `superstore`, `retail` with schemas matching cleaned CSVs.  
- Attempted imports; fixed CSV quoting issues for `superstore`.  
**Commands / SQL run:**
```sql
-- created hr table (example)
DROP TABLE IF EXISTS hr;
CREATE TABLE hr (...);
\copy hr FROM '/Users/<me>/Documents/hr_clean.csv' WITH (FORMAT csv, HEADER true);
````

**Files created / updated:**

* data/clean/hr\_clean.csv
* sql/create\_tables.sql
  **Results / Notes:**
* HR import succeeded. Superstore had an "unterminated quoted field" — cleaned in pandas and re-exported.
  **Issues / Fixes:**
* Fixed CSV quoting by re-saving via pandas: `pd.read_csv(...).to_csv('superstore_fixed.csv', index=False)`
  **Next steps:**
* Run EDA queries (Day 4): monthly revenue, churn, attrition rates.

### Day 4 — 2025-09-17

**Goal:** Run EDA queries and export results for dashboard input.
**What I did:**

* Ran monthly revenue query for `superstore` and `retail` and exported results to CSV.
* Calculated attrition by department in `hr`.
  **Commands / SQL run:**

```sql
-- superstore revenue per month
SELECT date_trunc('month', order_date)::date AS month, SUM(sales) AS revenue
FROM superstore
GROUP BY month
ORDER BY month;
```

**Files created / updated:**

* data/exports/superstore\_monthly\_revenue.csv
* data/exports/retail\_monthly\_revenue.csv
* sql/day4\_eda.sql
  **Results / Notes:**
* Exports saved and verified. Some retail imports were empty → re-import CSV and confirmed counts.
  **Issues / Fixes:**
* Retail table had zero rows after failed import — re-imported using `\copy` from terminal.
  **Next steps:**
* Create dashboard visuals in Streamlit / Power BI using exported CSVs.

---

## Tips for good daily notes

* Add exact file paths and short commands when possible. That saves time later.
* If you fix a bug, write the error message and the fix (one line). Future you will thank you.
* Keep each entry short (5–12 bullet lines). Use the `Issues / Fixes` section for the details.

---

## Git & commit workflow (recommended)

After you update this file and run work:

```bash
git add docs/README.md sql/ data/exports/ notebooks/
git commit -m "Day <N>: short summary"
git push
```

---

## Weekly summary (add at the end of the week)

At the end of each week, add a short weekly summary with accomplishments, blockers, and a plan for the next week.

---

If you want, I can also:

* append your real Day 3 & Day 4 logs into this README now, or
* create separate daily markdown files `docs/days/day-03.md`, `docs/days/day-04.md` for longer notes.

Tell me which one you prefer.


## 📊 Phase 2 – Analysis & Insights (Day 5–8)

---

### 📅 Day 5 – Exploratory Data Analysis (EDA)
**Steps Completed**
- Loaded cleaned datasets (HR, Superstore, Retail).
- Converted date columns to datetime (`Order Date`, `InvoiceDate`).
- Performed initial analysis:
  - Monthly revenue trends (Superstore, Retail).
  - Top 10 products by revenue (Superstore & Retail).
  - Revenue by region (Superstore).
  - Customer purchase behavior (Retail).
  - Attrition by department and job satisfaction (HR).
- Saved outputs:
  - Data: `data/analysis/*.csv`
  - Charts: `docs/images/*.png`

**Key Learnings**
- Visualizations make trends easy to communicate.
- Different datasets answer different business questions:
  - Retail → customer-level insights.
  - Superstore → product & regional insights.
  - HR → workforce retention insights.

---

### 📅 Day 6 – KPI Calculations
**Steps Completed**
- Defined 5 core KPIs:
  1. **Total Revenue** (Superstore + Retail).
  2. **Revenue Growth (MoM %)**.
  3. **Average Order Value (AOV)**.
  4. **Customer Churn Rate** (Retail).
  5. **Employee Attrition Rate** (HR).
- Calculated KPIs in Python and exported:
  - `data/analysis/kpis.json`
  - `data/analysis/monthly_sales_for_kpis.csv`

**Key Learnings**
- KPIs are central for executive dashboards.
- Business impact:
  - Revenue Growth → overall performance.
  - Churn Rate → customer retention.
  - Attrition Rate → workforce health.

---

### 📅 Day 7 – Statistical Testing
**Steps Completed**
- Ran hypothesis tests:
  - **Correlation** → MonthlyIncome vs YearsAtCompany (HR).
  - **t-test** → MonthlyIncome (attrition vs stayed).
  - **Chi-square** → Department vs Attrition (HR).
  - **Correlation** → Discount vs Sales (Superstore).
  - **Correlation** → Quantity vs UnitPrice (Retail).
- Saved results in `data/analysis/stat_tests.csv`.

**Key Learnings**
- Statistical testing adds evidence to insights.
- Helps answer: *“Is this pattern real or random?”*
- Example: significant p-values suggest meaningful relationships.

---

### 📅 Day 8 – Insights & Documentation
**Steps Completed**
- Combined KPIs and statistical test results into final insights.
- Wrote summary in plain English for business stakeholders.
- Exported results:
  - `docs/insights.md` → report-style documentation.
  - `data/analysis/insights.json` → structured data for dashboards.

**Key Learnings**
- Translating numbers into words is critical for HR/managers.
- Clear communication of insights shows **business acumen**.
- Organized outputs prepare the way for Phase 3 (Dashboard).

---

## ✅ Status After Phase 2
- Data → Cleaned, analyzed, and validated.
- KPIs → Defined and calculated.
- Stats → Evidence-based insights.
- Docs → Ready for presentation & dashboard integration.

**Next Phase → Dashboard Development (Day 9–12).**

Phase 3 – Dashboard Building (Day 9–12)

In this phase, I focused on analyzing business & HR performance using Python (Pandas, Matplotlib, Seaborn).
Since Tableau setup was tricky on Mac, I built all charts in Python and documented them with screenshots.

🔹 Day 9 – KPI Calculations

Loaded all cleaned datasets (superstore_clean.csv, retail_clean.csv, hr_clean.csv).

Computed the main business & HR KPIs:

Superstore Revenue = sum of Sales column

Retail Revenue = Quantity × Unit Price

Average Order Value (AOV) = Total Revenue ÷ Unique Orders

Attrition Rate = % of employees marked “Yes” in Attrition

✔️ KPIs exported to data/analysis/kpis_simple.json and kpis_simple.csv for later use.

🔹 Day 10 – Superstore Analysis

Monthly Revenue Trend (Line Chart) → showed how revenue grows month by month.

Orders by Region (Bar Chart) → identified which regions had the highest order volume.

🔹 Day 11 – Retail Analysis

Top 10 Products by Revenue (Bar Chart) → highlighted products that contribute most to revenue.

(Optional) Calculated Customer Churn Rate using last purchase dates.

🔹 Day 12 – HR Analysis

Attrition by Department (Bar Chart) → showed which departments have the highest employee turnover.

Calculated overall Attrition Rate (%) as a KPI.

🔹 Final Output (Phase 3)

✅ 4 KPIs:

Superstore Revenue

Retail Revenue

Average Order Value

Attrition Rate

✅ 4 Key Charts:

Monthly Revenue Trend (Superstore)

Orders by Region (Superstore)

Top 10 Products by Revenue (Retail)

Attrition by Department (HR)

All charts were saved as PNGs and added inside the docs/images/ folder.

README includes the KPIs + charts so the project looks like a real Business 360° Insights Dashboard.

