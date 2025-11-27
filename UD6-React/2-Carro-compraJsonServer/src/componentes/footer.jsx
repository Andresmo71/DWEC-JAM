import React, { useState } from "react";

const Footer = ({ total, productos }) => {

  const [manzana,setManzana] = useState(false);
  const [platano,setPlatano] = useState(false);
  const [pera,setPera] = useState(false);
  const cont=0
  return (
    <footer>


      <div className="container">
        
        {productos.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <p>Total: {total} €</p>
    </footer>
  );
};

export default Footer;