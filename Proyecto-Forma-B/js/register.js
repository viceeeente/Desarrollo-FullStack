const names = document.getElementById("name");
const user = document.getElementById("user");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");
const errors = document.getElementById("errors");

const set = new Set();

names.addEventListener('blur' ,function(e) {
    if(names.value.lenght == 0){
        names.classList.add("errors");
        set.add("<p>Completa el campo Nombre</p>");
    }else{
        names.classList.remove("errors");
    }
});
user.addEventListener('blur' ,function(e) {
    if(user.value.lenght == 0){
        user.classList.add("errors");
        set.add("<p>Completa el campo User</p>");
    }else{
        user.classList.remove("errors");
    }
});
email.addEventListener('blur' ,function(e) {
    if(!email.value.includes("@")){
        email.classList.add("errors");
        set.add("<p>Completa el campo Correo</p>");
    }else{
        email.classList.remove("errors");
    }
});
password2.addEventListener('blur' ,function(e) {
    if(!password.value!=password2.value){
        email.classList.add("errors");
        set.add("<p>Las contraseñas no coinciden</p>");
    }else{
        email.classList.remove("errors");
        set.add("<p>Las contraseñas coinciden")
    }
});

form.addEventListener('submit', function (e){
    errors.innerHTML = "";
    document.querySelectorAll("input").forEach(element=> {
        if(element.classList.contains("error")){
            e.preventDefault();
            set.forEach(p=>{
                errors.innerHTML +=p;
            })
        }
    })
})