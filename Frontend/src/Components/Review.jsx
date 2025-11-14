import React from 'react'
import './Review.css'
import {useEffect} from 'react'
import { useTranslation } from 'react-i18next'

const Review = ( { zeroReviewsInclude, setZeroReviewsInclude } ) => {
  const { t } = useTranslation()
  function handleSetZeroReviewsInclude() {
      setZeroReviewsInclude(!zeroReviewsInclude)
  }
  useEffect(() => {
   // console.log(zeroReviewsInclude)
  }, [zeroReviewsInclude])
  
  return (
    <div className='review-box'>
        <div className="review-title">
            <span>
            {t('include')} 
            </span>
        </div>
        <div className="review">
            <input type="checkbox" name="review_minimum"
              checked={zeroReviewsInclude}
              onChange={handleSetZeroReviewsInclude}
            />
        </div>
    </div>
  )
}

export default Review