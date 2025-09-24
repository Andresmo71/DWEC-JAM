let calificaciones = prompt("Dime todas las notas separadas por un ;")
let listaCalificaciones = new Array()
listaCalificaciones = calificaciones.split(";")
for (let i = 0; i < listaCalificaciones.length; i++) {
    if (parseInt(listaCalificaciones[i]) >= 0 && parseInt(listaCalificaciones[i]) < 3) {
        listaCalificaciones[i] = "Muy deficiente"
    } 
    else if (parseInt(listaCalificaciones[i]) >= 3 && parseInt(listaCalificaciones[i]) < 5) {
        listaCalificaciones[i] = "Insuficiente"
    } 
    else if (parseInt(listaCalificaciones[i]) >= 5 && parseInt(listaCalificaciones[i]) < 6) {
        listaCalificaciones[i] = "Suficiente"
    } 
    else if (parseInt(listaCalificaciones[i]) >= 6 && parseInt(listaCalificaciones[i]) < 9) {
        listaCalificaciones[i] = "Notable"
    } 
    else if (parseInt(listaCalificaciones[i]) >= 9 && parseInt(listaCalificaciones[i]) <= 10) {
        listaCalificaciones[i] = "Sobresaliente"
    } 
    console.log(`${i+1}º ${listaCalificaciones[i]}`)
}