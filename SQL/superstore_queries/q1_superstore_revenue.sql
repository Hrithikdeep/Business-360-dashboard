--for superstore:
-- 1. Total revenue per month
SELECT
  date_trunc('month', order_date)::date AS month,
  SUM(sales) AS revenue
FROM superstore
GROUP BY month
ORDER BY month;


