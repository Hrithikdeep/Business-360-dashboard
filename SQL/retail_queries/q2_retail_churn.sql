-- For Retail
-- 2. Churn rate
WITH last_purchase AS (
  SELECT CustomerID, MAX(InvoiceDate::date) AS last_purchase
  FROM retail
  WHERE CustomerID IS NOT NULL
  GROUP BY CustomerID
)
SELECT
  COUNT(*) AS total_customers,
  SUM(CASE WHEN last_purchase < (CURRENT_DATE - INTERVAL '6 months') THEN 1 ELSE 0 END) AS churned_customers,
  ROUND(
    100.0 * SUM(CASE WHEN last_purchase < (CURRENT_DATE - INTERVAL '6 months') THEN 1 ELSE 0 END)::numeric / NULLIF(COUNT(*),0), 2
  ) AS churn_rate_pct
FROM last_purchase;






