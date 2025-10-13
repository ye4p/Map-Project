import { useState, useEffect } from 'react'
import './App.css'
import Map from './Map.jsx'
import UI from './UI.jsx'

function App() {
  const position = [51.505, -0.09]
    
  const [ popups, setPopups] = useState([])
  const [ reviewWindowShow, setReviewWindowShow] = useState(false)
  const [ ticketWindowShow, setTicketWindowShow] = useState(true)
  const [ placeId, setPlaceId] = useState('')  

  useEffect(() => {
    console.log(reviewWindowShow)
  }, [reviewWindowShow])
  
  return (
    <>
        <Map
        popups={popups}
        setPopups={setPopups}
        reviewWindowShow={reviewWindowShow}
        setReviewWindowShow={setReviewWindowShow}
        placeId={placeId}
        setPlaceId={setPlaceId}
        ticketWindowShow={ticketWindowShow}
        setTicketWindowShow={setTicketWindowShow}
        />
        <UI
        popups={popups}
        setPopups={setPopups}
        reviewWindowShow={reviewWindowShow}
        setReviewWindowShow={setReviewWindowShow}
        placeId={placeId}
        setPlaceId={setPlaceId}
        ticketWindowShow={ticketWindowShow}
        setTicketWindowShow={setTicketWindowShow}
        />
    </>
  )
}

export default App
