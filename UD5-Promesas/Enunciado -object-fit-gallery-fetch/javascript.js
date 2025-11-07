const imagenes= document.querySelector("imagen")
const principal=document.querySelector("principal")

imagenes.forEach((imagen,index) => {
    const url= `imagenes/pic${index+1}.jpg`;

    fetch (url)
        .then((response)=>{
            if(!response.ok){
                throw new Error(`Http error , estado= ${response.status}`)
            }
            return response.blob();
        })
        .then((contenido)=>cargarImagenes(imagen,contenido))
        .catch((error)=>{
            imagen.tittle=`Imagen no cargada: ${error.message}`
        });
});

function cargarImagenes(imagen,contenido){
    const objetoURL=URL.createObjectURL(contenido)
}