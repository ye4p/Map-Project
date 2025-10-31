import React from 'react'
import './MissingButton.css'
import {useEffect, useState} from 'react'

const MissingButton = ({requestWindowShow, setRequestWindowShow}) => {

  const [missingHover, setMissingHover] = useState(false)

  function handleOpenReqWindow() {
    setRequestWindowShow(true)
  }
  return (
    <div className='place-missing'>
      <button
        onClick={handleOpenReqWindow}
        onMouseEnter={() => setMissingHover(true)} 
        onMouseOut = {() => setMissingHover(false)}
      >
      ?
      </button>
      <div className="place-missing-hover"
        style={{
          opacity: missingHover ? 1 : 0,
          pointerEvents: missingHover ? 'auto' : 'none'
        }}
      >
        <p>Can't find certain place?</p>
        <p>Request adding it here!</p>
      </div>
    </div>
  )
}

export default MissingButton