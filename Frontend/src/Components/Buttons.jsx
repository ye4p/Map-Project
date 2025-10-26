import React from 'react'
import './Buttons.css'
import axios from 'axios'

const Buttons = ({filterOpen, setFilterOpen, closeFilterOnly, setCloseFilterOnly, closeFilterOnly_func, paramsObject, popups, setPopups}) => {
    function changeFilter() {
        setFilterOpen(!filterOpen)
      //  console.log(filterOpen)
    }
    const handleFind = () => {
      
      // let paramsObject = {
      //       name: searchInput,
      //       russian: russian,
      //       ukrainian: ukrainian,
      //       type: typeOfPlace,
      //       rating: rating,
      //       zeroReviewsInclude: zeroReviewsInclude
      //   }
        axios.get(`${import.meta.env.BACKEND_URL}/api/v1/places`, {
          params: paramsObject
        }).then(res => {
          console.log(res)
          setPopups(res.data)
        })
        .catch(err => console.log(err))
        //console.log(paramsObject)
    }
    function handleFindClick(e) {
      e.preventDefault()
      closeFilterOnly_func()
      handleFind()
    }
  return (
    <div className='buttons-end'>
        <button className='cancel' onClick={changeFilter}>Cancel</button>
        <button className='find'
        onClick={handleFindClick}
        >Find</button>
    </div>
  )
}

export default Buttons