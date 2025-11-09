import React from 'react'
import './Search.css'
import Filters from './Filters'
import {useState, useEffect} from 'react'
import axios from 'axios';
import dataArr from '../../data-test'
import { useTranslation } from 'react-i18next'

const Search = ( { popups, setPopups } ) => {
    // const [ searchArray, setSearchArray] = useState([])
    const { t } = useTranslation()
    const [ searchInput, setSearchInput ] = useState("");
    const [ russian, setRussian ] = useState(false)
    const [ ukrainian, setUkrainian ] = useState(false)
    const [ typeOfPlace, setTypeOfPlace ] = useState("")
    const [ rating, setRating ] = useState(0)
    const [ zeroReviewsInclude, setZeroReviewsInclude ] = useState(true)
    const [ paramsObject, setParamsObject ] = useState({
            name: searchInput,
            russian: russian,
            ukrainian: ukrainian,
            type: typeOfPlace,
            rating: rating,
            zeroReviewsInclude: zeroReviewsInclude
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        let paramsObject2 = {
            name: searchInput,
            // russian: russian,
            // ukrainian: ukrainian,
            // type: typeOfPlace,
            // rating: rating,
            // zeroReviewsInclude: zeroReviewsInclude
        }
       // console.log(paramsObject2)
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/places`, {
            params: paramsObject2
        })
            .then(res => {
               // console.log(res.data);
                setPopups(res.data);
                dataArr.push(...res.data)
                //setSearchArray([res.data])
                //console.log(searchArray)
            })
            .catch(err => {
                console.error(err);
            });
    }
    const [filterOpen, setFilterOpen] = useState(false)
    function testFilter() {
        setFilterOpen(!filterOpen)
       //console.log(filterOpen)
    }
    
    function displayNodes() {

    }
    function displaySingleNode(node) {
        const lat = node.lat;
        const lon = node.lon;
        popupData = {
            position: [lat, lon],
            content: {

            }
        }

    }
     useEffect(() => {
        setParamsObject({
            name: searchInput,
            russian: russian,
            ukrainian: ukrainian,
            type: typeOfPlace,
            rating: rating,
            zeroReviewsInclude: zeroReviewsInclude
    })
        
     }, [searchInput, russian, ukrainian, typeOfPlace, rating, zeroReviewsInclude]);

  return (
    <>
    <div className='left-window'
    style={{
        height: filterOpen ? '800' : 'auto'
        
    }}>
        <div className='search-form'>
            <div 
                className="filter-bars"
                onClick={testFilter}
                >
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={`${t('place name')}`} 
                onChange={(e) => {setSearchInput(e.target.value)}}
                />
                <button type='submit'>
                    <p>{t('search')}</p>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </form>
        </div>
        <Filters
            filterOpen={filterOpen}
            setFilterOpen={setFilterOpen}
           // searchArray={searchArray}
            russian={russian}
            setRussian={setRussian}
            ukrainian={ukrainian}
            setUkrainian={setUkrainian}
            typeOfPlace={typeOfPlace}
            setTypeOfPlace={setTypeOfPlace}
            rating={rating}
            setRating={setRating}
            zeroReviewsInclude={zeroReviewsInclude}
            setZeroReviewsInclude={setZeroReviewsInclude}
            paramsObject={paramsObject}
            popups={popups}
            setPopups={setPopups}
        />
    </div>
    </>
  )
}

export default Search