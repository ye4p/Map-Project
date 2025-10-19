import React from 'react'
import './SingleResult.css'
import {useEffect, useState} from 'react'



const SingleResult = ({popup}) => { //Now takes real data
    const [ lang, setLang] = useState('none')
    useEffect(() => {
        if (popup) {
            let langArray=[];
            if (popup.russian && popup.russian == true) {
                langArray.push('Ru')
            }
            if (popup.ukrainian && popup.ukrainian == true) {
                langArray.push('Ukr')
            }
            if (langArray.length>0) {
                setLang(langArray.join(', '))
            } else {
                setLang('none')
            }


        }

    }, [popup])

  return (
    <div className='single-result'>
        <div className="result-name">
            <p className='single-main-result'>{popup?.name}</p>
            <div className="single-rating">
                <span className="fa fa-star"></span>
                <span>{popup?.rating}</span>
            </div>
            <div className="single-language">
                <p>Languages: <span>{` ${lang}`}</span></p>
                
            </div>
        </div>
        <div className="single-main">
            <div className="single-description">
                <p>Address: {popup?.address}</p>
                <p>Type: {popup?.type}</p>
            </div>
        </div>
    </div>
  )
}

export default SingleResult