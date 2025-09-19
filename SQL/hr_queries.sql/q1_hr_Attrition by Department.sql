
-- for Hr
-- Attrition by department

SELECT 
    department,
    COUNT(*) FILTER (WHERE attrition::text = 'Yes') AS attrition_count,
    COUNT(*) AS total_employees,
    ROUND(100.0 * COUNT(*) FILTER (WHERE attrition::text = 'Yes') / COUNT(*), 2) AS attrition_rate_percent
FROM hr
GROUP BY department
ORDER BY attrition_rate_percent DESC;







