import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/Pagina404.css';

const Pagina404 = () => {
  return (
    <div className="error-404-container">
      <div className="error-content">
        <h1 className="glitch">404</h1>
        <div className="divider"></div>
        <h2>RUTA NO ENCONTRADA</h2>
        <p>Parece que te has perdido en el barrio. Esta zona todavía no ha sido mapeada.</p>
        
        <div className="sugerencias">
          <Link to="/" className="btn-back">
            VOLVER AL INICIO
          </Link>
        </div>
      </div>
      
      {/* Decoración estética hip-hop */}
      <div className="graffiti-overlay">STREETWEAR STORE</div>
    </div>
  );
};

export default Pagina404;