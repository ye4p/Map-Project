import React from 'react'
import './Filters.css'
import {useState} from 'react'
import Hoverable from './Hover-text.jsx'
import Type from './Type.jsx'
import Stars from './Stars.jsx'
import Review from './Review.jsx'
import Buttons from './Buttons.jsx'
const Filters = ( {filterOpen}) => {


  return (
    
    <div className="white-menu"
    style={{
        opacity: filterOpen ? 1 : 0,
        pointerEvents: filterOpen ? 'auto' : 'none'
      }}
    >
    <div className='filters-window'>
      <p className='main-title'>Filters</p> 
      <div className="lan-wrap">
        <div className='title-lan'>
          <p>Languages spoken:</p>
        </div>
      <div className="box-lan">
        <div className="checkbox-lan">
        <label>
        <input type="checkbox" name="language" value="russian"/>
        Russian
      </label>

      <label>
        <input type="checkbox" name="language" value="ukrainian"/>
        Ukrainian
      </label>
    
      </div>
      <div className="hover-text">
        <Hoverable question='What is this?' text='If you want to go to some place and have there speaker of certain language, you can checkmark your desired language here.'/>
        <Hoverable question='How to contribute?' text='If you know such place, but it is not on here, you can find it and submit ticket and we are going to add it!'/>
      </div>
      </div>
      </div>
      <Type/>
      <Stars/>
      <Review/>
    </div>
      <Buttons/>
    </div>
   
   
  )
}

export default Filters