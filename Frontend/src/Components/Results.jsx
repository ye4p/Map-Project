import {React, useState, useEffect} from 'react'
import './Results.css'
import SingleResult from './SingleResult.jsx'
import { useTranslation } from 'react-i18next'
const Results = ({closeFilterOnly, setCloseFilterOnly, searchArray, popups, setPopups}) => {
    const { t } = useTranslation()
    function handleArrow() {
        setCloseFilterOnly(!closeFilterOnly)
    }
    const [ page, setPage] = useState(0)
    let index = 0;
    const [numRes, setNumRes] = useState(0)

    useEffect(() => {
        setNumRes(popups.length)
        setPage(0)
    }, [popups])


    function handlePageInc() {
        //console.log(numRes)
        //console.log((page+1)*5)
        if (numRes>(page+1)*5) {
            setPage(page+1)
        }
    }
    function handlePageDec() {
        if (page>0) {
        setPage(page-1)
        }
    }
    function handlePageFirst() {
        setPage(0)
    }
    function handlePageLast() {
        if (numRes % 5 == 0) {
            setPage((numRes/5)-1)
        } else {
            setPage(((numRes - (numRes % 5))/5))
        }
    }

  return (
    <div className='results-window'
    style={{
        display: closeFilterOnly ? 'block' : 'none'
        //display: 'block'
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
            <p>{t('found')}<span>{numRes}</span>{ numRes>1 ? ' results:' : ' result:'}</p>
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
                <i className="fa fa-angle-double-left" aria-hidden="true"
                    onClick={handlePageFirst}
                ></i>
                <i className="fa fa-angle-left" aria-hidden="true"
                    onClick={handlePageDec}
                ></i>
                <span>{page+1}</span>
                <i className="fa fa-angle-right" aria-hidden="true"
                    onClick={handlePageInc}
                ></i>
                <i className="fa fa-angle-double-right" aria-hidden="true"
                    onClick={handlePageLast}
                ></i>
            </div>
        </div>
    </div>
  )
}

export default Results