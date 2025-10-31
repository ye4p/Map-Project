import React from 'react'
import './MissingButton.css'

const MissingButton = ({requestWindowShow, setRequestWindowShow}) => {
  return (
    <div className='place-missing'>
      <button>
      Can't find certain place?
      Request adding it here!
      </button>
    </div>
  )
}

export default MissingButton