import React from "react";

export default function Button({ children, onClick, className, type = "button" }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
