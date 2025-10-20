let boton = document.getElementById("idBoton");
let cuerpoPagina = document.body;

let aleatorio=(max) => parseInt(Math.random()*max)

function cambiar(){
    cuerpoPagina.style.backgroundColor=`rgb(${aleatorio(255)}, ${aleatorio(255)},${aleatorio(255)})`
}

function resetearColor(){
    cuerpoPagina.setAttribute("style",'background-color:white')
}

cuerpoPagina.addEventListener("click",accion)
function accion(evento){
    if(evento.target.id==="idcuerpo"){
        resetearColor()
    }
    else{
        cambiar()
    }

}