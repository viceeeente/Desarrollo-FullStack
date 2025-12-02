import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductsTable({ productos = [], onEdit, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="table-container">
      <table className="products-table">
        <thead>
          <tr>
            <th>#</th><th>Nombre</th><th>Stock</th><th>Precio</th><th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p, i) => (
            <tr key={p.id}>
              <td>{i + 1}</td>
              <td>{p.nombre}</td>
              <td>{p.stock}</td>
              <td>${p.precio}</td>
              <td className="actions">
                <button onClick={() => onEdit(p.id)}>Editar</button>
                <button onClick={() => onDelete(p.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
