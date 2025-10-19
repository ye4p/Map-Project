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
    const [data, setData] = useState({})


  return (
        <div className='single-result'>
            {popup ? (
            <>
                <div className="result-name">
                    <p className='single-main-result'>{popup.name ? popup.name : "Place doesn't have a name :("}</p>
                    { popup.rating!=0 ? <div className="single-rating">
                        <span className="fa fa-star"></span>
                        <span>{popup.rating}</span>
                    </div> : null }
                    <div className="single-language">
                        <p>Languages: <span>{` ${lang}`}</span></p>
                    </div>
                </div>
                <div className="single-main">
                    <div className="single-description">
                        {popup.address ? <p>Address: {popup.address}</p> : null}
                        <p>Type: {popup.type}</p>
                    </div>
                </div>
            </>
  ) : (
    null
  )}
</div>
  )
}

export default SingleResult