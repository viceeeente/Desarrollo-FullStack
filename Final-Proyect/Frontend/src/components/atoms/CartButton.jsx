import React, { useRef } from "react";
import Button from "./Button";
import Carrito from "../../assets/icons/cartLogo.png";
import "../../assets/styles/Button.css";

export default function GoToCartButton() {
  const carritoTab = useRef(null);

  const handleClick = () => {
    if (carritoTab.current && !carritoTab.current.closed) {
      carritoTab.current.focus();
    } else {
      carritoTab.current = window.open("/carrito", "_blank");
    }
  };

  return (
    <Button className="go-to-cart-button" onClick={handleClick}>
      <img src={Carrito} alt="Ir al carrito" className="cart-icon" />
    </Button>
  );
}
