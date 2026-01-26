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
  const AnadirProducto = (item) => {
    setTotal(total + parseInt(item.precio)); 

    const existente = productos.find(p => p.id === item.id);
    if(!existente){
      setProductos([...productos, {id:item.id ,nombre:item.nombre , cantidad:item.cantidad+1 , precio:item.precio}]); 
    }else{
      setProductos(productosPrevios =>
        productosPrevios.map(producto =>{
          if(producto.id === item.id){
            return {...producto,cantidad:producto.cantidad+1};
          }
            return producto;
          
        })
      )
    }
    
    
      // 2. Añadir SOLO UNA VEZ al footer
  if (!footerProductos.includes(item.nombre)) {
    setFooterProductos([...footerProductos, item.nombre]);
  }
  };

  return (
    <div className="container">
      {imageUrls.map((item, index) => (
        
        <div key={index}>
          <Link to={`/producto/${item.id}`} >
          <img src={item.url} alt="imagen" />
          </Link>
          <h3>{item.nombre}</h3>
          <p>Precio: {item.precio} Euros</p>
          <button onClick={() => AnadirProducto(item)}>
            Añadir al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListaImagenes;