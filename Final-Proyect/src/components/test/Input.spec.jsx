import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../atoms/Input"; // ajusta la ruta si tu test está en otra carpeta

describe("Input", () => {
  it("renderiza con los atributos correctos", () => {
    render(
      <Input
        id="email"
        name="email"
        type="email"
        value="test@example.com"
        onChange={() => {}}
        required
      />
    );

    const input = screen.getByDisplayValue("test@example.com");
    expect(input).toHaveAttribute("id", "email");
    expect(input).toHaveAttribute("name", "email");
    expect(input).toHaveAttribute("type", "email");
    expect(input).toBeRequired();
  });

  it("llama a onChange cuando se modifica el valor", () => {
    const handleChange = jest.fn();
    render(
      <Input
        id="username"
        name="username"
        type="text"
        value=""
        onChange={handleChange}
      />
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Vicee" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("no es requerido si no se pasa la prop required", () => {
    render(
      <Input
        id="optional"
        name="optional"
        type="text"
        value=""
        onChange={() => {}}
      />
    );

    const input = screen.getByRole("textbox");
    expect(input).not.toBeRequired();
  });
});