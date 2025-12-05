import { useEffect, useState } from 'react';
import servicioProductos from '../servicios/servicioProductos';
import {useParams} from 'react-router-dom'


const DetalleProducto = ({productos, setProductos}) =>{

    const idProducto=useParams().id
    const [infoProducto , setInfoProducto]=useState({id:'',url:'',nombre:'',precio:''})


    useEffect(() => {
        servicioProductos.getId(idProducto)
        .then((response) => {
            setInfoProducto(response.data);

            console.log(response.data)
        })
        .catch((error) => {
            
        alert("Tienes internet, está levantado el JSON-server")
        });
    }, []);

    return(
        <div>
            <p>El id del producto es {idProducto}</p>
            <p>{infoProducto.nombre} - {infoProducto.precio}</p>
            <p>{infoProducto.url}</p>
        </div>

    );


};

export default DetalleProducto ;