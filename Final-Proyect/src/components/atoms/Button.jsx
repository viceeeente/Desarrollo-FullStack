import React from "react";
import "../../assets/styles/Button.css";

export default function Button({ children, onClick, className = "" }) {
  return (
    <button className={`base-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
