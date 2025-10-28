import React from 'react'
import './RequestWindow.css'

const RequestWindow = () => {
  return (
    <div className="request-window">
      <div className="request-background"></div>
      <div className="request-window-modal">
        <div className="request-modal">
          <div className="req-label-text-pair">
            <p>What is the Name of the place that is missing?</p>
            <textarea name="req-name" id="req-name"></textarea>
          </div>
          <div className="req-label-text-pair">
            <p>What is the Address?</p>
            <textarea name="req-name" id="req-name"></textarea>
          </div>
          <div className="req-label-text-pair">
            <p>Additonal info: </p>
            <textarea name="req-name" id="req-name"></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestWindow