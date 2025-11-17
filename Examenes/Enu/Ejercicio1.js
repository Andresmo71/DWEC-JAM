
let boton=document.getElementById("startBtn")
boton.addEventListener("click",mostrar)
function mostrar(){
   
    let tiempo=prompt("Dime tiempo")
    let segundosAleatorio=parseInt(Math.random()*4) 
    parseInt(tiempo)
    console.log(`Cuenta regresiva comenzando desde: ${tiempo}`)
    setInterval(()=>{
        console.log(tiempo)
        tiempo=tiempo-1
    },1000)
    
    console.log(`Esperando ${segundosAleatorio} segundos...`)
    setTimeout(()=>{
        console.log(Date())
    },tiempo)
    
}