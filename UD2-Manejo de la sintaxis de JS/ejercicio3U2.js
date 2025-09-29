const elemento=document.getElementById("idNombre")

let estado=true

function intermitente(){
    if(estado===true){
        elemento.style.display='none'
        estado=false
    }
    else{
        elemento.style.display='block'
        estado=true
    }

}

let identificador= setInterval(() => 
    intermitente()
, 1000);

function parar(){
    clearInterval(identificador)
    elemento.style.display='none'
}
setTimeout(parar,5000)