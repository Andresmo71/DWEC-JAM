
import { useState } from 'react'
import './App.css'
import Futbolistas from './componentes/Futbolistas'


function App() {
  const [count, setCount] = useState(0)
 


//Codigo javaScript
  return (
    <>
      <div>
       <Futbolistas/>

      </div>
      
    </>
  )
}

export default App
