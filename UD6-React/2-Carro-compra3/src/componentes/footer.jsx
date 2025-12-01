const Footer = ({total, productos}) => {
 
  function EliminarProducto(item){
    alert(`Se va a eliminar ${item}`)
  }
  return (
  <footer> 
    <div className="container">
      {productos.map((item, index) => (
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
