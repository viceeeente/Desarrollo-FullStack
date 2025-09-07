const names = document.getElementById("name");
const user = document.getElementById("user");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");
const error = document.getElementById("error");

const set = new Set();

names.addEventListener('blur' ,function(e) {
    if(names.value.length === 0){
        names.classList.add("error");
        set.add("<p>Completa el campo Nombre</p>");
    }else{
        names.classList.remove("error");
    }
});
user.addEventListener('blur' ,function(e) {
    if(user.value.length === 0){
        user.classList.add("error");
        set.add("<p>Completa el campo User</p>");
    }else{
        user.classList.remove("error");
    }
});
email.addEventListener('blur' ,function(e) {
    if(!email.value.includes("@")){
        email.classList.add("error");
        set.add("<p>Completa el campo Correo</p>");
    }else{
        email.classList.remove("error");
    }
});
password2.addEventListener('blur' ,function(e) {
    if(password.value !== password2.value){
        email.classList.add("error");
        set.add("<p>Las contraseñas no coinciden</p>");
    }else{
        email.classList.remove("error");
    }
});

form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    error.innerHTML = "";

    const errores = [];

    if (names.value.trim() === "") errores.push("Completa el campo Nombre.");
    if (user.value.trim() === "") errores.push("Completa el campo Usuario.");
    if (!email.value.includes("@")) errores.push("Correo inválido.");
    if (password.value.length < 4) errores.push("La contraseña debe tener al menos 4 caracteres.");
    if (password.value !== password2.value) errores.push("Las contraseñas no coinciden.");

    if (errores.length > 0) {
        error.innerHTML = errores.map(e => `<p>${e}</p>`).join("");
        return;
    }

    const userData = {
        name: names.value,
        username: user.value,
        email: email.value,
        password: password.value
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", user.value);

    window.location.href = "index.html";
});

