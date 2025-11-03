import React from "react";
import logo from "../../assets/icons/logo.png";

export default function Nav() {
  return (
    <nav id="main-menu">
        <img src={logo} alt="Logo" id="logo" />
      <div className="info">
        <p>Contacto: +123 456 789</p>
        <p>Ubicación: Av. Vicuña Makena</p>
      </div>
    </nav>
  );
}
