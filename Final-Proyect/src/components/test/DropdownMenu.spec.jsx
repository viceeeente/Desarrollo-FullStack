import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DropdownMenu from "../molecules/DropdownMenu"; // ajusta la ruta según tu estructura

describe("DropdownMenu", () => {
  it("muestra solo el botón al inicio (menú cerrado)", () => {
    render(
      <MemoryRouter>
        <DropdownMenu />
      </MemoryRouter>
    );
    expect(screen.getByRole("button", { name: /categorías/i })).toBeInTheDocument();
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("abre el menú al hacer clic en el botón", () => {
    render(
      <MemoryRouter>
        <DropdownMenu />
      </MemoryRouter>
    );
    const button = screen.getByRole("button", { name: /categorías/i });
    fireEvent.click(button);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("renderiza todos los enlaces de categorías cuando está abierto", () => {
    render(
      <MemoryRouter>
        <DropdownMenu />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole("button", { name: /categorías/i }));

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(8);
    expect(links.map((link) => link.textContent)).toEqual([
      "Consolas",
      "PC Gamer",
      "Juegos",
      "Accesorios",
      "Mouse",
      "Mousepad",
      "Sillas Gamers",
      "Poleras Personalizadas",
    ]);
  });
});