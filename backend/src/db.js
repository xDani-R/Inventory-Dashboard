const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root123",
  database: process.env.DB_NAME || "inventory_dashboard",
  waitForConnections: true,
  connectionLimit: 10,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Error conectando a MySQL");
    console.error(err);
    process.exit(1);
  }

  console.log("✅ Conectado a MySQL");
  connection.release();
});

module.exports = pool;
