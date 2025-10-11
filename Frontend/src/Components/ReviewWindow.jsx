import React from 'react'
import './ReviewWindow.css'

const ReviewWindow = () => {

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
        setRating(Number(clickedStar))
        return
    }

    function test() {               // test function
    console.log(document.getElementById(`star1`).classList)
    }

  return (
    <div className='leave-review-box'>
      <div className="background"></div>
      <div className="leave-review-window">
        <div className="leave-review-modal">
          <div className="leave-review-rating">
            <span className="fa fa-star checked" id='rstar1' onClick={handleClick}></span>
            <span className="fa fa-star checked" id='rstar2' onClick={handleClick} ></span>
            <span className="fa fa-star checked" id='rstar3' onClick={handleClick}></span>
            <span className="fa fa-star" id='rstar4' onClick={handleClick}></span>
            <span className="fa fa-star" id='rstar5' onClick={handleClick}></span>
          </div>
          <textarea name="review" id="review-input" placeholder='Enter your review here...'></textarea>
          <div className="leave-review-button">
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewWindow