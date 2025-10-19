import React from "react";
export default function Input({ id, type, name, value, onChange, required = false }) {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}
