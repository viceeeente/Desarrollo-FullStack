import React from "react";
import Button from "./Button";

export default function ClearCartButton({ onClear }) {
  return (
    <Button className="others-buttons" onClick={onClear}>
      Vaciar carrito
    </Button>
  );
}
