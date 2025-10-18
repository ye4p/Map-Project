import {React, useState, useEffect} from 'react'
import './Results.css'
import SingleResult from './SingleResult.jsx'

const Results = ({closeFilterOnly, setCloseFilterOnly, searchArray, popups, setPopups}) => {

    function handleArrow() {
        setCloseFilterOnly(!closeFilterOnly)
    }
    const [ page, setPage] = useState(0)
    let index = 0;
    const [numRes, setNumRes] = useState(0)

    useEffect(() => {
        setNumRes(popups.length)
    }, [popups])


    function handlePageInc() {
        setPage(page+1)
    }
    function handlePageDec() {
        if (page>0) {
        setPage(page-1)
        }
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
            <p>Found <span>{numRes}</span>{ numRes>1 ? ' results:' : ' result:'}</p>
        </div>
        <div className="results-list">
            <SingleResult popup={popups[5*page]}/>
            <SingleResult popup={popups[5*page+1]}/>
            <SingleResult popup={popups[5*page+2]}/>
            <SingleResult popup={popups[5*page+3]}/>
            <SingleResult popup={popups[5*page+4]}/>
        </div>
        <div className="results-end">
            <div className="results-end-box">
                <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                <i className="fa fa-angle-left" aria-hidden="true"></i>
                <span>1</span>
                <i className="fa fa-angle-right" aria-hidden="true"
                onClick={handlePageInc}
                ></i>
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </div>
        </div>
    </div>
  )
}

export default Results