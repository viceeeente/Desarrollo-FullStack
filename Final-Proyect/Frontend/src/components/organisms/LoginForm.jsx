import React, { useState } from "react";
import FormRow from "../molecules/FormRow";
import Button from "../atoms/Button";
import ErrorMessage from "../molecules/ErrorMessage";

export default function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (!storedUserData) {
      setError("No hay usuarios registrados");
      return;
    }

    if (
      userName.trim() === storedUserData.username &&
      password.trim() === storedUserData.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", storedUserData.username);
      window.location.href = "/";
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Inicia Sesión</h2>

      <div className="login-row">
        <FormRow
          label="Usuario"
          inputProps={{
            id: "user",
            type: "text",
            name: "user",
            value: userName,
            onChange: (e) => setUserName(e.target.value),
            required: true,
          }}
        />
      </div>

      <div className="login-row">
        <FormRow
          label="Contraseña"
          inputProps={{
            id: "password",
            type: "password",
            name: "password",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            required: true,
          }}
        />
      </div>

      <Button type="submit">Confirmar</Button>
      <ErrorMessage message={error} />
    </form>
  );
}
