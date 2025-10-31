let origen=document.getElementById("origen")
let destino=document.getElementById("destino")
let fechaIda=document.getElementById("fechaIda")
let fechaVuelta=document.getElementById("fechaVuelta")
let soloIda=document.getElementById("soloIda")
let boton=document.getElementById("boton")

let resOrigen=document.getElementById("resOrigen")

if(solamenteIda()===true){
    fechaVuelta.disabled=true
}

function solamenteIda(){
    if (soloIda.checked=== true){
        return true
    }else{
        return false
    }
}



boton.addEventListener("click",mostrarInformacion)

function mostrarInformacion(event){
    resOrigen.innerHTML="Granada"
    event.preventDefault()
}


