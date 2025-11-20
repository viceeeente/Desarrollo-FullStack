import React from "react";
import Button from "./Button";

export default function CloseTabButton() {
  const handleClick = () => {
    window.close();
  };

  return (
    <Button className="others-buttons" onClick={handleClick}>
      Cerrar pestaña
    </Button>
  );
}
