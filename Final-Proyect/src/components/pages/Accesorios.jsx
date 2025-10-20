import React, { useEffect, useState } from "react";
import "../../assets/styles/productos.css";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import BackToHomeButton from "../atoms/BackToHomeButton";
import agregarAlCarrito from "../../utils/agregarAlCarrito";

import ControlXboxSeriesX from "../../assets/images/AC001.webp";
import AuricularesHyperX from "../../assets/images/AC002.png";

const productos = [
  {
    id: "AC001",
    nombre: "Controlador Inalambrico Xbox Series X",
    categoria: "Accesorios",
    precio: 59990,
    descripcion:
    "Ofrece una experiencia de juego cómoda con botones mapeables y una respuesta táctil mejorada. Compatible con consolas Xbox y PC.",
    img: ControlXboxSeriesX
  },
  {
    id: "AC002",
    nombre: "Auriculares Gamer HyperX Cloud II",
    categoria: "Accesorios",
    precio: 79990,
    descripcion:
    "Proporcionan un sonido envolvente de calidad con un micrófono desmontable y almohadillas de espuma viscoelástica para mayor comodidad durante largas sesiones de juego.",
    img: AuricularesHyperX
  }

];

export default function Accesorios() {
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
        <h2>Accesorios</h2>
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
