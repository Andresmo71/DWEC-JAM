import '../estilos/cuerpo.css';



// Componente ListaImagenes
const ListaImagenes = ({ total, setTotal , productos, setProductos }) => {

  const imageUrls = [ 
  { url: "./imagenes/manzana.jpg", nombre: "Manzana", precio: 5 }, 
  { url: "./imagenes/pera.jpg", nombre: "Pera", precio: 7 }, 
  { url: "./imagenes/platano.jpg", nombre: "Platano", precio: 4 } 
];
  
  const AnadirProducto = (nombre, precio) => {
     


    setTotal(total + precio); // Actualiza el total
     
    setProductos([...productos, nombre]);
        

   
  };

  return (
    <div className="container">
      {imageUrls.map((item, index) => (
        <div key={index}>
          <img src={item.url} alt="imagen" />
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
