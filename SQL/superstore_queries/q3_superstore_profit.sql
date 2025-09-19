--for superstore:
-- 3. Profit (revenue – expense)
SELECT
  date_trunc('month', order_date)::date AS month,
  SUM(sales) AS revenue,
  SUM(profit) AS profit,
  (SUM(sales) - SUM(profit)) AS expense
FROM superstore
GROUP BY month
ORDER BY month;

