import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "../../assets/styles/vendedor.css";

export default function BoletasVendedor() {
  const { user } = useContext(AuthContext);
  const [boletas, setBoletas] = useState([]);
  const [detalles, setDetalles] = useState([]);
  const [boletaSeleccionada, setBoletaSeleccionada] = useState(null);

  useEffect(() => {
    cargarBoletas();
  }, []);

  const cargarBoletas = () => {
    fetch("http://localhost:8080/api/boletas", {
      headers: { Authorization: `Bearer ${user.token}` }
    })
    .then(res => res.json())
    .then(data => setBoletas(data))
    .catch(() => setBoletas([]));
  };

  const verDetalle = (boletaId) => {
    setBoletaSeleccionada(boletaId);
    fetch(`http://localhost:8080/api/boletas/${boletaId}/detalle`, {
      headers: { Authorization: `Bearer ${user.token}` }
    })
    .then(res => res.json())
    .then(data => setDetalles(data))
    .catch(() => setDetalles([]));
  };

  const handleEliminarDetalle = (detalleId) => {
    if (!window.confirm("Seguro que quieres eliminar este detalle de la boleta?")) return;

    fetch(`http://localhost:8080/api/detalle-boleta/${detalleId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${user.token}` }
    })
    .then(res => {
      if (res.ok) {
        setDetalles(detalles.filter(d => d.id !== detalleId));
      }
    });
  };

  return (
    <section className="w-full max-w-5xl">
      <h2 className="productos-title">Boletas Realizadas</h2>

      <div className="table-container">
        <table className="productos-table">
          <thead>
            <tr>
              <th>ID</th><th>Fecha</th><th>Total</th><th>Ver detalle</th>
            </tr>
          </thead>
          <tbody>
            {boletas.map(b => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.fecha}</td>
                <td>${b.total}</td>
                <td>
                  <button onClick={() => verDetalle(b.id)} className="admin-btn edit">
                    Ver detalle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {boletaSeleccionada && (
        <>
          <h3 className="text-green-400 mt-6 mb-3 text-xl font-bold">
            Detalle Boleta #{boletaSeleccionada}
          </h3>

          <table className="w-full productos-table">
            <thead>
              <tr className="text-green-400 border-b border-green-800">
                <th>ID</th><th>Producto</th><th>Cantidad</th><th>Subtotal</th><th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {detalles.map(d => (
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.producto}</td>
                  <td>{d.cantidad}</td>
                  <td>${d.subtotal}</td>
                  <td>
                    <button onClick={() => handleEliminarDetalle(d.id)} className="admin-btn delete">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </section>
  );
}
