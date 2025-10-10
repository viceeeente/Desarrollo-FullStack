import React, { useEffect, useState } from "react";
import "../../assets/styles/productos.css";
import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";


const productos = [
  {
    id: "CO001",
    nombre: "PlayStation 5",
    precio: 499_990,
    descripcion:
      "La consola de última generación de Sony, que ofrece gráficos impresionantes y tiempos de carga ultrarrápidos para una experiencia de juego inmersiva",
    img: "https://www.esrb.org/wp-content/uploads/2024/09/slide_playstation-5.png",
  },
  {
    id: "CO002",
    nombre: "Xbox Series X",
    precio: 449_990,
    descripcion:
      "La consola más potente de Microsoft con soporte para 4K, Game Pass y cientos de títulos disponibles.",
    img: "https://media.solotodo.com/media/nav_items/xboxx.png",
  },
];

export default function Consolas() {
  const [esDuoc, setEsDuoc] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.email && userData.email.toLowerCase().endsWith("@duocuc.cl")) {
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
          <strong style={{ color: "green" }}>
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
    alert(`Agregar al carrito producto con id: ${id}`);
  };

  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}
