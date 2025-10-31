import React from 'react'
import './RequestWindow.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

const RequestWindow = ({requestWindowShow, setRequestWindowShow}) => {
  const [reqName, setReqName] = useState('')
  const [reqAddress, setReqAddress] = useState('')
  const [reqData, setReqData] = useState('')

  function handleSubmitRequest() {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/places/place`, 
         {
          name: reqName,
          address: reqAddress,
          reqData: reqData,
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
            <p>Here you can submit a ticket if you can't find certain place here!</p>
          </div>
          <div className="req-pairs-box">
            <div className="req-label-text-pair">
            <p>What is the Name of the place that is missing?</p>
            <textarea name="req-name" id="req-name"
              onChange={(e) => {setReqName(e.target.value)}}
              placeholder='Ex: McDonalds'
            ></textarea>
          </div>
          <div className="req-label-text-pair">
            <p>What is the Address?</p>
            <textarea name="req-name" id="req-name"
              onChange={(e) => {setReqAddress(e.target.value)}}
              placeholder='Ex: 1122 34th Tampa Street'
            ></textarea>
          </div>
          <div className="req-label-text-pair">
            <p>Additonal info: </p>
            <textarea name="req-name" id="req-name"
              onChange={(e) => {setReqData(e.target.value)}}
              placeholder='Some extra info you might add, for example: if you know there are speakers of russian or ukrainian language.'
            ></textarea>
          </div>
          </div>
          <div className="req-end">
            <button
              onClick={handleSubmitRequest}
            >Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestWindow