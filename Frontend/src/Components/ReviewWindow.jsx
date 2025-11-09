import React from 'react'
import './ReviewWindow.css'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

const ReviewWindow = ({reviewWindowShow, setReviewWindowShow, placeId, setPlaceId}) => {
 const { t } = useTranslation()
  const [ ratingSend, setRatingSend] = useState(null)
  const [ reviewText, setReviewText] =useState('')

  function getId(e) {         //Get the id # from the start element
        let ID = e.split('rstar')[1]
        return ID
    }
    function isCheckedLoop(classes) { // Same one pretty much but returns true/false instead of int/false
        for(var i = 0; i<classes.length; i++) {
            if (classes[i] == 'checked') {
                return true
            }
        }
        return false
    }
    function loopThroughStars() {       //Returns array with numbers of the stars that are checked
        let checkedArr = []
        for(var i = 1; i<6; i++) {
            if (isCheckedLoop(document.getElementById(`rstar${i}`).classList)) {
                checkedArr.push(i)
            }
        }
        return checkedArr 
    }
    function emptyStars() {
        for(var i = 1; i<6; i++) {
            document.getElementById(`rstar${i}`).classList.remove('checked')
        }
    }
    function checkStars(max) {
        //console.log(max)
        for(var i = 1; i<max; i++) {
            document.getElementById(`rstar${i}`).classList.add('checked')
        }
    }
    function handleClick(e) {       //Combines everything
        //let clickedStar = isChecked(e)
        let clickedStar = getId(e.currentTarget.id)
        let arrStars = loopThroughStars()
        // console.log('clickedStar: ', clickedStar)
        //console.log('arrStars: ', arrStars)
        let lastStar;
        if (arrStars.length > 0) {
            lastStar = arrStars[arrStars.length]
        } else {
            lastStar = false
        }
        emptyStars()
        checkStars(Number(clickedStar)+1)
        setRatingSend(Number(clickedStar))
        return
    }

    function test() {               // test function
    console.log(document.getElementById(`star1`).classList)
    }
    // useEffect(() => {
    //   console.log('ratingSend value: ', ratingSend)
    // }, [ratingSend])
    // useEffect(() => {
    //   console.log('reviewText value: ', reviewText)
    // }, [reviewText])

    function handleCreateReview() {
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/places/query?id=${placeId}`, 
         {
          review: reviewText,
          rating: ratingSend
        }
      ).then(res => console.log(res))
        .catch(err => console.error(err))
        handleCloseReviewWindow()
    }
    function handleCloseReviewWindow() {
        setReviewWindowShow(false)
    }
    // useEffect(() => {
    //   console.log(placeId)
    // }, [placeId])

  return (
    <div className='leave-review-box'
      style={{
          opacity: reviewWindowShow ? 1 : 0,
          pointerEvents: reviewWindowShow ? 'auto' : 'none'
        }}
    >
      <div className="background"></div>
      <div className="leave-review-window">
        <div className="leave-review-modal">
          <div className="leave-review-start">
            <div className="leave-review-rating">
              <span className="fa fa-star" id='rstar1' onClick={handleClick}></span>
              <span className="fa fa-star" id='rstar2' onClick={handleClick} ></span>
              <span className="fa fa-star " id='rstar3' onClick={handleClick}></span>
              <span className="fa fa-star" id='rstar4' onClick={handleClick}></span>
              <span className="fa fa-star" id='rstar5' onClick={handleClick}></span>
            </div>
            <div className="leave-reivew-close-btn">
              <button
              onClick={handleCloseReviewWindow}
              >
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <textarea name="review" id="review-input" placeholder={`${t('review')}`}
            onChange={(e) => {setReviewText(e.target.value)}}
          ></textarea>
          <div className="leave-review-button">
            <button
            onClick={handleCreateReview}
            >{t('send')}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewWindow