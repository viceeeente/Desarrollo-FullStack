const btn = document.getElementById("categories-btn");
const menu = document.querySelector(".dropdown-menu");

btn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Para cerrar el menú si haces clic fuera
window.addEventListener("click", (e) => {
    if (!e.target.matches("#categories-btn")) {
        menu.style.display = "none";
    }
});
