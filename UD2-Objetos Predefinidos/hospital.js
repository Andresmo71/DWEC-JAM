const pacientes = [
  { nombre: "Juan",    apellidos: "Pérez Gómez",        edad: 45, dni: "12345678A", peso: 78 },
  { nombre: "María",   apellidos: "López Fernández",    edad: 32, dni: "87654321B", peso: 62 },
  { nombre: "Carlos",  apellidos: "Ruiz Martínez",      edad: 50, dni: "11223344C", peso: 85 },
  { nombre: "Laura",   apellidos: "García Torres",      edad: 28, dni: "44332211D", peso: 58 },
  { nombre: "Pedro",   apellidos: "Sánchez Herrera",    edad: 60, dni: "55667788E", peso: 90 },
  { nombre: "Lucía",   apellidos: "Morales Jiménez",    edad: 41, dni: "99887766F", peso: 70 },
  { nombre: "Andrés",  apellidos: "Ramírez Castro",     edad: 37, dni: "66778899G", peso: 76 },
  { nombre: "Elena",   apellidos: "Ortega Díaz",        edad: 29, dni: "33445566H", peso: 64 },
  { nombre: "Javier",  apellidos: "Domínguez Vega",     edad: 55, dni: "22113344I", peso: 82 },
  { nombre: "Sofía",   apellidos: "Núñez Morales",      edad: 34, dni: "77889900J", peso: 68 }
];
function mostrar(){
    alert("Hola soy mostrar")
    totalPacientes.innerHTML +=pacientes.length

    let edadProm=0

    pacientes.forEach(e =>{edadProm+=parseInt(e.edad)}) 
    edadPromedio.innerHTML+=edadProm/pacientes.length

    let minEdad=999
    pacientes.forEach(e=>{
        minEdad=(e.edad<minEdad)? e.edad: minEdad
    })

    edadMinima.innerHTML+=minEdad

    let maxEdad=0
    pacientes.forEach(e=>{
        maxEdad=(e.edad>maxEdad)? e.edad:maxEdad
    })
    edadMaxima.innerHTML+=maxEdad

    let pesoProm=0

    pacientes.forEach(e =>{pesoProm+=parseInt(e.peso)}) 
    pesoProm.innerHTML+=pesoProm/pacientes.length

    pesoPromedio.innerHTML+=pesoProm



}
function estadisticas(){
    alert("Hola soy estadisticas")
}

function ordenado(){
    alert("Hola soy ordenado")
}