let triangulo = (lineas) => {
    for (let i = 0; i < lineas; i++) {
        let linea=""
        for (let j = 0; j <= i; j++) {
            linea+="*"
            
        }
        console.log(linea)
    }
}
triangulo(5)