--for superstore:
-- 2. Churn rate (6 months logic)
WITH last_order AS (
  SELECT customer_id, MAX(order_date) AS last_order
  FROM superstore
  WHERE customer_id IS NOT NULL
  GROUP BY customer_id
)
SELECT
  COUNT(*) AS total_customers,
  SUM(CASE WHEN last_order < (CURRENT_DATE - INTERVAL '6 months') THEN 1 ELSE 0 END) AS churned_customers,
  ROUND(
    100.0 * SUM(CASE WHEN last_order < (CURRENT_DATE - INTERVAL '6 months') THEN 1 ELSE 0 END)::numeric / NULLIF(COUNT(*),0), 2
  ) AS churn_rate_pct
FROM last_order;

