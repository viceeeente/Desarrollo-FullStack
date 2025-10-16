import React, { useEffect, useState } from "react";
import "../../assets/styles/productos.css";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import BackToHomeButton from "../atoms/BackToHomeButton";

import MousepadRazer from "../../assets/images/MP001.png";
import MousepadCorsair from "../../assets/images/MP002.avif";

const productos = [
  {
    id: "MP001",
    nombre: "Mousepad Gamer Razer Goliathus Extended Chroma",
    precio: 29990,
    descripcion:
    "Mousepad Razer Goliathus Extended Chroma con iluminación RGB y superficie optimizada para precisión y velocidad",
    img: MousepadRazer,
  },
  {
    id: "MP002",
    nombre: "Mousepad Gamer Corsair MM300",
    precio: 19990,
    descripcion:
    "La alfombrilla MM300 proporciona una superficie de tela resistente y suave con los bordes cosidos reforzados para evitar el desgaste.",
    img: MousepadCorsair,
  }

];
export default function Mousepad() {
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

  const handleAddToCart = (id) => {
    alert(`Producto agregado: ${id}`);
  };

  return (
    <>
      <Navbar />
      <main className="products-section">
        <h2>Mousepad</h2>
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
                    onClick={() => handleAddToCart(p.id)}
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
