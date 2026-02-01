import React from 'react';
import '../estilos/Autor.css';

const Autor = () => {
  return (
    <div className="autor-page-container">
      <div className="autor-card">
        <div className="autor-header">
          <img 
            src="/imagenes/snoop.png" 
            alt="Snoop Dogg" 
            className="autor-photo" 
          />
          <div className="autor-titles">
            <h1>Snoop Dogg</h1>
            <span className="badge">THE G.O.A.T / CEO</span>
          </div>
        </div>

        <div className="autor-bio">
          <h3>Biografía</h3>
          <p>
            Calvin Cordozar Broadus Jr., conocido mundialmente como <strong>Snoop Dogg</strong>, 
            es la leyenda viva del Long Beach, California. Desde que Dr. Dre lo descubrió en '92, 
            ha definido el sonido y el estilo de toda una generación.
          </p>

          <h3>¿Por qué esta tienda?</h3>
          <p>
            "Estaba sentado en mi estudio escuchando <em>Doggystyle</em> y me di cuenta de que 
            la esencia de los 90 se estaba perdiendo. El estilo, la música, esa vibra de los 
            pantalones anchos y el G-Funk... quería crear un rincón donde la gente pudiera 
            conseguir esos productos auténticos que definieron la era dorada."
          </p>

          <div className="quote-box">
            <p>"Keep it G, keep it 90s. Descubre la selección que he preparado para ti, sobrino."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Autor;