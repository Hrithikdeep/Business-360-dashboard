-- For Retail
SELECT
  date_trunc('month', invoicedate)::date AS month,
  SUM(quantity * unitprice) AS revenue
FROM retail
GROUP BY month
ORDER BY month;






