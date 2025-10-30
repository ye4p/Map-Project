import React from 'react'
import './TicketWindow.css'
import {useEffect, useState} from 'react'
import axios from 'axios'


const TicketWindow = ( {placeId, setPlaceId, ticketWindowShow, setTicketWindowShow}) => {
    const [ticketText, setTicketText] = useState('')

    function handleCloseTicketWindow() {
        setTicketWindowShow(false)
    }

    function handleCreateTicket() {
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/places`, {
            id: placeId,
            description: ticketText
        })
        .then()
        .catch( err => console.log(err))
    }
    // useEffect(()=> {
    //     console.log(ticketWindowShow)
    // }, [ticketWindowShow])

  return (
    <div className='ticket-window'
        style={{
          opacity: ticketWindowShow ? 1 : 0,
          pointerEvents: ticketWindowShow ? 'auto' : 'none'
        }}
    
    >
        <div className="ticket-background">

        </div>
        <div className="ticket-window-modal">
            <div className="ticket-modal">
                <div className="ticket-start">
                    <div className="ticket-start-text">
                        <p>You can submit your ticket about this place here!</p>
                    </div>
                    <div className="ticket-close-btn">
                        <button
                        onClick={handleCloseTicketWindow}
                        >
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
        <textarea name="ticket" id="ticket-input" placeholder='If you have some information that is missing or not displayed correctly, you can mention it here...'
            onChange={(e) => {setTicketText(e.target.value)}}
          ></textarea>
        <div className="leave-ticket-button">
        <button
            onClick={handleCreateTicket}
            >Send</button>
        </div>
            </div>
        </div>
    </div>
  )
}

export default TicketWindow