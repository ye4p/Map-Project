import './Hover-text.css'
import {useState} from 'react'


const Hoverable = ({text}) => {
    const [onHover, setOnHover] = useState(false)

    return (
        <div className="full-ques-box">
        <div className="question_mark">
        <i className="fa fa-question-circle-o" aria-hidden="true"></i>
        <p 
          onMouseEnter={() => setOnHover(true)} 
          onMouseOut = {() => setOnHover(false)}
        >What is this?</p>
      </div>
      <div 
      className='question-inside'
      style={{ opacity: onHover ? 1 : 0}}
      >
        <span>
          {/* If you want to go to some place and have there speaker of certain language, you can checkmark your desired language here. */}
          {text}
          </span>
      </div>
      
      </div>
    )
}

export default Hoverable
// Need to add