const pacientes = [
  { nombre: "Juan",    apellidos: "Pérez Gómez",        edad: 45, dni: "12345678A", peso: 78 },
  { nombre: "María",   apellidos: "López Fernández",    edad: 32, dni: "87654321B", peso: 62 },
  { nombre: "Carlos",  apellidos: "Ruiz Martínez",      edad: 50, dni: "11223344C", peso: 85 },
  { nombre: "Laura",   apellidos: "García Torres",      edad: 28, dni: "44332211D", peso: 58 },
  { nombre: "Pedro",   apellidos: "Sánchez Herrera",    edad: 60, dni: "41332211D", peso: 90 },
  { nombre: "Lucía",   apellidos: "Morales Jiménez",    edad: 41, dni: "99887766F", peso: 70 },
  { nombre: "Andrés",  apellidos: "Ramírez Castro",     edad: 37, dni: "66778899G", peso: 76 },
  { nombre: "Elena",   apellidos: "Ortega Díaz",        edad: 29, dni: "33445566H", peso: 64 },
  { nombre: "Javier",  apellidos: "Domínguez Vega",     edad: 55, dni: "22113344I", peso: 82 },
  { nombre: "Sofía",   apellidos: "Núñez Morales",      edad: 34, dni: "77889900J", peso: 68 }
];
let dnis=new Set()
pacientes.forEach(e =>dnis.add(e.dni))

    if(dnis.size!==pacientes.length){
        alert("Error en la fuente de datos pacientes repetidos")
        btnPacientes.disabled='true'
        btnEstadisticas.disabled='true'
        btnOrdenado.disabled='true'
    }

function limpiar(){
    let auxi=totalPacientes.innerHTML.split(":")
    totalPacientes.innerHTML=auxi[0]
}

function mostrar(){
    alert("Hola soy mostrar")
    totalPacientes.innerHTML +=pacientes.length

    let informacion= new Map();
    informacion.set('edadProm',0)
    

    pacientes.forEach(e =>{informacion.set('edadProm',informacion.get('edadProm')+parseInt(e.edad))}) 
    edadPromedio.innerHTML+=informacion.get('edadProm')/pacientes.length
    console.log(informacion.get('edadProm'))


    let minEdad=999
    // Tambien vale meter toda la ecuacion ternaria del siguinte set que hago en una variable auxiliar(let aux=e.edad<informacion.get('minEdad'))? e.edad: informacion.get('minEdad'))
    informacion.set('minEdad',999)
    pacientes.forEach(e=>{
        informacion.set('minEdad',(e.edad<informacion.get('minEdad'))? e.edad: informacion.get('minEdad'))
    })

    edadMinima.innerHTML+=informacion.get('minEdad')

    let maxEdad=0
    informacion.set('maxEdad',0)
    pacientes.forEach(e=>{
        informacion.set('maxEdad',(e.edad>informacion.get('maxEdad'))? e.edad:informacion.get('maxEdad'))
    })
    edadMaxima.innerHTML+=informacion.get('maxEdad')

    let pesoProm=0
    informacion.set('pesoProm',0)
    pacientes.forEach(e =>{informacion.set('pesoProm',informacion.get('pesoProm')+parseInt(e.peso))}) 
    pesoPromedio.innerHTML+=informacion.get('pesoProm')/pacientes.length
    
    limpiar()

}
function estadisticas(){
    alert("Hola soy estadisticas")
}

function ordenado(){
    alert("Hola soy ordenado")
}


