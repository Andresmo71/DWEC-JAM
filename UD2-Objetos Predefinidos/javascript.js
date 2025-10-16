// Almacenar en todo momento los elementos de la lista y su precio
const elementos = [
    ["platanos" , 1.99]
]
// Almacenar en todo momentos las estadísticas de la lista
const estadisticas = new Map()
estadisticas.set("total-unidades" , 0)
estadisticas.set("total-precio" , 0)

const estadisticasSinRepetir=new Set()


document.getElementById("add-btn").addEventListener("click", anadirElemento)
let listaProductos = document.getElementById("product-list")
let input =  document.getElementById("product-input")




function anadirElemento(){   

    //añadir elemento a la matriz , añadir elemento a ña pagina , ycalcular totales
    
    //Coger el input del elemento y splitear sus valores(producto y precio)
    let elementoArray = input.value.split(",")
    
     if (elementoArray.length==2){
            //añadir elemento a ña pagina
            listaProductos.innerHTML += `<li><span>${elementoArray[0]}</span> <span>${elementoArray[1]} €</span> <button class="delete-btn" onclick="eliminar(this)">Eliminar</button></li>`
            //añadir elemento a la matriz
            elementos.push([elementoArray[0] , parseFloat(elementoArray[1]) ])
            //añadir al set
            estadisticasSinRepetir.add(elementoArray[0])

    //calcular totales
    calcularTotalPrecio()
    calcularTotalUnidades()
    dibujarProductos()
    }else{
        alert("No funciona")
    }
    
    
    
    

}

function calcularTotalPrecio(){
    let total = 0
    elementos.forEach(elemento =>{
        total+=elemento[1]
    })
    estadisticas.set("total-precio",total)
    document.getElementById("total-price").innerHTML=total
}

function calcularTotalUnidades(){

    estadisticas.set("total-unidades",elementos.length)
    //Dibujar en HTML
      document.getElementById("total-units").innerHTML=elementos.length
}

function dibujarProductos(){
    document.getElementById("total-products").innerHTML=""
    estadisticasSinRepetir.forEach(prod =>{
        document.getElementById("total-products").innerHTML+=prod+" "
    })
    
}
function eliminar(producto){
    //borrar de la pagina
    producto.parentElement.remove()
    //borrar del array de elemntos
        //hacerlo con map
    elementos=elementos.map(e =>{
        cont=0
        if(e[0]==producto[0]){
            e.splice
        }
    })


    //borrar del set de productos
}

//Se calcula al cargar la pagina
calcularTotalPrecio()
calcularTotalUnidades()