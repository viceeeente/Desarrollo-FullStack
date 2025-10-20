import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../atoms/Button";

describe("Button", () => {
  it("renders el texto pasado como children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("aplica la clase adicional pasada por className", () => {
    render(<Button className="my-class">Hola</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("base-button");
    expect(btn.className).toContain("my-class");
  });

  it("propaga props adicionales (por ejemplo onClick)", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Púlsame</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});