
let aleatorio=(max) => parseInt(Math.random()*max)
function generarColores(){
    return`rgb(${aleatorio(255)},${aleatorio(255)},${aleatorio(255)})`
}
 window.onload=function(){
    document.body.style.backgroundColor=generarColores()
 }