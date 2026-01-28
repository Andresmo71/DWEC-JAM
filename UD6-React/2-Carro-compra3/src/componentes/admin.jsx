import { useEffect, useState } from 'react';
import servicioProductos from '../servicios/servicioProductos';
import { Link } from 'react-router-dom';
import ProductoBorrar from './crud_productos/ProductoBorrar';
import ProductoConsultar from './crud_productos/ProductoConsultar';
import ProductoEditar from './crud_productos/ProductoEditar';
import '../estilos/Admin.css';
import Modal from './Modal';
import { PDFViewer } from '@react-pdf/renderer';

const Admin = ({}) => {

    // Lista de productos cargados desde el backend
    const [infoProducto , setInfoProducto]=useState([])
    
    // Producto actualmente seleccionado para consultar o editar
    // Inicializamos como null porque al cargar la página no hay ninguno seleccionado
    const [productoSeleccionado ,setProductoSeleccionado]=useState(null);
    const [modals, setModals] = useState({
      consultar: false,
      editar: false,
    });

    const gestionarModal = (tipo, estado) => {
    // Actualiza solo el modal que queremos, manteniendo los demás con su estado actual
    setModals({
      ...modals,
      [tipo]: estado,
    });
  };

    useEffect(() => {
        servicioProductos.getAll()
        .then((response) => {
            setInfoProducto(response.data);

            console.log(response.data)
        })
        .catch((error) => {
            
        alert('Error al cargar productos , lo sentimos...')
        });
    }, []);

    const consultarProducto = (producto) => {
    setProductoSeleccionado(producto);    // Guardamos producto seleccionado
    gestionarModal('consultar', true);    // Abrimos el modal de consulta
  };

  const editarProducto = (producto) => {
    setProductoSeleccionado(producto);
    gestionarModal('editar', true);
  };

  const borrarProducto = (producto) => {
    ProductoBorrar(producto, infoProducto, setInfoProducto);
  };



    


  return (
    
    
    <div className='admin-container'>
      <ul>
              { infoProducto.map((producto, index) => (
                <li key={index}>
                  {`${producto.nombre}`}

                <button onClick={() => consultarProducto(producto)}>Consultar</button>
                <button onClick={() => editarProducto(producto)}>Editar</button>
                <button onClick={() => borrarProducto(producto)}>Borrar</button>
                </li>
                
                
              ))}
              
     </ul>

              {/*Se abre si modals.consultar === true*/}
     <Modal isOpen={modals.consultar} onClose={() => gestionarModal('consultar', false)}>
        {productoSeleccionado && <ProductoConsultar producto={productoSeleccionado} />}
      </Modal>

      <Modal isOpen={modals.editar} onClose={() => gestionarModal('editar', false)}>
        {productoSeleccionado && (
          <ProductoEditar
            producto={productoSeleccionado}
            setProductos={setInfoProducto}
            onClose={() => gestionarModal('editar', false)}
          />
        )}
      </Modal>
      
    </div>
  
      
  );
};

export default Admin;