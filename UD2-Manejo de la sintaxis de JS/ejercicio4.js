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
