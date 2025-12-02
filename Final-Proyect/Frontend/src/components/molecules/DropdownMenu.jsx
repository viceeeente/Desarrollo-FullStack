import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/Dropdown.css";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const categorias = [
    { name: "Consolas", link: "/consolas" },
    { name: "PC Gamer", link: "/pc" },
    { name: "Juegos", link: "/juegos" },
    { name: "Accesorios", link: "/accesorios" },
    { name: "Mouse", link: "/mouse" },
    { name: "Mousepad", link: "/mousepad" },
    { name: "Sillas Gamers", link: "/sillas-gamers" },
    { name: "Poleras Personalizadas", link: "/poleras" },
  ];

  return (
    <div className="dropdown">
      <button id="categories-btn" onClick={() => setIsOpen(!isOpen)}>
        Categorías
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {categorias.map((cat, i) => (
            <li key={i} onClick={() => setIsOpen(false)}>
              <Link to={cat.link}>{cat.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
