import React from "react";
import Button from "./Button"; 
import Carrito from "../../assets/icons/cartLogo.png";
import "../../assets/styles/Button.css";

export default function GoToCartButton() {
  const handleClick = () => {
    window.location.href = "/carrito";
  };

  return (
    <Button className="go-to-cart-button" onClick={handleClick}>
      <img src= {Carrito}  alt="Ir al carrito" className="cart-icon" />
    </Button>
  );
}
