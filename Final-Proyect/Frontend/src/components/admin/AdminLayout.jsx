import React from "react";
import { Link, Outlet } from "react-router-dom";
import BackToHomeButton from "../atoms/BackToHomeButton";
import "../../assets/styles/admin.css";

export default function AdminLayout() {
  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h1 className="admin-title">ADMIN</h1>

        <nav className="admin-nav">
          <Link to="." className="admin-sidebar-btn">Dashboard</Link>
          <Link to="productos" className="admin-sidebar-btn">Productos</Link>
        <BackToHomeButton />
        </nav>

      </aside>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}
