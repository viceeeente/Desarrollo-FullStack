import React, { useEffect, useState } from "react";
import '../../assets/styles/Carrito.css'

export default function Carrito() {
  const [carrito, setCarrito] = useState([]);
  const [esDuoc, setEsDuoc] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const userData = JSON.parse(localStorage.getItem("userData"));
    const esDuocUser = userData?.email?.toLowerCase().endsWith("@duocuc.cl");
    setCarrito(storedCarrito);
    setEsDuoc(esDuocUser || false);
  }, []);

  useEffect(() => {
    const calcularTotal = () => {
      const totalCalculado = carrito.reduce((acc, item) => {
        const precioFinal = esDuoc ? Math.round(item.precio * 0.8) : item.precio;
        return acc + precioFinal;
      }, 0);
      setTotal(totalCalculado);
    };
    calcularTotal();
  }, [carrito, esDuoc]);

  const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    setCarrito([]);
    setTotal(0);
  };

  const volver = () => {
    const paginaAnterior = localStorage.getItem("paginaAnterior");
    if (paginaAnterior) {
      window.location.href = paginaAnterior;
    } else {
      window.close();
    }
  };

  return (
    <div className="carrito-page">
      <h2>Tu Carrito</h2>

      <div id="carrito-container">
        <div className="carrito-header">
          <span className="col codigo">Código</span>
          <span className="col categoria">Categoría</span>
          <span className="col producto">Producto</span>
          <span className="col precio">Precio</span>
        </div>

        {carrito.map((item) => {
          const precioFinal = esDuoc ? Math.round(item.precio * 0.8) : item.precio;
          return (
            <div key={item.id} className="producto-carrito">
              <span className="col codigo">{item.id}</span>
              <span className="col categoria">{item.categoria}</span>
              <span className="col producto">{item.nombre}</span>
              <span className="col precio">
                ${precioFinal.toLocaleString()}{" "}
                {esDuoc && (
                  <>
                    <s>${item.precio.toLocaleString()}</s>{" "}
                    <small>(20% desc)</small>
                  </>
                )}
              </span>
            </div>
          );
        })}
      </div>

      <div id="total-compra">
        Total: ${total.toLocaleString()} CLP {esDuoc && "(con descuento Duoc)"}
      </div>

      <div className="carrito-botones">
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
        <button onClick={volver}>Volver</button>
      </div>
    </div>
  );
}