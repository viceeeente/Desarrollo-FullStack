import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ShortcutCard from "../molecules/ShortcutCard"; 

describe("ShortcutCard", () => {
  const props = {
    title: "Accesorios",
    img: "accesorios.jpg",
    link: "/accesorios"
  };

  it("renderiza el título correctamente", () => {
    render(
      <MemoryRouter>
        <ShortcutCard {...props} />
      </MemoryRouter>
    );
    expect(screen.getByText("Accesorios")).toBeInTheDocument();
  });

  it("renderiza la imagen con el alt correspondiente", () => {
    render(
      <MemoryRouter>
        <ShortcutCard {...props} />
      </MemoryRouter>
    );
    const image = screen.getByAltText("Accesorios");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "accesorios.jpg");
  });

  it("el enlace apunta a la ruta correcta", () => {
    render(
      <MemoryRouter>
        <ShortcutCard {...props} />
      </MemoryRouter>
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/accesorios");
    expect(link).toHaveClass("shortcut-card");
  });
});