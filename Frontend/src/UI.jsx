import React from 'react'
import Search from './Components/Search'
import ReviewWindow from './Components/ReviewWindow'
import {useState, useEffect} from 'react'

const UI = ( { popups, setPopups, reviewWindowShow, setReviewWindowShow, placeId, setPlaceId } ) => {

  

  return (
    <div className='UI'>
        <Search
        popups={popups}
        setPopups={setPopups}
        />
        <ReviewWindow
        // style={{
        //   opacity: reviewWindowShow ? 1 : 0,
        //   pointerEvents: reviewWindowShow ? 'auto' : 'none'
        // }}
        reviewWindowShow={reviewWindowShow}
        setReviewWindowShow={setReviewWindowShow}
        placeId={placeId}
        setPlaceId={setPlaceId}
        />
    </div>
  )
}

export default UI