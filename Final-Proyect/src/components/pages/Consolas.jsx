import React, { useEffect, useState } from "react";
import "../../assets/styles/productos.css";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import BackToHomeButton from "../atoms/BackToHomeButton";
import agregarAlCarrito from "../../utils/agregarAlCarrito";

import PlayStation5 from "../../assets/images/CO001.png";
import XboxSeriesX from "../../assets/images/CO002.png";

const productos = [
  {
    id: "CO001",
    nombre: "PlayStation 5",
    categoria: "Consola",
    precio: 499990,
    descripcion:
      "Consola de última generación de Sony, con gráficos impresionantes y tiempos de carga ultrarrápidos.",
    img: PlayStation5,
  },
  {
    id: "CO002",
    nombre: "Xbox Series X",
    categoria: "Consola",
    precio: 449990,
    descripcion:
      "La consola más potente de Microsoft con soporte para 4K, Game Pass y cientos de títulos disponibles.",
    img: XboxSeriesX,
  },
];

export default function Consolas() {
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
        <h2>Consolas</h2>
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
                    Agregar al carrito
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
