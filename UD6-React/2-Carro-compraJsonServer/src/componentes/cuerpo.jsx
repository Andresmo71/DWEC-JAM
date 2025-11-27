import { useEffect,useState } from 'react';
import '../estilos/cuerpo.css';
import servicioProductos from '../servicios/servicioProductos';

const ListaImagenes = ({ total, setTotal , productos, setProductos }) => {
/*
  const imageUrls = [ 
    { url: "./imagenes/manzana.jpg", nombre: "Manzana", precio: 5 }, 
    { url: "./imagenes/pera.jpg", nombre: "Pera", precio: 7 }, 
    { url: "./imagenes/platano.jpg", nombre: "Platano", precio: 4 } 
  ];
  */

  //Variables de estado
 const[imageUrls , setImagesUrls]=useState([])

//Cada renderizacion del componente hace una peticion AXIOS 
// para mostrar productos actualizados
  useEffect(() => {
    servicioProductos.getAll()
      .then((response) => {
        setImagesUrls(response.data);
      })
      .catch((error) => {
        
        Swal.fire({
          title: "¿Tienes Internet?",
          text: "No consigo descargar las aficiones :(",
          icon: "question"
        });
      });
  }, []);

//Añadir productos
  const AnadirProducto = (nombre, precio) => {
    setTotal(total + precio);
    setProductos([...productos, nombre]);
  };

  return (
    <div className="container">
      {imageUrls.map((item, index) => (
        <div key={index}>
          <img src={item.url} alt={item.nombre} />
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