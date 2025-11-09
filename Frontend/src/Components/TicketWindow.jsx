import React from 'react'
import './TicketWindow.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

const TicketWindow = ( {placeId, setPlaceId, ticketWindowShow, setTicketWindowShow}) => {
    const [ticketText, setTicketText] = useState('')
    const { t } = useTranslation()
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
        handleCloseTicketWindow()
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
                        <p>{t('ticket')}</p>
                    </div>
                    <div className="ticket-close-btn">
                        <button
                        onClick={handleCloseTicketWindow}
                        >
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
        <textarea name="ticket" id="ticket-input" placeholder={`${t('ticketp')}`}
            onChange={(e) => {setTicketText(e.target.value)}}
          ></textarea>
        <div className="leave-ticket-button">
        <button
            onClick={handleCreateTicket}
            >{t('send')}</button>
        </div>
            </div>
        </div>
    </div>
  )
}

export default TicketWindow