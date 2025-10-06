import { useState } from 'react'
import './App.css'
import Map from './Map.jsx'
import UI from './UI.jsx'

function App() {
  const position = [51.505, -0.09]
    
  const [ popups, setPopups] = useState([])
  
  return (
    <>
        <Map
        popups={popups}
        setPopeps={setPopups}
        />
        <UI
        popups={popups}
        setPopups={setPopups}
        />
    </>
  )
}

export default App
