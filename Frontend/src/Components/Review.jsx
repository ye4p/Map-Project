import React from 'react'
import './Review.css'
const Review = () => {
  return (
    <div className='review-box'>
        <div className="review-title">
            <span>
            Include places with 0 reviews? 
            </span>
        </div>
        <div className="review">
            <input type="checkbox" name="review_minimum" />
        </div>
    </div>
  )
}

export default Review