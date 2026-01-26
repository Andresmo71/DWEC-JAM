const ProductoConsultar = ({ producto }) => {
  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p><strong>Precio:</strong> {producto.precio} €</p>
      <p><strong>ID:</strong> {producto.id}</p>
      <img src={producto.url} width="150" />
    </div>
  );
};

export default ProductoConsultar;

