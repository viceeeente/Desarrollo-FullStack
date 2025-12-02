import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import FormRow from "../molecules/FormRow";
import Button from "../atoms/Button";
import ErrorMessage from "../molecules/ErrorMessage";

export default function LoginForm() {
  const [formData, setFormData] = useState({ user: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.user,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setError("Usuario o contraseña incorrectos");
        return;
      }

      login(data.username, data.token, data.rol);

      if (data.rol === "ADMIN") navigate("/admin");
      else if (data.rol === "VENDEDOR") navigate("/vendedor");
      else navigate("/carrito");

    } catch (err) {
      console.error(err);
      setError("Error de conexión con el servidor");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2 className="text-green-400 text-2xl font-bold mb-4">Inicia Sesión</h2>

      <FormRow
        label="Usuario"
        inputProps={{
          name: "user",
          type: "text",
          value: formData.user,
          onChange: handleChange,
          required: true,
        }}
      />

      <FormRow
        label="Contraseña"
        inputProps={{
          name: "password",
          type: "password",
          value: formData.password,
          onChange: handleChange,
          required: true,
        }}
      />

      <Button type="submit">Confirmar</Button>
      <ErrorMessage message={error} />
    </form>
  );
}
