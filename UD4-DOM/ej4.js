const form = document.getElementById('preferenciasForm');
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que se recargue la página

        });

let preguntaDeporte=document.getElementById("deporte")
let preguntaComida=document.getElementById("comida")
let preguntaCantante=document.getElementById("cantante")

let respuestaDeporte=document.getElementById("deporteText")
let respuestaComida=document.getElementById("comidaText")
let respuestaCantante=document.getElementById("cantanteText")

function comprobarDeporte(){
    if (preguntaDeporte.value === ""){
        
    }else{
        
    }
}