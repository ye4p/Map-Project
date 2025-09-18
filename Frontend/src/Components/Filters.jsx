import React from 'react'
import './Filters.css'
import {useState} from 'react'
import Hoverable from './Hover-text.jsx'
import Type from './Type.jsx'

const Filters = ( {filterOpen}) => {


  return (
    <div className='filters-window'
      style={{opacity: filterOpen ? 1 : 0}}
    >
      
      <div className="box-lan">
        <p>Languages spoken:</p>
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
        <Hoverable text='If you want to go to some place and have there speaker of certain language, you can checkmark your desired language here.'/>
        <Hoverable text='If you know such place, but it is not on here, you can find it and submit ticket and we are going to add it!'/>
      </div>
      </div>
      <Type/>

    </div>
  )
}

export default Filters