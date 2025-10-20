export default function agregarAlCarrito(producto) {
  try {
    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];

    const nuevoCarrito = [...carritoActual, producto];

    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

    alert(`"${producto.nombre}" agregado al carrito.`);
  } catch (error) {
    console.error("Error al agregar al carrito:", error);
  }
}
