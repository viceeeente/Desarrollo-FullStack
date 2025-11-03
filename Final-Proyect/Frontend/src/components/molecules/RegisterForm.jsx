import React, { useState, useEffect } from "react";
import InputField from "../atoms/InputField";
import Button from "../atoms/Button";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    user: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});
  const [globalErrors, setGlobalErrors] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const isValidAge = (birthdate) => {
    if (!birthdate) return false;
    const birth = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age >= 18;
  };

const validate = () => {
  let tempErrors = {};
  let tempGlobalErrors = [];

  if (!formData.name.trim()) {
    tempErrors.name = "El nombre es requerido";
  }

  if (!formData.birthdate) {
    tempErrors.birthdate = "La fecha de nacimiento es requerida";
  } else if (!isValidAge(formData.birthdate)) {
    tempErrors.birthdate = "Debes ser mayor de 18 años";
  }

  if (!formData.user.trim()) {
    tempErrors.user = "El usuario es requerido";
  }

  if (!formData.email) {
    tempErrors.email = "El correo es requerido";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    tempErrors.email = "Correo inválido";
  }

  if (!formData.password || formData.password.length < 4) {
    tempErrors.password = "La contraseña debe tener al menos 4 caracteres";
  }

  if (formData.password !== formData.password2) {
    tempErrors.password2 = "Las contraseñas no coinciden";
  }

  setErrors(tempErrors);
  setGlobalErrors(tempGlobalErrors);

  return Object.keys(tempErrors).length === 0;
};


  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const isDuocUser = formData.email.trim().toLowerCase().endsWith("@duocuc.cl");

      const userData = {
        name: formData.name,
        username: formData.user,
        email: formData.email,
        password: formData.password,
        idDuocUser: isDuocUser,
      };

      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", formData.user);

      alert("Registro exitoso!");
      window.location.href = "/";
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      birthdate: "",
      user: "",
      email: "",
      password: "",
      password2: "",
    });
    setErrors({});
    setGlobalErrors([]);
  };

  useEffect(() => {
    const birthInput = document.getElementById("birthdate");
    if (birthInput) {
      birthInput.max = new Date().toISOString().split("T")[0];
    }
  }, []);

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Completa el formulario</h2>

      {globalErrors.length > 0 && (
        <div id="error" className="error-messages">
          {globalErrors.map((err, index) => (
            <p key={index}>{err}</p>
          ))}
        </div>
      )}

      <InputField
        id="name"
        label="Nombre"
        placeholder="..."
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        className={errors.name ? "error" : ""}
      />

      <InputField
        id="birthdate"
        label="Fecha de nacimiento"
        type="date"
        value={formData.birthdate}
        onChange={handleChange}
        error={errors.birthdate}
        className={errors.birthdate ? "error" : ""}
        max={new Date().toISOString().split("T")[0]}
      />

      <InputField
        id="user"
        label="Usuario"
        placeholder="..."
        value={formData.user}
        onChange={handleChange}
        error={errors.user}
        className={errors.user ? "error" : ""}
      />

      <InputField
        id="email"
        label="Correo"
        type="email"
        placeholder="email@example.com"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        className={errors.email ? "error" : ""}
      />

      <InputField
        id="password"
        label="Contraseña"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        className={errors.password ? "error" : ""}
      />

      <InputField
        id="password2"
        label="Confirmar Contraseña"
        type="password"
        value={formData.password2}
        onChange={handleChange}
        error={errors.password2}
        className={errors.password2 ? "error" : ""}
      />

      <div className="button-row">
        <Button type="reset" onClick={handleReset} className="btn-reset">Limpiar</Button>
        <Button type="submit" className="btn-submit">Enviar</Button>
      </div>
    </form>
  );
}
