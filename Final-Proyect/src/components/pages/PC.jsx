import React, { useEffect, useState } from "react";
import "../../assets/styles/productos.css";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import BackToHomeButton from "../atoms/BackToHomeButton";
import agregarAlCarrito from "../../utils/agregarAlCarrito"; 

import PCRyzen from "../../assets/images/PC001.webp";
import PC from "../../assets/images/PC002.jpg";

const productos = [
  {
    id: "PC001",
    nombre: "PC Gamer Ryzen 7 RTX 4060",
    categoria: "PC",
    precio: 899990,
    descripcion:
      "Potente equipo con procesador Ryzen 7 y tarjeta gráfica RTX 4060. Ideal para gaming en 2K y multitareas exigentes.",
    img: PCRyzen,
  },
  {
    id: "PC002",
    nombre: "Notebook ASUS TUF Gaming",
    categoria: "PC",
    precio: 749990,
    descripcion:
      "Notebook gamer con pantalla 144Hz, Ryzen 5 y GPU GTX 1650, diseñado para juegos competitivos y rendimiento.",
    img: PC,
  },
];

export default function Pc() {
  const [esDuoc, setEsDuoc] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData?.email?.toLowerCase().endsWith("@duocuc.cl")) {
      setEsDuoc(true);
    }
  }, []);

  const formatearPrecio = (precio) => {
    if (esDuoc) {
      const precioDescuento = Math.round(precio * 0.8);
      return (
        <>
          <s>${precio.toLocaleString("es-CL")}</s>
          <br />
          <strong style={{ color: "limegreen" }}>
            ${precioDescuento.toLocaleString("es-CL")} CLP
          </strong>
          <br />
          <small>(20% DCTO DUOC)</small>
        </>
      );
    }
    return <strong>${precio.toLocaleString("es-CL")} CLP</strong>;
  };

  const handleAddToCart = (producto) => {
    agregarAlCarrito(producto); 
  };

  return (
    <>
      <Navbar />

      <main className="products-section">
        <h2>PC y Notebooks</h2>
        <div className="products-container">
          {productos.map((p) => (
            <div className="product-card" key={p.id}>
              <div className="card-inner">
                <div className="card-front">
                  <img src={p.img} alt={p.nombre} />
                  <h3>{p.nombre}</h3>
                  <p>{formatearPrecio(p.precio)}</p>
                </div>

                <div className="card-back">
                  <h3>{p.nombre}</h3>
                  <p>{p.descripcion}</p>
                  <div>{formatearPrecio(p.precio)}</div>
                  <button
                    className="add-to-cart"
                    onClick={() => handleAddToCart(p)}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <BackToHomeButton />
      </main>
      <Footer />
    </>
  );
}
