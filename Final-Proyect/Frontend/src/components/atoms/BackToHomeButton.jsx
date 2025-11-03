import React from "react";
import Button from "./Button";

export default function BackToHomeButton() {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <Button className="back-home-button" onClick={handleClick}>
      Volver al inicio
    </Button>
  );
}
