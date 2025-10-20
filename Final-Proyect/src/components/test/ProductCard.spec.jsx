import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../molecules/ProductCard"; 

describe("ProductCard", () => {
  const productoMock = {
    id: "p001",
    nombre: "Mouse Gamer",
    precio: 25000,
    descripcion: "Mouse con RGB y 16000 DPI",
    img: "mouse.jpg"
  };

  it("renderiza correctamente los datos del producto", () => {
  render(<ProductCard producto={productoMock} esDuoc={false} />);
  expect(screen.getAllByText(/Mouse Gamer/)).toHaveLength(2);
  expect(screen.getByAltText("Mouse Gamer")).toBeInTheDocument();
  expect(screen.getAllByText("$25.000 CLP")).toHaveLength(2);
  expect(screen.getByText("Mouse con RGB y 16000 DPI")).toBeInTheDocument();
});

  it("muestra precio con descuento si esDuoc es true", () => {
    render(<ProductCard producto={productoMock} esDuoc={true} />);
    expect(screen.getAllByText("$25.000")).toHaveLength(2); 
    expect(screen.getAllByText("$20.000 CLP")).toHaveLength(2); 
    expect(screen.getAllByText("(20% DCTO DUOC)")).toHaveLength(2);
  });

  it("ejecuta alert al hacer clic en 'Agregar al carrito'", () => {
    window.alert = jest.fn(); // mock de alert
    render(<ProductCard producto={productoMock} esDuoc={false} />);
    const button = screen.getByRole("button", { name: /agregar al carrito/i });
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith("Producto agregado: p001");
  });
});