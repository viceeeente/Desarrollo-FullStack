import React from "react";
import { Link } from "react-router-dom";
import { productos } from "../js/products";

const PC = () => {
    const names = ["PC Gamer ASUS ROG Strix", "PC Gamer AMD Ryzen"]

    const filtredProducts = productos.filter(producto => 
        names.includes(producto.nombre)
    );
    return (
            <div className="computers">
                <section class="products-section">
                    <h2>Computadores</h2>
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

export default PC;