import React, { useState } from "react";
import "../estilos/menu.css";

const MenuSuperior = ({ total, productos }) => {
  const [carritoVisible, setCarritoVisible] = useState(false);

  const toggleCarrito = () => {
    setCarritoVisible(!carritoVisible);
  };

  return (
    <div className="menu-superior">
      <img
        src="/imagenes/supermercado.png"
        alt="Supermercado"
        className="icono-supermercado"
      />

      <span className="carrito-texto">
        {productos.length} : {total} €
      </span>

      <button className="toggle-carrito" onClick={toggleCarrito}>
        🛒
      </button>

      {carritoVisible && (
        <div className="carrito-productos">
          <h4>Carrito</h4>

          {productos.length > 0 ? (
            <ul>
              {productos.map((producto, index) => (
                <li key={index}>{producto}</li>
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
