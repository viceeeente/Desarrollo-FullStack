import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../organisms/Footer"; 

describe("Footer", () => {
  it("muestra el texto de derechos reservados", () => {
    render(<Footer />);
    expect(
      screen.getByText(/© 2025 Level-UP GAMER. Todos los derechos reservados/i)
    ).toBeInTheDocument();
  });

  it("renderiza los íconos de redes sociales con alt correctos", () => {
    render(<Footer />);
    expect(screen.getByAltText("Facebook")).toBeInTheDocument();
    expect(screen.getByAltText("Instagram")).toBeInTheDocument();
    expect(screen.getByAltText("Twitter")).toBeInTheDocument();
    expect(screen.getByAltText("WhatsApp")).toBeInTheDocument();
  });

  it("los enlaces tienen target='_blank' y rel='noreferrer'", () => {
    render(<Footer />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noreferrer");
    });
  });
});