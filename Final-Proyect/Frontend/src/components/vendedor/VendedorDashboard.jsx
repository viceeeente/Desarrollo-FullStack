import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "../../assets/styles/vendedor.css";

export default function VendedorDashboard() {
  const { user } = useContext(AuthContext);
  const [productos, setProductos] = useState([]);
  const [boletas, setBoletas] = useState([]);

  useEffect(() => {
    document.title = "Panel Vendedor | Level UP Gamer";
    cargarProductos();
    cargarBoletas();
  }, []);

  const cargarProductos = () => {
    fetch("http://localhost:8080/api/productos", {
      headers: { Authorization: `Bearer ${user.token}` }
    })
    .then(res => res.json())
    .then(data => setProductos(data))
    .catch(() => setProductos([]));
  };

  const cargarBoletas = () => {
    fetch("http://localhost:8080/api/boletas", {
      headers: { Authorization: `Bearer ${user.token}` }
    })
    .then(res => res.json())
    .then(data => setBoletas(data))
    .catch(() => setBoletas([]));
  };

  return (
    <main className="vendedor-main">
      <h1 className="vendedor-header">Bienvenido, {user.username} (VENDEDOR)</h1>

      <div className="vendedor-stats-grid">
        <div className="vendedor-stat-card">
          <h3>Productos registrados</h3>
          <p className="stat-number">{productos.length}</p>
        </div>

        <div className="vendedor-stat-card">
          <h3>Boletas realizadas</h3>
          <p className="stat-number">{boletas.length}</p>
        </div>
      </div>
    </main>
  );
}
