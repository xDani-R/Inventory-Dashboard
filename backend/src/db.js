const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "root123",
  database: "inventory_dashboard",
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