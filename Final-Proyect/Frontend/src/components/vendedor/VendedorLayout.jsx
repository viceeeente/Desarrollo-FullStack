import React from "react";
import { Link, Outlet } from "react-router-dom";
import BackToHomeButton from "../atoms/BackToHomeButton";
import "../../assets/styles/vendedor.css";

export default function VendedorLayout() {
  return (
    <div className="vendedor-container">
      <aside className="vendedor-sidebar">
        <h1 className="vendedor-title">VENDEDOR</h1>

        <nav className="vendedor-nav">
          <Link to="" className="vendedor-sidebar-btn">Dashboard</Link>
          <Link to="productos" className="vendedor-sidebar-btn">Productos</Link>
        </nav>

        <BackToHomeButton />
      </aside>

      <main className="vendedor-main">
        <Outlet />
      </main>
    </div>
  );
}
