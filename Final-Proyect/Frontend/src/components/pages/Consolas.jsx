import React, { useEffect, useState } from "react";
import "../../assets/styles/productos.css";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import BackToHomeButton from "../atoms/BackToHomeButton";
import agregarAlCarrito from "../../utils/agregarAlCarrito";

import img1 from "../../assets/images/producto_1.png";
import img2 from "../../assets/images/producto_2.png";


export default function Consolas() {
  const [productos, setProductos] = useState([]);
  const [esDuoc, setEsDuoc] = useState(false);

  const imagenesPorId = {
    1: img1,
    2: img2,
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/productos")
      .then((res) => res.json())
      .then((data) => {
        const filtrados = data.filter(
          (p) => p.categoria?.nombre?.toLowerCase() === "consolas"
        );
        setProductos(filtrados);
      })
      .catch((err) => console.error("ERROR FETCH:", err));
  }, []);

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

  return (
    <>
      <Navbar />

      <main className="products-section">
        <h2>Consolas</h2>

        <div className="products-container">
          {productos.length === 0 ? (
            <p>Cargando productos...</p>
          ) : (
            productos.map((p) => (
              <div className="product-card" key={p.id}>
                <div className="card-inner">
                  <div className="card-front">
                    <img
                      src={imagenesPorId[p.id] || imgDefault}
                      alt={p.nombre}
                    />
                    <h3>{p.nombre}</h3>
                    <p>{formatearPrecio(p.precio)}</p>
                  </div>

                  <div className="card-back">
                    <h3>{p.nombre}</h3>
                    <p>{p.descripcion}</p>
                    <div>{formatearPrecio(p.precio)}</div>

                    <button
                      className="add-to-cart"
                      onClick={() => agregarAlCarrito(p)}
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <BackToHomeButton />
      </main>

      <Footer />
    </>
  );
}
