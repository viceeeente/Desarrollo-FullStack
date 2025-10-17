import React from "react";
import { Link } from "react-router-dom";

export default function ExtraOptions() {
  return (
    <div id="extra-options">
      <p>
        ¿No tienes cuenta?
        <Link to="/register">Regístrate aquí</Link>
      </p>
    </div>
  );
}
