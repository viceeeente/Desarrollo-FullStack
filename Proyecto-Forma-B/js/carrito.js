const productos = [
  { id: "CO001", categoria: "Consolas", nombre: "PlayStation 5", precio: 549990 },
  { id: "CO002", categoria: "Consolas", nombre: "Xbox Series X", precio: 499990 },

  { id: "CG001", categoria: "Computadores Gamers", nombre: "PC Gamer ASUS ROG Strix", precio: 1299990 },
  { id: "CG002", categoria: "Computadores Gamers", nombre: "PC Gamer AMD Ryzen", precio:  1100000 },
  
  { id: "JM001", categoria: "Juegos de Mesa", nombre: "Catan", precio: 29990 },
  { id: "JM002", categoria: "Juegos de Mesa", nombre: "Carcassonne", precio: 24990 },
  
  { id: "AC001", categoria: "Accesorios", nombre: "Controlador Inalámbrico Xbox Series X", precio: 59990 },
  { id: "AC002", categoria: "Accesorios", nombre: "Auriculares Gamer HyperX Cloud II", precio: 79990 },
  
  { id: "SG001", categoria: "Sillas Gamers", nombre: "Silla Gamer SecretLab Titan", precio: 349990 },
  
  { id: "MS001", categoria: "Mouse", nombre: "Mouse Gamer Logitech G502 HERO", precio: 49990 },

  { id: "MP001", categoria: "Mousepad", nombre: "Mousepad Razer Goliathus Extended Chroma", precio: 29990 },
  
  { id: "PP001", categoria: "Poleras Personalizadas", nombre: "Polera Gamer Personalizada 'Level-UP'", precio: 14990 },


];

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`${producto.nombre} agregado al carrito`);
}

function mostrarCarrito() {
  const contenedor = document.getElementById("carrito-container");
  if (!contenedor) return;
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const userData = JSON.parse(localStorage.getItem("userData"));
  const esDuoc = userData && userData.email.toLowerCase().endsWith("@duocuc.cl");

  contenedor.innerHTML = `
    <div class="carrito-header">
      <span class="col codigo">Código</span>
      <span class="col categoria">Categoría</span>
      <span class="col producto">Producto</span>
      <span class="col precio">Precio</span>
    </div>
  `;
  let total = 0;
  carrito.forEach(item => {
    let finalPrice = item.precio;

    if(esDuoc) {
      finalPrice = Math.round(item.precio * 0.8);
    }
    total += finalPrice;
    const div = document.createElement("div");
    div.classList.add("producto-carrito");
   div.innerHTML = `
  <span class="col codigo">${item.id}</span>
  <span class="col categoria">${item.categoria}</span>
  <span class="col producto">${item.nombre}</span>
  <span class="col precio">$${finalPrice.toLocaleString()}</span>
    ${
      esDuoc
        ? `<s>$${item.precio.toLocaleString()}</s> $${finalPrice.toLocaleString()} <small>(20% desc)</small>`
        : `$${item.precio.toLocaleString()}`
    }
  </span>
`;

    contenedor.appendChild(div);
  });
  const totalDiv = document.getElementById("total-compra");
  totalDiv.textContent = `Total: $${total.toLocaleString()} CLP${esDuoc ? "(con descuento Duoc)":""}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".add-to-cart");
  botones.forEach(btn => {
    btn.addEventListener("click", e => {
      const id = e.target.dataset.id;
      agregarAlCarrito(id);
    });
  });

  mostrarCarrito();

  window.addEventListener('storage', mostrarCarrito);

  const vaciarBtn = document.getElementById("vaciar-carrito");
  if (vaciarBtn) {
    vaciarBtn.addEventListener("click", () => {
      localStorage.removeItem("carrito");
      mostrarCarrito();
    });
  }
});
