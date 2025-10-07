import React from 'react'
import './Filters.css'
import {useState, useEffect} from 'react'
import Hoverable from './Hover-text.jsx'
import Type from './Type.jsx'
import Stars from './Stars.jsx'
import Review from './Review.jsx'
import Buttons from './Buttons.jsx'
import Results from './Results.jsx'
const Filters = ( {
  filterOpen, setFilterOpen, searchArray, russian, setRussian, 
  ukrainian, setUkrainian, typeOfPlace, setTypeOfPlace, rating, 
  setRating, zeroReviewsInclude, setZeroReviewsInclude, paramsObject,
  popups, setPopups
}) => {
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
        pointerEvents: filterOpen ? 'auto' : 'none'
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
      <p className='main-title'>Filters</p> 
      <div className="lan-wrap">
        <div className='title-lan'>
          <p>Languages spoken:</p>
        </div>
      <div className="box-lan">
        <div className="checkbox-lan">
        <label>
        <input type="checkbox" name="language" value="russian"
        checked={russian}
        onChange={handleChangeRussian}
        // onChecked={}
        />
        Russian
      </label>

      <label>
        <input type="checkbox" name="language" value="ukrainian"
          checked={ukrainian}
          onChange={handleChangeUkrainian}    
                />
        Ukrainian
      </label>
    
      </div>
      <div className="hover-text">
        <Hoverable question='What is this?' text='If you want to go to some place and have there speaker of certain language, you can checkmark your desired language here.'/>
        <Hoverable question='How to contribute?' text='If you know such place, but it is not on here, you can find it and submit ticket and we are going to add it!'/>
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
      />
      
    </div>
   </>
   
  )
}

export default Filters