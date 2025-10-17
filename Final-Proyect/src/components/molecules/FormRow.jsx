import React from "react";

export default function FormRow({ label, inputProps }) {
  return (
    <div className="login-row">
      <label htmlFor={inputProps.id}>{label}</label>
      <input {...inputProps} />
    </div>
  );
}
