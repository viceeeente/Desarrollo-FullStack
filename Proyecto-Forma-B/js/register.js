const name = document.getElementById("name");
const user = document.getElementById("user");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");
const errors = document.getElementById("errors");

const set = new Set();

name.addEventListener('blur' ,function(e) {
    if(name.value.lenght == 0){
        name.classList.add("errors");
        set.add("<p>Completa el campo Nombre</p>");
    }else{
        name.classList.remove("errors");
    }
});
user.addEventListener('blur' ,function(e) {
    if(user.value.lenght == 0){
        user.classList.add("errors");
        set.add("<p>Completa el campo Nombre</p>");
    }else{
        user.classList.remove("errors");
    }
});
email.addEventListener('blur' ,function(e) {
    if(!email.value.includes("@")){
        email.classList.add("errors");
        set.add("<p>Completa el campo Nombre</p>");
    }else{
        email.classList.remove("errors");
    }
});