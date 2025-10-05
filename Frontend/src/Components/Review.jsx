import React from 'react'
import './Review.css'
import {useEffect} from 'react'

const Review = ( { zeroReviewsInclude, setZeroReviewsInclude } ) => {
  function handleSetZeroReviewsInclude() {
      setZeroReviewsInclude(!zeroReviewsInclude)
  }
  useEffect(() => {
    console.log(zeroReviewsInclude)
  }, [zeroReviewsInclude])
  
  return (
    <div className='review-box'>
        <div className="review-title">
            <span>
            Include places with 0 reviews? 
            </span>
        </div>
        <div className="review">
            <input type="checkbox" name="review_minimum"
              checked={!zeroReviewsInclude}
              onChange={handleSetZeroReviewsInclude}
            />
        </div>
    </div>
  )
}

export default Review