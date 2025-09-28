import React from 'react'
import './Results.css'
import SingleResult from './SingleResult.jsx'

const Results = ({closeFilterOnly, setCloseFilterOnly}) => {

    function handleArrow() {
        setCloseFilterOnly(!closeFilterOnly)
    }

  return (
    <div className='results-window'
    style={{
        display: closeFilterOnly ? 'block' : 'none'
        //opacity: closeFilterOnly ? 1 : 0,
        //pointerEvents: closeFilterOnly ? 'auto' : 'none'
      }}
    >
        <div className="results-arrow">
            <i className="fa fa-arrow-left" aria-hidden="true"
            onClick={handleArrow}
            ></i>
        </div>
        <div className="results-title">
            <p>Found <span>14</span> results:</p>
        </div>
        <div className="results-list">
            <SingleResult name='fdsafadsfsd'/>
            <SingleResult name='Eassdf'/>
            <SingleResult name='fdgsdfgsfdgs'/>
            <SingleResult name='xvcbxcbxcv'/>
            <SingleResult name='cvxbxvcbdfgs'/>
        </div>
        <div className="results-end">
            <div className="results-end-box">
                <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                <i className="fa fa-angle-left" aria-hidden="true"></i>
                <span>1</span>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </div>
        </div>
    </div>
  )
}

export default Results