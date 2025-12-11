import { useState } from 'react'
import MenuSuperior from './componentes/menu'
import ListaImagenes from './componentes/cuerpo'
import Footer from './componentes/footer';
import { Routes , Route  } from 'react-router-dom';
import pagina404 from './componentes/pagina404.jsx';
import Autor from './componentes/autor.jsx';
import Pagina404 from './componentes/pagina404.jsx';
import DetalleProducto from './componentes/DetalleProdcuto.jsx';
import Admin from './componentes/admin.jsx';

function App() {



  const [total, setTotal] = useState(0); // Estado para el importe total
  const [productos, setProductos] = useState([]); // Lista de productos del carrrito
  const [footerProductos, setFooterProductos] = useState([]);

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
        <Routes>
          <Route path='/' element={<ListaImagenes total={total} setTotal={setTotal} productos={productos} setProductos={setProductos} footerProductos={footerProductos} setFooterProductos={setFooterProductos}/>}>
          </Route>

          

          <Route path="/autor" element={ <Autor/> }>
          </Route> 
          <Route path="/producto/:id" element={ <DetalleProducto productos={productos} setProductos={setProductos} /> }>
          </Route> 
          <Route path="/admin" element={<Admin/> }> 
          </Route>
          <Route path="*" element={ <Pagina404/> }>
          </Route> 
           

        </Routes>
        {/* Pasar total y setTotal a ListaImagenes */}
        
      </main>
      <Footer total={total} setTotal={setTotal} productos={productos} setProductos={setProductos} footerProductos={footerProductos} setFooterProductos={setFooterProductos} />
    </div>
    
    
  );
}

export default App