import React, { useEffect, useState } from "react";
import "../../assets/styles/admin.css";
import AdminSidebar from "./AdminSidebar";
import Dashboard from "./Dashboard";
import ProductosAdmin from "./ProductosAdmin";

export default function AdminPanel() {
  const [vista, setVista] = useState("dashboard");
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/productos")
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error("Error cargando productos:", err));
  }, []);

  return (
    <div className="admin-container">
      <AdminSidebar cambiarVista={setVista} />

      <main className="admin-main">
        {vista === "dashboard" && <Dashboard productos={productos} />}
        {vista === "productos" && <ProductosAdmin productos={productos} />}
      </main>
    </div>
  );
}
