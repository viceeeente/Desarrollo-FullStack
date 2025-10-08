import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import CategoriesSections from '../../components/CategorySections';
import { categories } from '../../js/categories/';

const Homepage = () => {

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
    </div>
  );
};

export default Homepage;