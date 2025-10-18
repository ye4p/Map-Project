import React from 'react'
import './SingleResult.css'
import {useEffect, useState} from 'react'



const SingleResult = ({popup}) => { //Now takes real data
    const [ lang, setLang] = useState('none')

  return (
    <div className='single-result'>
        <div className="result-name">
            <p className='single-main-result'>{popup.name}</p>
            <div className="single-rating">
                <span className="fa fa-star"></span>
                <span>popup.rating</span>
            </div>
            <div className="single-language">
                <p>Languages: <span>Ru, Ukr</span></p>
                
            </div>
        </div>
        <div className="single-main">
            <p className="single-description">
                dsajfsadlkfasjdlkfjaslkdfjaksdlfjasdlkfj
            </p>
        </div>
    </div>
  )
}

export default SingleResult