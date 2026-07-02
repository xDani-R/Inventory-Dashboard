const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "root123",
  database: "inventory_dashboard",
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Error de conexión:");
    console.error(err);
    process.exit(1);
  }

  console.log("✅ Conectado a MySQL");

  connection.query("SELECT * FROM productos", (err, rows) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log(rows);

    connection.end();
  });
});
