const express = require("express");

const router = express.Router();

const controller = require("../controllers/productosController");

router.get("/", controller.getProductos);

router.get("/resumen", controller.getResumen);

router.post("/", controller.createProducto);

module.exports = router;