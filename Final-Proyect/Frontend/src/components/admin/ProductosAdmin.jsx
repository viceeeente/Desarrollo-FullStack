import React, { useState, useEffect } from "react";
import "../../assets/styles/admin.css";

export default function ProductosAdmin() {
  const [productos, setProductos] = useState([]);
  const [form, setForm] = useState({ nombre: "", stock: "", precio: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/productos")
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(() => {});
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    if (!form.nombre || !form.stock || !form.precio) return;

    const res = await fetch("http://localhost:8080/api/productos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: form.nombre,
        stock: Number(form.stock),
        precio: Number(form.precio)
      })
    });

    if (res.ok) {
      const nuevo = await res.json();
      setProductos([nuevo, ...productos]); 
      setForm({ nombre: "", stock: "", precio: "" });
    }
  };

  const handleDelete = async id => {
    const res = await fetch(`http://localhost:8080/api/productos/${id}`, {
      method: "DELETE"
    });

    if (res.ok) {
      setProductos(productos.filter(p => p.id !== id)); 
    }
  };

  const handleEditSelect = id => {
    const p = productos.find(p => p.id === id);
    setForm({ nombre: p.nombre, stock: p.stock, precio: p.precio });
    setEditId(id);
  };

  const handleEditSave = async () => {
    const res = await fetch(`http://localhost:8080/api/productos/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: form.nombre,
        stock: Number(form.stock),
        precio: Number(form.precio)
      })
    });

    if (res.ok) {
      const actualizado = await res.json();
      setProductos(productos.map(p => (p.id === editId ? actualizado : p)));
      setForm({ nombre: "", stock: "", precio: "" });
      setEditId(null);
    }
  };

  return (
    <section className="admin-productos">
      <h2 className="productos-title">Lista de productos</h2>

      <div className="admin-form">
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
        <input name="stock" placeholder="Stock" value={form.stock} onChange={handleChange} />
        <input name="precio" placeholder="Precio" value={form.precio} onChange={handleChange} />

        {editId ? (
          <button onClick={handleEditSave} className="admin-btn">Guardar</button>
        ) : (
          <button onClick={handleAdd} className="admin-btn">Agregar</button>
        )}
      </div>
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th><th>Nombre</th><th>Stock</th><th>Precio</th><th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nombre}</td>
                <td>{p.stock}</td>
                <td>${p.precio}</td>
                <td>
                  <button onClick={() => handleEditSelect(p.id)} className="admin-btn">Editar</button>
                  <button onClick={() => handleDelete(p.id)} className="admin-btn">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
