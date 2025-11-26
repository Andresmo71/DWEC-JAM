import { useState } from 'react'
import MenuSuperior from './componentes/menu'
import ListaImagenes from './componentes/cuerpo'
import Footer from './componentes/footer';

function App() {

  const [total, setTotal] = useState(0); // Estado para el importe total
  const [productos, setProductos] = useState([]); // Lista de productos del carrrito

  return (
    <div className="App">
      <header className="App-header">
        {/* Pasar el total al menú superior */}
        <MenuSuperior 
            total={total} 
            productos={productos}
                  />
      </header>
      <main>
        {/* Pasar total y setTotal a ListaImagenes */}
        <ListaImagenes total={total} setTotal={setTotal} productos={productos} setProductos={setProductos}/>
      </main>
      <Footer total={total}/>
    </div>
  );
}

export default App
