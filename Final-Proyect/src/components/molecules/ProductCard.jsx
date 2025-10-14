import React from "react";

export default function ProductCard({ producto, esDuoc }) {
  const { id, nombre, precio, descripcion, img } = producto;

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

  const handleAddToCart = () => {
    alert(`Producto agregado: ${id}`);
  };

  return (
    <div className="product-card">
      <div className="card-inner">
        <div className="card-front">
          <img src={img} alt={nombre} />
          <h3>{nombre}</h3>
          <p>{formatearPrecio(precio)}</p>
        </div>
        <div className="card-back">
          <h3>{nombre}</h3>
          <p>{descripcion}</p>
          <div>{formatearPrecio(precio)}</div>
          <button className="add-to-cart" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
