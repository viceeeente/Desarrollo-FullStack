import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ProductsTable from "../organisms/ProductsTable";
import "../../assets/styles/vendedor.css";

export default function ProductosVendedor() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [form, setForm] = useState({ nombre: "", stock: "", precio: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = () => {
    fetch("http://localhost:8080/api/productos", {
      headers: { Authorization: `Bearer ${user.token}` },
    })
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch(() => setProductos([]));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    if (!form.nombre || !form.stock || !form.precio) return;

    const res = await fetch("http://localhost:8080/api/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        nombre: form.nombre,
        stock: Number(form.stock),   // corregido: antes estaba `form.hora`
        precio: Number(form.precio),
      }),
    });

    if (res.ok) {
      const nuevo = await res.json();
      setProductos([nuevo, ...productos]);
      setForm({ nombre: "", stock: "", precio: "" });
    }
  };

  const handleEditSelect = (id) => {
    const p = productos.find((prod) => prod.id === id);
    setForm({ nombre: p.nombre, stock: p.stock, precio: p.precio });
    setEditId(id);
  };

  const handleEditSave = async () => {
    const res = await fetch(`http://localhost:8080/api/productos/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        nombre: form.nombre,
        stock: Number(form.stock),
        precio: Number(form.precio),
      }),
    });

    if (res.ok) {
      const actualizado = await res.json();
      setProductos(productos.map((p) => (p.id === editId ? actualizado : p)));
      setEditId(null);
      setForm({ nombre: "", stock: "", precio: "" });
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro deseas eliminar este producto?")) return;

    const res = await fetch(`http://localhost:8080/api/productos/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${user.token}` },
    });

    if (res.ok) {
      setProductos(productos.filter((p) => p.id !== id));
    }
  };

  return (
    <section className="vendedor-main">
      <h2 className="productos-title">Gestión de productos</h2>

      <div className="admin-form">
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
        <input name="stock" placeholder="Stock" value={form.stock} onChange={handleChange} />
        <input name="precio" placeholder="Precio" value={form.precio} onChange={handleChange} />

        {editId ? (
          <button onClick={handleEditSave} className="vendedor-btn-add">Guardar</button>
        ) : (
          <button onClick={handleAdd} className="vendedor-btn-add">Agregar</button>
        )}
      </div>

      <div className="table-container">
        <table className="productos-table">
          <thead>
            <tr>
              <th>ID</th><th>Nombre</th><th>Stock</th><th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nombre}</td>
                <td>{p.stock}</td>
                <td>${p.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}