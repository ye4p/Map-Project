import React from 'react'
import './Stars.css'
import { useTranslation } from 'react-i18next'

const Stars = ( { rating, setRating} ) => {
        const { t } = useTranslation()
    function getId(e) {         //Get the id # from the start element
        let ID = e.split('star')[1]
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
            if (isCheckedLoop(document.getElementById(`star${i}`).classList)) {
                checkedArr.push(i)
            }
        }
        return checkedArr 
    }
    function emptyStars() {
        for(var i = 1; i<6; i++) {
            document.getElementById(`star${i}`).classList.remove('checked')
        }
    }
    function checkStars(max) {
        //console.log(max)
        for(var i = 1; i<max; i++) {
            document.getElementById(`star${i}`).classList.add('checked')
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
    <div className='stars-box'>
        <div className="title-stars">
            <span>{t('rating')}</span>
        </div>
        <div className="stars">
            <span className="fa fa-star checked" id='star1' onClick={handleClick}></span>
            <span className="fa fa-star checked" id='star2' onClick={handleClick} ></span>
            <span className="fa fa-star checked" id='star3' onClick={handleClick}></span>
            <span className="fa fa-star" id='star4' onClick={handleClick}></span>
            <span className="fa fa-star" id='star5' onClick={handleClick}></span>
        </div>
    </div>
  )
}

export default Stars