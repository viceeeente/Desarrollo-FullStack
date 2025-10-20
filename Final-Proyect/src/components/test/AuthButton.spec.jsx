import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AuthButton from "../molecules/AuthButton"; // Ajusta la ruta según tu estructura

describe("AuthButton", () => {
  it("muestra el botón 'Cerrar sesión' si el usuario está logueado", () => {
    render(<AuthButton isLoggedIn={true} onLogout={() => {}} />);
    expect(screen.getByRole("button", { name: /cerrar sesión/i })).toBeInTheDocument();
  });

  it("muestra el botón 'Iniciar sesión' si el usuario NO está logueado", () => {
    render(<AuthButton isLoggedIn={false} onLogout={() => {}} />);
    expect(screen.getByRole("button", { name: /iniciar sesión/i })).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/login");
  });

  it("llama a onLogout cuando se hace clic en 'Cerrar sesión'", () => {
    const handleLogout = jest.fn();
    render(<AuthButton isLoggedIn={true} onLogout={handleLogout} />);
    const logoutButton = screen.getByRole("button", { name: /cerrar sesión/i });
    fireEvent.click(logoutButton);
    expect(handleLogout).toHaveBeenCalledTimes(1);
  });
});