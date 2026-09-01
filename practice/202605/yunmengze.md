# SQL语句选择要点
要点：① 聚合后过滤用 HAVING 而非 WHERE；② GROUP BY 后不能再接 WHERE；③ COUNT 统计的是行数而非金额总量
# DCMM 核心框架：
八大能力域包括：数据战略、数据治理、数据架构、数据应用、数据安全、数据质量、数据标准、数据生命周期
5个成熟度等级：初始级→受管理级→稳健级→量化管理级→优化级

# 请简述数据质量的四个核心维度，并各举一个在能源电商场景中可能出现的数据质量问题示例。
1. 完整性 — 必填字段是否缺失，如订单中供应商编码为空
2. 准确性 — 数据是否反映真实情况，如物料单价录入错误（少了一个零）
3. 一致性 — 跨系统同一实体数据是否统一，如同一客户在 ERP 与电商平台 ID 不匹配
4. 及时性 — 数据更新是否滞后，如库存数量 T+2 才同步导致超卖

# 有两张表：orders(order_id, customer_id, amount, create_date) 和 customers(customer_id, name, region)。请写出 SQL，查询 2024 年华北区域每月的订单数量和总金额，结果按月份升序排列。
SELECT DATE_FORMAT(o.create_date, '%Y-%m') AS month,
  COUNT(o.order_id) AS order_count,
  SUM(o.amount) AS total_amount
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
WHERE c.region = '华北'
  AND o.create_date >= '2024-01-01'
  AND o.create_date < '2025-01-01'
GROUP BY DATE_FORMAT(o.create_date, '%Y-%m')
ORDER BY month ASC;

# 查询成绩大于85分学生姓名
SELECT name
FROM Student s
JOIN Score sc
ON s.id=sc.id
WHERE sc.score>85;


