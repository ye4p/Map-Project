import React from 'react'
import Search from './Components/Search'
import ReviewWindow from './Components/ReviewWindow'
const UI = ( { popups, setPopups } ) => {
  return (
    <div className='UI'>
        <Search
        popups={popups}
        setPopups={setPopups}
        />
        <ReviewWindow/>
    </div>
  )
}

export default UI