import React from 'react';

export default function AuthButton({ isLoggedIn, onLogout }) {
  return (
    <div className="auth-buttons">
      {isLoggedIn ? (
        <button onClick={onLogout}>Cerrar sesión</button>
      ) : (
        <a href="/login">
          <button>Iniciar sesión</button>
        </a>
      )}
    </div>
  );
}
