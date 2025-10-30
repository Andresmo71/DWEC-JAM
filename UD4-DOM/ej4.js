const campos=["deporte","comida","cantante"]
let boton=document.getElementById("boton")
boton.addEventListener("click",()=>{
    
    campos.forEach(campo=>{
        let input=document.getElementById(campo)
        crearElemento(campo,input.value);
    })
    
})

function crearElemento(area,contenido){
    if(contenido!==""){
        let elemento=document.createElement("p")
        elemento.innerHTML=contenido
        elemento.classList.add("azul")

        let padre=document.getElementById(`${area}Respuesta`)
        padre.appendChild(elemento)
        padre.previousElementSibling.classList.add("verde")

    }
}

function resetear(){
    let parrafos=document.querySelectorAll("p")
    parrafos.forEach(parrafo=>{
        parrafo.classList.add("negro")
    })
}


























/*
let respuestaDeporte=document.getElementById("deporteRespuesta")
let respuestaComida=document.getElementById("comidaRespuesta")
let respuestaCantante=document.getElementById("cantanteRespuesta")


function comprobarDeporte(){
    if (preguntaDeporte.value === ""){
        respuestaDeporte.parentElement.style.color='black'
    }else{
        let elemento=document.createElement("p")
        elemento.innerHTML=preguntaDeporte.value
        respuestaDeporte.appendChild(elemento)
        elemento.style.color='blue'
        elemento.previousElementSibling.style.color='black'
        elemento.parentElement.style.color='green'

    }
}
*/
