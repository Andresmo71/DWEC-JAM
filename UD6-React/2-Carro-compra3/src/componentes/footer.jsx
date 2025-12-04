import '../estilos/footer.css';
const Footer = ({total, productos, setProductos, footerProductos, setFooterProductos}) => {
 
  function EliminarProducto(item){
    // 1. Eliminar del footer
    setFooterProductos(footerProductos.filter(p => p !== item));
    // 2. Eliminar TODAS las unidades del carrito
    setProductos(productos.filter(p => p !== item));

    alert(`Se va a eliminar ${item}`)
  }
  return (
  <footer> 
    <div className="footer-container">
      {footerProductos.map((item, index) => (
        <div key={index}>
          
          {item}
          
          <button onClick={() => EliminarProducto(item)}>
            X
          </button>
        </div>
      ))}
    </div>
  </footer>
      
  );
};

export default Footer;
