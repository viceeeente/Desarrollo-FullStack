import React, { useState } from "react";
import InputField from "../atoms/InputField";
import Button from "../atoms/Button";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    user: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});
  const [globalErrors, setGlobalErrors] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.user.trim()) {
      tempErrors.user = "El usuario es requerido";
    }

    if (!formData.password || formData.password.length < 4) {
      tempErrors.password = "La contraseña debe tener al menos 4 caracteres";
    }

    if (formData.password !== formData.password2) {
      tempErrors.password2 = "Las contraseñas no coinciden";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.user,
          password: formData.password,
        }),
      });

      if (!res.ok) {
        throw new Error("Error en el registro");
      }

      alert("Usuario registrado correctamente");
      window.location.href = "/login";
    } catch (err) {
      console.error("ERROR:", err);
      setGlobalErrors(["No se pudo registrar el usuario"]);
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Registro</h2>

      {globalErrors.length > 0 && (
        <div id="error" className="error-messages">
          {globalErrors.map((err, index) => (
            <p key={index}>{err}</p>
          ))}
        </div>
      )}

      <InputField
        id="user"
        label="Usuario"
        value={formData.user}
        onChange={handleChange}
        error={errors.user}
      />

      <InputField
        id="password"
        label="Contraseña"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />

      <InputField
        id="password2"
        label="Confirmar Contraseña"
        type="password"
        value={formData.password2}
        onChange={handleChange}
        error={errors.password2}
      />

      <div className="button-row">
        <Button type="submit" className="btn-submit">Registrar</Button>
      </div>
    </form>
  );
}
