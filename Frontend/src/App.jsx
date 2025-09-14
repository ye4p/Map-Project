import { useState } from 'react'
import './App.css'
import Map from './Map.jsx'
import UI from './UI.jsx'

function App() {
  const [count, setCount] = useState(0)
  const position = [51.505, -0.09]
      
  
  return (
    <>
        <Map/>
        <UI/>
    </>
  )
}

export default App
