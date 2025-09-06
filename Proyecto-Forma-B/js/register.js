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
    if(!password.value !== password2.value){
        email.classList.add("error");
        set.add("<p>Las contraseñas no coinciden</p>");
    }else{
        email.classList.remove("error");
    }
});

form.addEventListener('submit', function (e){
    error.innerHTML = "";
    set.clear();
    let thereErrors = false;

    document.querySelectorAll("input").forEach(element=> {
        if(element.classList.contains("error")){
            thereErrors = true;
        }
        else{
            localStorage.setItem("nameUser",names.value)
            thereErrors = false;

            window.location.href = "index.html";
        }
    });

    if(thereErrors){
        e.preventDefault();
        set.forEach(p => {
            error.innerHTML += p;
        });
    }else{
        localStorage.setItem("nameUser",names.value)
        thereErrors = false;

        window.location.href = "index.html";
    }
})

