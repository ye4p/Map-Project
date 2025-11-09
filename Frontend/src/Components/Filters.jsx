import React from 'react'
import './Filters.css'
import {useState, useEffect} from 'react'
import Hoverable from './Hover-text.jsx'
import Type from './Type.jsx'
import Stars from './Stars.jsx'
import Review from './Review.jsx'
import Buttons from './Buttons.jsx'
import Results from './Results.jsx'
import { useTranslation } from 'react-i18next'
const Filters = ( {
  filterOpen, setFilterOpen, searchArray, russian, setRussian, 
  ukrainian, setUkrainian, typeOfPlace, setTypeOfPlace, rating, 
  setRating, zeroReviewsInclude, setZeroReviewsInclude, paramsObject,
  popups, setPopups
}) => {
   const { t } = useTranslation()
  function test() {
    console.log(closeFilterOnly)
  }
  function changeFilter() {
    setFilterOpen(!filterOpen)
  }
  const [closeFilterOnly, setCloseFilterOnly] = useState(false)
  function closeFilterOnly_func() {
    setCloseFilterOnly(!closeFilterOnly)
   // console.log('changed', closeFilterOnly)
  }
  function testOnCheck() {
    setRussian(!russian)
  }
  function handleChangeRussian(e) {
    setRussian(e.target.checked)
  }
  function handleChangeUkrainian(e) {
    setUkrainian(e.target.checked)
  }
  useEffect(() => {
  // console.log(russian)
  }, [russian])
  useEffect(() => {
  //  console.log(ukrainian)
  }, [ukrainian])
  
  return (
    <>
    
    <div className="white-menu"
    style={{
        opacity: filterOpen ? 1 : 0,
        pointerEvents: filterOpen ? 'auto' : 'none',
         display: filterOpen ? 'flex' : 'none'
      }}
    >
      <div className="close-button">
      <button
      onClick={changeFilter}
      >
        <i className="fa fa-times" aria-hidden="true"></i>
      </button>
    </div>
    <div className='filters-window'
      style={{
        display: closeFilterOnly ? 'none' : 'flex',
       // opacity: closeFilterOnly ? 0 : 1,
       // pointerEvents: closeFilterOnly ? 'none' : 'auto'
      }}
    >
      <p className='main-title'>{t('filters')}</p> 
      <div className="lan-wrap">
        <div className='title-lan'>
          <p>{t('languages spoken')}</p>
        </div>
      <div className="box-lan">
        <div className="checkbox-lan">
        <label>
        <input type="checkbox" name="language" value="russian"
        checked={russian}
        onChange={handleChangeRussian}
        // onChecked={}
        />
        {t('russian')}
      </label>

      <label>
        <input type="checkbox" name="language" value="ukrainian"
          checked={ukrainian}
          onChange={handleChangeUkrainian}    
                />
        {t('ukrainian')}
      </label>
    
      </div>
      <div className="hover-text">
        <Hoverable question={`${t('what is this')}`} text={`${t('whattext')}`}/>
        <Hoverable question={`${t('how to contribute')}`} text={`${t('howtext')}`}/>
      </div>
      </div>
      </div>
      <Type typeOfPlace={typeOfPlace} setTypeOfPlace={setTypeOfPlace}/>
      <Stars rating={rating} setRating={setRating}/>
      <Review
        zeroReviewsInclude = {zeroReviewsInclude}
        setZeroReviewsInclude = {setZeroReviewsInclude}

      />
      <Buttons
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
        closeFilterOnly={closeFilterOnly}
        setCloseFilterOnly={setCloseFilterOnly}
        closeFilterOnly_func={closeFilterOnly_func}
        paramsObject={paramsObject}
        popups={popups}
        setPopups={setPopups}
      />
    </div>
      <Results 
        closeFilterOnly={closeFilterOnly}
        setCloseFilterOnly={setCloseFilterOnly}
        searchArray={searchArray}
        popups={popups}
        setPopups={setPopups}
      />
      
    </div>
   </>
   
  )
}

export default Filters