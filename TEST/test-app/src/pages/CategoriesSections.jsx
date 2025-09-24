import React from 'react';

const CategoriesSections = () => {
  return (
    <div className="dropdown">
      <button id="categories-btn">Categorías</button>
      <ul className="dropdown-menu">
        <li><a href="/consolas">Consolas</a></li>
        <li><a href="/pc">PC Gamer</a></li>
        <li><a href="/juegos">Juegos</a></li>
        <li><a href="/accesorios">Accesorios</a></li>
        <li><a href="/mouse">Mouse</a></li>
        <li><a href="/mousepad">Mousepad</a></li>
        <li><a href="/sillas">Sillas Gamers</a></li>
        <li><a href="/poleras">Poleras Personalizadas</a></li>
      </ul>
    </div>
  );
};

export default CategoriesSections;
