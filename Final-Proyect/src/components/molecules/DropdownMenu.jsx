import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/Dropdown.css";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
      <button id="categories-btn" onClick={toggleMenu}>
        Categorías
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {categorias.map((item, i) => (
            <li key={i}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
