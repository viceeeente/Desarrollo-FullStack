import React from "react";
import "../../assets/styles/admin.css";
import "../../assets/styles/Button.css";
import BackToHomeButton from "../atoms/BackToHomeButton";

export default function AdminSidebar({ cambiarVista }) {
  const items = [
    { id: "dashboard", label: "Dashboard" },
    { id: "productos", label: "Productos" }
  ];

  return (
    <aside className="admin-sidebar">
      <h1 className="admin-title">ADMIN</h1>

      <nav className="admin-nav">
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => cambiarVista(item.id)}
            className="admin-sidebar-btn"
          >
            {item.label}
          </button>
        ))}
      </nav>
        <BackToHomeButton/>

    </aside>
  );
}
