import React from 'react'
import './Buttons.css'
const Buttons = ({filterOpen, setFilterOpen, closeFilterOnly, setCloseFilterOnly, closeFilterOnly_func}) => {
    function changeFilter() {
        setFilterOpen(!filterOpen)
        console.log(filterOpen)
    }
  return (
    <div className='buttons-end'>
        <button className='cancel' onClick={changeFilter}>Cancel</button>
        <button className='find'
        onClick={closeFilterOnly_func}
        >Find</button>
    </div>
  )
}

export default Buttons