let dia=parseInt(prompt("Dime el dia"))
let mes=parseInt(prompt("Dime el mes"))
if(isNaN(dia) || dia>31 || dia<1){
    dia="VALOR NO VALIDO"
}
if(isNaN(mes) || mes>12 || mes<1){
    mes="VALOR NO VALIDO"
}
console.log(`Dia: ${dia}`)
console.log(`Mes: ${mes}`)
if( dia===14 && mes===2){
    console.log("Corresponde con el dia de San Valentin")
}
else{
    console.log("NO corresponde con el dia de San Valentin")
}
