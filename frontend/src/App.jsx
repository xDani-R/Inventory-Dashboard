import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

function App() {
  const [productos, setProductos] = useState([]);

  const [resumen, setResumen] = useState({});

  const [nuevo, setNuevo] = useState({
    nombre: "",
    categoria: "",
    stock: "",
    precio: "",
  });

  const cargarProductos = async () => {
    const res = await axios.get(`${API}/api/productos`);

    setProductos(res.data);
  };

  const cargarResumen = async () => {
    const res = await axios.get(`${API}/api/productos/resumen`);

    setResumen(res.data);
  };

  useEffect(() => {
    cargarProductos();

    cargarResumen();
  }, []);

  const agregarProducto = async () => {
    await axios.post(`${API}/api/productos`, nuevo);

    setNuevo({
      nombre: "",
      categoria: "",
      stock: "",
      precio: "",
    });

    cargarProductos();

    cargarResumen();
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">📦 Inventory Dashboard</h1>

      <div className="row">
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5>Productos</h5>

              <h2>{resumen.productos}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5>Stock</h5>

              <h2>{resumen.stock}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5>Categorías</h5>

              <h2>{resumen.categorias}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5>Inventario</h5>

              <h6>${Number(resumen.valorInventario).toLocaleString()}</h6>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <h3>Agregar Producto</h3>

      <div className="row">
        <div className="col">
          <input
            className="form-control"
            placeholder="Nombre"
            value={nuevo.nombre}
            onChange={(e) => setNuevo({ ...nuevo, nombre: e.target.value })}
          />
        </div>

        <div className="col">
          <input
            className="form-control"
            placeholder="Categoria"
            value={nuevo.categoria}
            onChange={(e) => setNuevo({ ...nuevo, categoria: e.target.value })}
          />
        </div>

        <div className="col">
          <input
            className="form-control"
            placeholder="Stock"
            type="number"
            value={nuevo.stock}
            onChange={(e) => setNuevo({ ...nuevo, stock: e.target.value })}
          />
        </div>

        <div className="col">
          <input
            className="form-control"
            placeholder="Precio"
            type="number"
            value={nuevo.precio}
            onChange={(e) => setNuevo({ ...nuevo, precio: e.target.value })}
          />
        </div>

        <div className="col">
          <button className="btn btn-success w-100" onClick={agregarProducto}>
            Agregar
          </button>
        </div>
      </div>

      <hr />

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>

            <th>Nombre</th>

            <th>Categoría</th>

            <th>Stock</th>

            <th>Precio</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>

              <td>{p.nombre}</td>

              <td>{p.categoria}</td>

              <td>{p.stock}</td>

              <td>${Number(p.precio).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
