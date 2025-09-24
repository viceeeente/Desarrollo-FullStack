import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav id="main-menu">
        <img src="/assets/images/logo.png" alt="Level-UP GAMER"/>
        
        <div class="dropdown">
          <button id="categories-btn">Categorías</button>
          <ul class="dropdown-menu">
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

        <div class="search-bar">
          <input type="text" placeholder="Buscar productos..." />
          <button>🔍</button>
        </div>

        <div class="auth-buttons">
          <button id="auth-btn">Iniciar Sesión</button>
          <a href="/carrito" id="cart-btn-js">
            <img src="https://cdn-icons-png.flaticon.com/512/9341/9341730.png" alt="Carrito" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;