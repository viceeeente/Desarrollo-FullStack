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
      headers: { Authorization: `Bearer ${user.token}` }
    })
    .then(res => res.json())
    .then(data => setProductos(data))
    .catch(() => setProductos([]));
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    const res = await fetch("http://localhost:8080/api/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        nombre: form.nombre,
        stock: Number(form.hora),
        precio: Number(form.precio),
      }),
    });

    if (res.ok) {
      const nuevo = await res.json();
      setProductos([nuevo, ...productos]);
      setForm({ nombre: "", stock: "", precio: "" });
    }
  };

  const handleEditSelect = id => {
    const p = productos.find(prod => prod.id === id);
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
      setProductos(productos.map(p => (p.id === editId ? actualizado : p)));
      setEditId(null);
      setForm({ nombre: "", stock: "", precio: "" });
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro deseas eliminar este producto?")) return;

    const res = await fetch(`http://localhost:8080/api/productos/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${user.token}` }
    });

    if (res.ok) {
      setProductos(productos.filter(p => p.id !== id));
    }
  };

  return (
    <section className="w-full max-w-5xl">
      <h2 className="products-title">Gestión de Productos</h2>

      <div className="admin-form flex gap-4 mb-6">
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange}/>
        <input name="stock" placeholder="Stock" value={form.stock} onChange={handleChange}/>
        <input name="precio" placeholder="Precio" value={form.precio} onChange={handleChange}/>

        {editId ? (
          <button onClick={handleEditSave} className="admin-btn save">Guardar</button>
        ) : (
          <button onClick={handleAdd} className="admin-btn add">Agregar</button>
        )}
      </div>

      <ProductsTable productos={productos} onEdit={handleEditSelect} onDelete={handleDelete}/>
    </section>
  );
}
