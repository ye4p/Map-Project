import React from 'react'
import './RequestWindow.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
const RequestWindow = ({requestWindowShow, setRequestWindowShow}) => {
   const { t } = useTranslation()
  const [reqName, setReqName] = useState('')
  const [reqAddress, setReqAddress] = useState('')
  const [reqData, setReqData] = useState('')

  function handleSubmitRequest() {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/places/place`, 
         {
          name: reqName,
          address: reqAddress,
          data: reqData,
        }
      ).then(res => console.log(res))
        .catch(err => console.error(err))
    setRequestWindowShow(false)
  }
  function handleReqClose() {
    setRequestWindowShow(false)
  }

  return (
    <div className="request-window"
      style={{
          opacity: requestWindowShow ? 1 : 0,
          pointerEvents: requestWindowShow ? 'auto' : 'none',
          //display: requestWindowShow ? 'auto' : 'none'
        }}
    >
      <div className="request-background"></div>
      <div className="request-window-modal">
        <div className="request-modal">
          <div className="req-title">
            <button className="req-cross"
              onClick={handleReqClose}
            >
             <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <p>{t('ticketsubm')}</p>
          </div>
          <div className="req-pairs-box">
            <div className="req-label-text-pair">
            <p>{t('namemis')}</p>
            <textarea name="req-name" id="req-name"
              onChange={(e) => {setReqName(e.target.value)}}
              placeholder={`${t('nameplaceholder')}`}
            ></textarea>
          </div>
          <div className="req-label-text-pair">
            <p>{t('addressmis')}</p>
            <textarea name="req-name" id="req-name"
              onChange={(e) => {setReqAddress(e.target.value)}}
              placeholder={`${t('addressplaceholder')}`}
            ></textarea>
          </div>
          <div className="req-label-text-pair">
            <p>{t('infomis')}</p>
            <textarea name="req-name" id="req-name"
              onChange={(e) => {setReqData(e.target.value)}}
              placeholder={`${t('infoplaceholder')}`}
            ></textarea>
          </div>
          </div>
          <div className="req-end">
            <button
              onClick={handleSubmitRequest}
            >{t('bsubmit')}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestWindow