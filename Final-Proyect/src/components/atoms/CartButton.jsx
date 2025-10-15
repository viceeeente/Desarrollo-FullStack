import React from "react";
import Button from "./Button"; 
import Carrito from "../../assets/icons/cartLogo.png";

export default function GoToCartButton() {
  const handleClick = () => {
    window.location.href = "/Carrito";
  };

  return (
    <Button className="go-to-cart-button" onClick={handleClick}>
      <img src= {Carrito}  alt="Ir al carrito" className="cart-icon" />
    </Button>
  );
}
