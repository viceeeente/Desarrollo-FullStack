export default function agregarAlCarrito(producto) {
  const stored = JSON.parse(localStorage.getItem("carrito")) || [];

  stored.push({
    id: producto.id,
    codigo: producto.codigo,
    nombre: producto.nombre,
    precio: producto.precio,
    descripcion: producto.descripcion,
    categoria: producto.categoria,
  });

  localStorage.setItem("carrito", JSON.stringify(stored));

  alert(`✅ ${producto.nombre} agregado al carrito (${stored.length} items)`);
}
