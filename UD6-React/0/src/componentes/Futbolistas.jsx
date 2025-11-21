import "../estilos/Futbolistas.css";

function Futbolistas() {

  const jugadores = [
    { nombre: "Messi", posicion: "delantero" },
    { nombre: "Maradona", posicion: "defensa" },
    { nombre: "Cristiano", posicion: "medio" }
  ];

  return (
    <>
      <ul className="lista-jugadores">
        {
          jugadores.map((jugador, index) => {
            return (
              <li key={index} className="item-jugador">
                {jugador.nombre} - {jugador.posicion}
              </li>
            );
          })
        }
      </ul>
    </>
  );
}

export default Futbolistas;
