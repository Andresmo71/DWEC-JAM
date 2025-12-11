import { useEffect, useState } from 'react';

import servicioProductos from '../servicios/servicioProductos';
import { Link } from 'react-router-dom';

const Admin = ({}) => {

    const [infoProducto , setInfoProducto]=useState([])


    useEffect(() => {
        servicioProductos.getAll()
        .then((response) => {
            setInfoProducto(response.data);

            console.log(response.data)
        })
        .catch((error) => {
            
        alert("Tienes internet, está levantado el JSON-server")
        });
    }, []);

    const BorrarProducto=(producto)=>{
        ProductoBorrar(producto,infoProducto,setInfoProducto)
    }

    


  return (

    <div className="container">
      <ul>
              { infoProducto.map((producto, index) => (
                <li key={index}>{`${producto.nombre}`}
                <button onClick={() => BorrarProducto(producto)}>
                Borrar
                </button>
                <button onClick={() => ConsultarProducto(producto)}>
                Consultar
                </button>
                <button onClick={() => EditarProducto(producto)}>
                Editar
                </button>
                </li>
                
                
              ))}
              
     </ul>
      
    </div>
  
      
  );
};

export default Admin;