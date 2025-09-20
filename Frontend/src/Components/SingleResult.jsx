import React from 'react'
import './SingleResult.css'

const SingleResult = ({name}) => {
  return (
    <div className='single-result'>
        <div className="result-name">
            <p className='single-main-result'>{name}</p>
            <div className="single-rating">
                <span className="fa fa-star"></span>
                <span>4.3</span>
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