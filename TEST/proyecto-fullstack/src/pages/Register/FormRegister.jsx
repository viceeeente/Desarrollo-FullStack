import React from "react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


function FormRegister() {
const [count, setCount] = useState(0)

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef(null);

  const handleName = (e) => {
    const valor = e.target.value;
    setNombre(valor);
    setErrorMessage(valor.length < 3 ? 'Error, ingrese al menos 3 letras':'');
  }

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrorMessage(value.includes("@")?'':'Error, ingrese un signo arroba')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = formRef.current.querySelectorAll('input');
    for(let eleme of inputs){
        if(eleme.classList.contains('error')){
            setErrorMessage("Error, revisa los campos en rojo.");
          return;
        }
      }
  
    formRef.current.submit()
  }
  return (
    <>
    <h1>Formulario de registro</h1>
    <form action="#" id="formulario" ref={formRef} onSubmit={handleSubmit}>
        <div className="row">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" placeholder="Juan"
            className={nombre.length<3?'error':''} value={nombre} onChange={handleName}
            />
        </div>
        <div className="row">
            <label htmlFor="mail">E-mail</label>
            <input type="email" name="mail" id="mail" placeholder="juan@mail.com"
            className={email.includes("@")?'':'error'} value={email} onChange={handleEmail}
            />
        </div>
        <div className="row">
            <label htmlFor="edad">Edad</label>
            <input type="number" name="edad" id="edad" placeholder="19" class=""/>
        </div>
        <div className="row">
            <label htmlFor="usuario">Usuario</label>
            <input type="text" name="usuario" id="usuario" placeholder="juanito"/>
        </div>
        <div className="row">
            <label htmlFor="clave1">Clave</label>
            <input type="password" name="clave1" id="clave1" placeholder="clave123"/>
        </div>
        <div className="row">
            <label htmlFor="clave2">Confirmar clave</label>
            <input type="password" name="clave2" id="clave2" placeholder="clave123" class=""/>
        </div>
        <div className="row">
            <button type="reset">Limpiar</button>
            <button type="submit">Enviar</button>
        </div>
    </form>
    <div id="errores">{errorMessage}</div>
    </>

 )
}
  


export default FormRegister