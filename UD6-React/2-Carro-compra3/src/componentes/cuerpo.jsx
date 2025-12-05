import { useEffect, useState } from 'react';
import '../estilos/cuerpo.css';
import servicioProductos from '../servicios/servicioProductos';
import { Link } from 'react-router-dom';

// Componente ListaImagenes
const ListaImagenes = ({ total, setTotal , productos, setProductos, footerProductos, setFooterProductos}) => {

// Variables de Estado  
const [imageUrls, setImageUrls] = useState([])

// Cada vez que renderizo el componente, hace esta petición AXIOS
// Para mostrar los productos actualizados
useEffect(() => {
    servicioProductos.getAll()
      .then((response) => {
        setImageUrls(response.data);

        console.log(response.data)
      })
      .catch((error) => {
        
       alert("Tienes internet, está levantado el JSON-server")
      });
  }, []);
  

  // Función para añadir productos al carrito
  const AnadirProducto = (nombre, precio) => {
    setTotal(total + precio); 

    setProductos([...productos, nombre]); 
    
      // 2. Añadir SOLO UNA VEZ al footer
  if (!footerProductos.includes(nombre)) {
    setFooterProductos([...footerProductos, nombre]);
  }
  };

  return (
    <div className="container">
      {imageUrls.map((item, index) => (
        
        <div key={index}>
          <Link to={`/>producto/${item.id}`} >
          <img src={item.url} alt="imagen" />
          </Link>
          <h3>{item.nombre}</h3>
          <p>Precio: {item.precio} Euros</p>
          <button onClick={() => AnadirProducto(item.nombre, item.precio)}>
            Añadir al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListaImagenes;
