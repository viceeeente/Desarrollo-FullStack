import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import CategoriesSections from './CategoriesSections';

const Homepage = () => {
  const categories = [
    { name: 'Consolas', icon: '/assets/images/icons/consolas.png', link: '/consolas' },
    { name: 'PC Gamer', icon: '/assets/images/icons/pc-gamer.png', link: '#pc' },
    { name: 'Juegos', icon: '/assets/images/icons/juegos.png', link: '#juegos' },
    { name: 'Accesorios', icon: '/assets/images/icons/accesorios.png', link: '#accesorios' },
    { name: 'Mouse', icon: '/assets/images/icons/mouse.png', link: '#mouse' },
    { name: 'Mousepad', icon: '/assets/images/icons/mousepad.png', link: '#mousepad' },
    { name: 'Sillas Gamers', icon: '/assets/images/icons/sillas-gamer.png', link: '#sillas' },
    { name: 'Poleras Personalizadas', icon: '/assets/images/icons/poleras.png', link: '#poleras' }
  ];

  return (
    <div className="homepage">
      <section className="welcome">
        <div className="welcome-text">
          <h2>¡Bienvenido a Level-UP GAMER!</h2>
          <p>Misión: Proporcionar productos de alta calidad para gamers en todo Chile.</p>
          <p>Visión: Ser la tienda online líder en productos para gamers.</p>
        </div>
      </section>

      <section className="shortcuts">
        {categories.map((category, index) => (
          <Link key={index} to={category.link} className="shortcut-card">
            <img src={category.icon} alt={category.name} />
            <h3>{category.name}</h3>
          </Link>
        ))}
      </section>

      <footer className="footer">
        <p>&copy; 2024 Level-UP GAMER. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Homepage;