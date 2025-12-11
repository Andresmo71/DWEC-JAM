import React, { useState } from "react";
import "../estilos/menu.css";
import {Link} from 'react-router-dom'

// Componente MenuSuperior
const MenuSuperior = ({ total, productos }) => {
  const [carritoVisible, setCarritoVisible] = useState(false);

  const toggleCarrito = () => {
    setCarritoVisible(!carritoVisible);
  };

  return (
    <div className="menu-superior">
      {/* Icono a la izquierda */}
      <img
        src="/imagenes/noventa.jpg"
        alt="Supermercado"
        className="icono-supermercado"
      />

      {/* Texto a la derecha */}
      <span className="carrito-texto">{productos.length} : {total}Є</span>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/autor">Autor</Link></li>
      </ul>

      {/* Botón para mostrar/ocultar carrito */}
      <button className="toggle-carrito" onClick={toggleCarrito}>
        <img src="/imagenes/snoop.png" alt="Carro" className="icono-snoop" />
      </button>

      {/* Carrito de productos */}
      {carritoVisible && (
        <div className="carrito-productos">
          <h4>Carrito</h4>
          { productos.length > 0 ? (
            <ul>
              { productos.map((producto, index) => (
                <li key={index}>{`${producto.nombre} (${producto.cantidad})`}</li>
              ))}
            </ul>
          ) : (
            <p>No hay productos en el carrito.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MenuSuperior;
