import React from "react";
import { Link } from "react-router-dom";

export default function ShortcutCard({ title, img, link }) {
  return (
    <Link to={link} className="shortcut-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
}
