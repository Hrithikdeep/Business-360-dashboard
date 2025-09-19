
-- for Hr
-- Average Salary by Job Role
SELECT 
    jobrole,
    ROUND(AVG(monthlyincome), 2) AS avg_salary
FROM hr
GROUP BY jobrole
ORDER BY avg_salary DESC;






