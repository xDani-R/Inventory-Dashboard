const db = require("../db");

// Obtener todos los productos
exports.getProductos = (req, res) => {

    db.query(
        "SELECT * FROM productos ORDER BY id",
        (err, results) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(results);

        }
    );

};

// Crear producto
exports.createProducto = (req, res) => {

    const { nombre, categoria, stock, precio } = req.body;

    db.query(

        "INSERT INTO productos(nombre,categoria,stock,precio) VALUES(?,?,?,?)",

        [nombre, categoria, stock, precio],

        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                mensaje: "Producto creado correctamente"
            });

        }

    );

};

// Resumen Dashboard
exports.getResumen = (req, res) => {

    db.query(

        `
        SELECT

        COUNT(*) productos,

        SUM(stock) stock,

        SUM(stock*precio) valorInventario,

        COUNT(DISTINCT categoria) categorias

        FROM productos
        `,

        (err, results) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(results[0]);

        }

    );

};