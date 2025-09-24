/*let nombre=prompt("Dime tu nombre")
let apellido=prompt("Dime tu apellido")
let n1=parseInt(prompt("DIme el primer numero"))
let n2=parseInt(prompt("DIme el segundo numero"))
let n3=parseInt(prompt("DIme el tercero numero"))
console.log(`${nombre} ${apellido}`)
console.log(n1+n2+n3)
console.log(n1*n2*n3)
console.log(n1/n3)

let numeros=new Array();
numeros[0]=parseInt(prompt("Dime el primer numero"))
numeros[1]=parseInt(prompt("DIme el segundo numero"))
numeros[2]=parseInt(prompt("DIme el tercero numero"))
let cont=0;
for(let i=0; i<numeros.length;i++){
    if(isNaN(numeros[i])){
        numeros[i]="Valor no valido";
    }
    if(numeros[i]>10){
        cont++;
    }
    console.log(numeros[i])
}
console.log(`Hay ${cont} numeros mayor que 10`)


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


for (let index = 1; index <4; index++) {
    let sueldoNuevo=0
    let sueldoAntiguo=parseInt(prompt("Dime el sueldo de este trabajador"))
    let antigÜedad=parseInt(prompt("Dime los años de de este trabajador en la empresa"))
    if (sueldoAntiguo<500 && antigÜedad>=10) {
        sueldoNuevo=sueldoAntiguo*3
    }
    if (sueldoAntiguo<500 && antigÜedad<10) {
        sueldoNuevo=sueldoAntiguo*2
    }
    if (sueldoAntiguo>=500 ) {
        sueldoNuevo=sueldoAntiguo
    }
    console.log(`El sueldo anterior del trabajador numero ${index} es ${sueldoAntiguo} , su antigued es de ${antigÜedad} , por lo tanto ahora su sueldo es ${sueldoNuevo}`)
}


*/

