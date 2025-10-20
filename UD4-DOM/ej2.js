let cuerpoPagina = document.body;
cuerpoPagina.addEventListener("mousemove",mostrar)

function mostrar(event){
    let x=event.clientX;
    let y=event.clientY;
    document.getElementById("x").innerHTML="Posicion X: "+x
    document.getElementById("y").innerHTML="Posicion Y: "+y
}