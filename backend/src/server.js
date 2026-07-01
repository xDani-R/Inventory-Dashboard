const express = require("express");
const cors = require("cors");

require("./db");

const productosRoutes = require("./routes/productos");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

app.use("/api/productos", productosRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});