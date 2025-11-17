let contadorClicks=document.getElementById("clickCount")
let contadorTeclas=document.getElementById("keyCount")

let botonReset=document.getElementById("resetBtn")
let botonClick=document.getElementById("clickArea")
let botonTecla=document.getElementById("keyArea")
let cont=0
let cont2=0


botonClick.addEventListener("click",()=>{
    
    cont=cont+1
    contadorClicks.innerHTML=`${cont}`

})

botonTecla.addEventListener("keydown",(e)=>{
    if ()
    cont2=cont2+1
    contadorTeclas.innerHTML=`${cont2}`
})
function resetear(){
    contadorClicks.innerHTML=0
    contadorTeclas.innerHTML=0
}

botonReset.addEventListener("click",resetear)
