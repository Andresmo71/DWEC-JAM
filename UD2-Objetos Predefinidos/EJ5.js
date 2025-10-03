let contador=10
console.log(contador)
let intervalo=setInterval(function(){
    contador--
    console.log(contador)
    if(contador===0){
        console.log("Tiempo terminado")
        clearInterval(intervalo)
    }

},1000)

