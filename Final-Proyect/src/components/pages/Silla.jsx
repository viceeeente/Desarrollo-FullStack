import React, { useEffect, useState } from "react";
import "../../assets/styles/productos.css";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import BackToHomeButton from "../atoms/BackToHomeButton";
import  agregarAlCarrito from "../../utils/agregarAlCarrito";

import SillaSecretLab from "../../assets/images/SG001.webp";
import SillaDXRacer from "../../assets/images/SG002.png";

const productos = [
  {
    id: "SG001",
    nombre: "Silla Gamer Secretlab TITAN",
    categoria: "Silla Gamer",
    precio: 349990,
    descripcion:
    "La Silla Gamer SecretLab Titan ofrece máxima comodidad y ergonomía, con soporte lumbar ajustable, reposabrazos 4D y respaldo reclinable.",
    img: SillaSecretLab,
  },
  {
    id: "SG002",
    nombre: "Silla Gamer DXRacer Formula Series",
    categoria: "Silla Gamer",
    precio: 399990,
    descripcion:
    "",
    img: SillaDXRacer,
  }

];  

export default function Sillas() {
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
        <h2>Sillas Gamers</h2>
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
