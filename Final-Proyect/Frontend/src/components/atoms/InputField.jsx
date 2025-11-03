import React from "react";

export default function InputField({ id, label, type = "text", placeholder, value, onChange, error }) {
  return (
    <div className="input-row">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={error ? "error" : ""}
      />
      {error && <small className="error-text">{error}</small>}
    </div>
  );
}
