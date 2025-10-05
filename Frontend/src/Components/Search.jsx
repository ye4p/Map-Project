import React from 'react'
import './Search.css'
import Filters from './Filters'
import {useState, useEffect} from 'react'
import axios from 'axios';

const Search = () => {
    const [ searchArray, setSearchArray] = useState([])

    const [ searchInput, setSearchInput ] = useState("");
    const [ russian, setRussian ] = useState(false)
    const [ ukrainian, setUkrainian ] = useState(false)
    const [ typeOfPlace, setTypeOfPlace ] = useState("")
    const [ rating, setRating ] = useState(3)
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
        let paramsObject = {
            name: searchInput,
            //russian: russian,
            //ukrainian: ukrainian,
            type: typeOfPlace,
            //rating: rating,
            //zeroReviewsInclude: zeroReviewsInclude
        }
        // let paramsObject = {
        //     name: searchInput,
        //     russian: russian,
        //     ukrainian: ukrainian,
        //     type: typeOfPlace,
        //     rating: rating,
        //     zeroReviewsInclude: zeroReviewsInclude
        // }
        console.log(paramsObject)
        axios.get('http://localhost:5000/api/v1/places', {
            params: paramsObject
        })
            .then(res => {
                //console.log(res.data);
                setSearchArray([res.data])
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
     useEffect(() => {
         console.log(searchArray);
     }, [searchArray]);

  return (
    <>
    <div className='left-window'>
        <div className='search-form'>
            <div 
                className="filter-bars"
                onClick={testFilter}
                >
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter name of the place' 
                onChange={(e) => {setSearchInput(e.target.value)}}
                />
                <button type='submit'>
                    <p>Search</p>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </form>
        </div>
        <Filters
            filterOpen={filterOpen}
            setFilterOpen={setFilterOpen}
            searchArray={searchArray}
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
        />
    </div>
    </>
  )
}

export default Search