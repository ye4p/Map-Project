import React from 'react'
import './Filters.css'
import {useState} from 'react'

const Filters = () => {

  const [onHover1, setOnHover1] = useState(true); //Changed for the time of styling
  const [onHover2, setOnHover2] = useState(false)

  function hoverTest() {
    setOnHover1(true)
    console.log(onHover1)
  }

  return (
    <div className='filters-window'>
      
      <div className="box-lan">
        <span>Languages spoken:</span>
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
      <span 
      className='question-inside'
      style={{ opacity: onHover1 ? 1 : 0}}
      >If you want to go to some place and have there speaker of certain language, you can checkmark your desired language here.</span>
      
      </div>
      <div className="full-ques-box">
      <div className="question_mark">
        <i className="fa fa-question-circle-o" aria-hidden="true"></i>
        <p
        onMouseEnter={() => setOnHover2(true)} 
          onMouseOut = {() => setOnHover2(false)}
        >How to contribute?</p>
      </div>
      <span 
      className='question-inside'
      style={{ opacity: onHover2 ? 1 : 0}}
      >Currently we don't have information about every place where people speak Russian/Ukrainian, but if you know such place and it is not on here, you can find it here and then submit a support ticked with corresponding message!</span>
      </div>
      </div>
      
      
      </div>
    </div>
  )
}

export default Filters