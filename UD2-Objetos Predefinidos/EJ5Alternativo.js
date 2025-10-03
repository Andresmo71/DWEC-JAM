let contador=parseInt(prompt("Dime los segundos de tu contador"))
let despedida= () => {
    console.log("Hasta otro dia")
}

let intervalo=setInterval(function(){
    contador--
    console.log(contador)
    if(contador===0){
        clearInterval(intervalo)
        setTimeout(despedida,2000)
    }

},1000)