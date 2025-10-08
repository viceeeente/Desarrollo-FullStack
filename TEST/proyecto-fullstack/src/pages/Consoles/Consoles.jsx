import React from "react";
import './Consoles.css';
import { Link } from "react-router-dom";
import { productos } from '../../js/products'

const Consoles = () => {

    const names = ["PlayStation 5","Xbox Series X"];

    const filtredProducts = productos.filter(producto => 
        names.includes(producto.nombre)
    );

    return (
        <div className="consoled">
            <section class="products-section">
                <h2>Consolas</h2>
                <div className="products-container">
          {filtredProducts.map((producto) => (
            <div className="product-card" key={producto.id}>
              <div className="card-inner">
                <div className="card-front">
                  <img src={producto.image} alt={producto.nombre} />
                  <h3>{producto.nombre}</h3>
                  <p>${producto.precio}</p>
                </div>
                <div className="card-back">
                  <h3>{producto.nombre}</h3>
                  <p>{producto.description}</p>
                  <button className="add-to-cart" data-id={producto.id}>
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to ="/">
        <div class="back-button">
            <a>Volver al menú principal</a>    
        </div>
        </Link>
        </section>
    </div>
    );
};

export default Consoles;