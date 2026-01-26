import '../estilos/footer.css';
const Footer = ({total,setTotal, productos, setProductos, footerProductos, setFooterProductos}) => {
 
  function EliminarProducto(nombreItem){
    let productoAEliminar=productos.find(p => p.nombre === nombreItem);
    //3.Resto lo correspondiente al total
    setTotal(total=>total- (productoAEliminar.precio * productoAEliminar.cantidad))

    // 1. Eliminar del footer
    setFooterProductos(footerProductos.filter(p => p !== nombreItem));
    // 2. Eliminar TODAS las unidades del carrito
    setProductos(productos.filter(p => p.nombre !== nombreItem));
   


    alert(`Se va a eliminar ${nombreItem}`)
    
  }
  return (
  <footer> 
    <div className="footer-container">
      {footerProductos.map((nombreItem, index) => (
        <div key={index}>
          
          {nombreItem}
          
          <button onClick={() => EliminarProducto(nombreItem)}>
            X
          </button>
        </div>
      ))}
    </div>
  </footer>
      
  );
};

export default Footer;