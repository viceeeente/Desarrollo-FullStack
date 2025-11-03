import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ExtraOptions from "../molecules/ExtraOptions"; 

describe("ExtraOptions", () => {
  it("muestra el texto de invitación a registrarse", () => {
    render(
      <MemoryRouter>
        <ExtraOptions />
      </MemoryRouter>
    );
    expect(screen.getByText(/¿No tienes cuenta\?/i)).toBeInTheDocument();
  });

  it("renderiza el enlace con el texto 'Regístrate aquí'", () => {
    render(
      <MemoryRouter>
        <ExtraOptions />
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: /Regístrate aquí/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/register");
  });
});