import React from 'react'
import './Buttons.css'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
const Buttons = ({filterOpen, setFilterOpen, closeFilterOnly, setCloseFilterOnly, closeFilterOnly_func, paramsObject, popups, setPopups}) => {
    function changeFilter() {
        setFilterOpen(!filterOpen)
      //  console.log(filterOpen)
    }
    const { t } = useTranslation()
    const handleFind = () => {
      
      // let paramsObject = {
      //       name: searchInput,
      //       russian: russian,
      //       ukrainian: ukrainian,
      //       type: typeOfPlace,
      //       rating: rating,
      //       zeroReviewsInclude: zeroReviewsInclude
      //   }
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/places`, {
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
        <button className='cancel' onClick={changeFilter}>{t('bcancel')}</button>
        <button className='find'
        onClick={handleFindClick}
        >{t('bfind')}</button>
    </div>
  )
}

export default Buttons