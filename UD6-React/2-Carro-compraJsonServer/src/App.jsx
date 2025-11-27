import { useState } from 'react'
import MenuSuperior from './componentes/menu'
import ListaImagenes from './componentes/cuerpo'
import Footer from './componentes/footer'

function App() {

  const [total, setTotal] = useState(0);
  const [productos, setProductos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <MenuSuperior total={total} productos={productos} />
      </header>

      <main>
        <ListaImagenes 
          total={total} 
          setTotal={setTotal} 
          productos={productos} 
          setProductos={setProductos}
        />
      </main>

      <Footer total={total} setTotal={setTotal}  productos={productos} setProductos={setProductos}/>
      //creo que aqui tengo que pasar los set tambien CREO
    </div>
  );
}

export default App;
