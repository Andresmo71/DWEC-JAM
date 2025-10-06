const inventario = [
    "Laptop", "Mouse", "Teclado", "Monitor", "Tablet", "Mouse", "Auriculares"];
    if (inventario.isArray) {
        let informacion = document.createElement("p")
        informacion.innerHTML=`Este inventario :${informacion.join(",")} .Si es un Array`

        document.body.appendChild(informacion)
    }else{
        let informacion2= document.createElement("p")
        informacion2.innerHTML="El inventario no es un array"

        document.body.appendChild(informacion2)
    }

    if (inventario.includes("Tablet")) {
        let incluido=document.createElement("p")
        incluido.innerHTML=`La palabra ${inventario.indexOf("Tablet")} si esta en el inventario`

        document.body.appendChild(incluido)
    }else{
        let noIncluido=document.createElement("p")
        noIncluido.innerHTML=`La palabra ${inventario.indexOf("Tablet")} no esta en el inventario`

        document.body.appendChild(noIncluido)
    }