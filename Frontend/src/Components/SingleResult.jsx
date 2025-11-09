import React from 'react'
import './SingleResult.css'
import {useEffect, useState} from 'react'



const SingleResult = ({popup}) => { //Now takes real data
    const [ lang, setLang] = useState('none')
    useEffect(() => {
        if (popup) {
            let langArray=[];
            if (popup.russian && popup.russian == true) {
                langArray.push('🇷🇺')
            }
            if (popup.ukrainian && popup.ukrainian == true) {
                langArray.push('🇺🇦')
            }
            if (langArray.length>0) {
                setLang(langArray.join(', '))
            } else {
                setLang('❌')
            }

        }
    }, [popup])
    const [data, setData] = useState({})

    //       <p>🇷🇺: <span>{russian ? '✅' : '❌'}</span></p>
    //       <p>🇺🇦: <span>{ukrainian ? '✅' : '❌'}</span></p>
    const [typeConverter, setTypeConverter] = useState('')
    
      function typeConverterFunc(e) {
        let array = e.split('_');
        array[0]=array[0].charAt(0).toUpperCase() + array[0].slice(1);
        let newType = array.join(' ');
        return newType;
      }
      useEffect(() => {
        if (popup) {
          setTypeConverter(typeConverterFunc(popup.type))
        }
        }, [popup])

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
                        <p>Type: {typeConverter}</p>
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