let selector=document.getElementById("productSelect")
let lista=document.getElementById("productoList")

let totalProductos=document.getElementById("totalProductos")
let importeTotal=document.getElementById("importeTotal")

let cont=0

let informacion=new Map()
informacion.set('importe',0)
informacion.set('productos',0)



fetch("productos.json")
    .then(function(response){
        return response.json()
    })
    .then(data=>{
        const productos2=data.productos
        console.log("productos")
        productos2.forEach(producto => {
            
            let nevoProducto=document.createElement("option")
            nevoProducto.value=producto.id
            nevoProducto.innerHTML=`${producto.nombre} - ${producto.precio}$`
            
            nevoProducto.addEventListener("click",()=>{
                cont=cont+1

                let productoEnLista=document.createElement("li")
                productoEnLista.innerHTML=`<div class="product-info">
                    <span class="product-name">${producto.nombre}</span>
                    <span class="product-price">${producto.precio}</span>
                </div>`

                lista.appendChild(productoEnLista)

                informacion.set('importe',informacion.get('importe')+parseInt(producto.precio[nevoProducto.value]))
                informacion.set('productos',cont)

                sumar(productoEnLista)
                productoEnLista.addEventListener("dblclick",eliminar(productoEnLista))
                
            })
            
            selector.appendChild(nevoProducto)
            
            
            

        });
    })
    .catch(()=>{
        console.error("No se han conseguido los datos"); 
        Error.message("Error") 
    })


function eliminar(elemento){
    this.remove()
    cont=cont-1
    totalProductos.innerHTML=cont
}

function sumar(elemento){
    totalProductos.innerHTML=cont
    importeTotal.innerHTML=informacion.get('importe')
    
}


function ponerRojo(elemento){
    elemento.lastChild.classList.add('nuevo-producto-rojo')
}
