import React from 'react'
import './Buttons.css'
const Buttons = ({filterOpen, setFilterOpen}) => {
    function changeFilter() {
        setFilterOpen(!filterOpen)
        console.log(filterOpen)
    }
  return (
    <div className='buttons-end'>
        <button className='cancel' onClick={changeFilter}>Cancel</button>
        <button className='find'>Find</button>
    </div>
  )
}

export default Buttons