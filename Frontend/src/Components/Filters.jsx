import React from 'react'
import './Filters.css'
const Filters = () => {
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
      <div className="question_mark">
        <i class="fa fa-question-circle-o" aria-hidden="true"></i>
        <p>What is this?</p>
      </div>
      
      <span>Currently we don't have information about every place where people speak Russian/Ukrainian, but if you know such place and it is not on here, you can find it here and then submit a support ticked with corresponding text!</span>
      </div>
    </div>
  )
}

export default Filters