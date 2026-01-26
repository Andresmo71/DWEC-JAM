import { useState } from "react";
import servicioProductos from "../../servicios/servicioProductos";
import Swal from "sweetalert2";

// Componente para editar un producto
// Recibe el producto a editar, setProductos para actualizar el listado y onClose para cerrar modal


const ProductoEditar = ({ producto, setProductos, onClose }) => {

  const [form, setForm] = useState({
    nombre: producto.nombre,
    precio: producto.precio,
    url: producto.url,
  });

    // Maneja cambios en los inputs, actualiza el estado form
  const handleChange = e => {
    setForm({
      ...producto,// incluimos todos los valores originales
      ...form,       // sobrescribimos con los cambios actuales
      [e.target.name]: e.target.value, // actualizamos el campo modificado
    });
  };

  const submit = e => {
    e.preventDefault();

    servicioProductos.update(producto.id, form)
      .then(() => {
        Swal.fire("Producto actualizado", "", "success");
        
        // Trae nuevamente todos los productos para mantener la lista actualizada
        servicioProductos.getAll()
          .then(res => setProductos(res.data));

        onClose();
      })
      .catch(() => {
        Swal.fire("Error al editar", "", "error");
      });
  };

  return (
    <form onSubmit={submit}>
      <label>Nombre</label>
      <input name="nombre" value={form.nombre} onChange={handleChange} />

      <label>Precio</label>
      <input name="precio" type="number" value={form.precio} onChange={handleChange} />

      <label>URL Imagen</label>
      <input name="url" value={form.url} onChange={handleChange} />

      <button type="submit">Guardar cambios</button>
    </form>
  );
};

export default ProductoEditar;
