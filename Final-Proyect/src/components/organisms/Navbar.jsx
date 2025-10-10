import React, { useState, useEffect } from "react";
import DropdownMenu from "../molecules/DropdownMenu";

export default function Navbar() {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const logged = localStorage.getItem("isLoggedIn") === "true";
    setUserName(storedName || "");
    setIsLoggedIn(logged);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    window.location.reload();
  };

  return (
    <header>
      <nav id="main-menu">
        <img src="/logo/logo.png" alt="Logo" />

        <div id="greeting">
          {isLoggedIn ? `¡Bienvenido, ${userName}!` : ""}
        </div>

        <DropdownMenu />

        <div className="search-bar">
          <input type="text" placeholder="Buscar productos..." />
          <button>🔍</button>
        </div>

        <div className="auth-buttons">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="logout-btn">
              Cerrar Sesión
            </button>
          ) : (
            <a href="/login">
              <button>Iniciar Sesión</button>
            </a>
          )}
          <a href="/carrito">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9341/9341730.png"
              alt="Carrito"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
