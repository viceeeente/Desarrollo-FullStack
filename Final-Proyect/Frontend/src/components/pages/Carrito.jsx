import React, { useEffect, useState } from "react";
import "../../assets/styles/Carrito.css";

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
    const totalCalculado = carrito.reduce((acc, item) => {
      const precioFinal = esDuoc ? Math.round(item.precio * 0.8) : item.precio;
      return acc + precioFinal;
    }, 0);

    setTotal(totalCalculado);
  }, [carrito, esDuoc]);

  const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    setCarrito([]);
    setTotal(0);
  };

  return (
    <div className="carrito-page">
      <h2>Tu Carrito</h2>

      <div className="carrito-container">
        <div className="carrito-header">
          <span className="col codigo">Código</span>
          <span className="col categoria">Categoría</span>
          <span className="col producto">Producto</span>
          <span className="col precio">Precio</span>
        </div>

        {carrito.length === 0 ? (
          <p style={{ textAlign: "center", color: "#1E90FF", marginTop: "1rem" }}>
            Tu carrito está vacío
          </p>
        ) : (
          carrito.map((item) => {
            const precioFinal = esDuoc ? Math.round(item.precio * 0.8) : item.precio;

            return (
              <div key={item.id} className="producto-carrito">
                <span className="col codigo">{item.id}</span>

                {/* FIX PRINCIPAL */}
                <span className="col categoria">
                  {item.categoria?.nombre || "Sin categoría"}
                </span>

                <span className="col producto">{item.nombre}</span>

                <span className="col precio">
                  ${precioFinal.toLocaleString()}
                  {esDuoc && (
                    <>
                      {" "}
                      <s>${item.precio.toLocaleString()}</s>{" "}
                      <small>(20% desc)</small>
                    </>
                  )}
                </span>
              </div>
            );
          })
        )}
      </div>

      <div className="total-compra">
        Total: ${total.toLocaleString()} CLP {esDuoc && "(con descuento Duoc)"}
      </div>

      <div className="carrito-botones">
        <button className="vaciar-carrito" onClick={vaciarCarrito} disabled={carrito.length === 0}>
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}
