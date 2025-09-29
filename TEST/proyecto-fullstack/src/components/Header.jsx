import React from 'react';
import './Header.css';
import CategoriesSections from '../pages/CategorySections';
import logo from '../icons/logo.png';

const Header = () => {
  return (
    <header>
      <nav id="main-menu">
        <img src={logo} alt='icon'/>
        
        <CategoriesSections />

        <div className="search-bar">
          <input type="text" placeholder="Buscar productos..." />
          <button>🔍</button>
        </div>

        <div className="auth-buttons">
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
