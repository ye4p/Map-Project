import React from 'react'
import Search from './Components/Search'
const UI = ( { popups, setPopups } ) => {
  return (
    <div className='UI'>
        <Search
        popups={popups}
        setPopups={setPopups}
        />
    </div>
  )
}

export default UI