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