import React from 'react'
import './Filters.css'
import {useState} from 'react'

const Filters = ( {filterOpen}) => {

  const [onHover1, setOnHover1] = useState(false);
  const [onHover2, setOnHover2] = useState(false)

  function hoverTest() {
    setOnHover1(true)
    console.log(onHover1)
  }

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
        <div className="full-ques-box">
        <div className="question_mark">
        <i className="fa fa-question-circle-o" aria-hidden="true"></i>
        <p 
          onMouseEnter={() => setOnHover1(true)} 
          onMouseOut = {() => setOnHover1(false)}
        >What is this?</p>
      </div>
      <div 
      className='question-inside'
      style={{ opacity: onHover1 ? 1 : 0}}
      >
        <span>
          If you want to go to some place and have there speaker of certain language, you can checkmark your desired language here.
          </span>
      </div>
      
      </div>
      <div className="full-ques-box">
      <div className="question_mark">
        <i className="fa fa-question-circle-o" aria-hidden="true"></i>
        <p
        onMouseEnter={() => setOnHover2(true)} 
          onMouseOut = {() => setOnHover2(false)}
        >How to contribute?</p>
      </div>
      <div 
      className='question-inside'
      style={{ opacity: onHover2 ? 1 : 0}}
      >
        <span>
          If you know such place, but it is not on here, you can find it and submit ticket and we are going to add it!
          </span>
      </div>
      </div>
      </div>
      
      
      </div>
      
    </div>
  )
}

export default Filters