import React, { useEffect, useState } from "react";
import "../../assets/styles/admin.css";

export default function Dashboard() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/productos")
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error("Error cargando productos:", err));
  }, []);

  return (
    <section className="admin-dashboard">
      <h2 className="dashboard-title">Dashboard</h2>

      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div>
            <h3>Productos registrados</h3>
            <p className="stat-number">{productos.length}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
