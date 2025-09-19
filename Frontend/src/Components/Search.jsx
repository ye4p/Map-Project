import React from 'react'
import './Search.css'
import Filters from './Filters'
import {useState} from 'react'

const Search = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const [filterOpen, setFilterOpen] = useState(false)
    function testFilter() {
        setFilterOpen(!filterOpen)
       //console.log(filterOpen)
    }

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
                <input type="text" placeholder='Enter name of the place'/>
                <button type='submit'>
                    <p>Search</p>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </form>
        </div>
        <Filters
            filterOpen={filterOpen}
            setFilterOpen={setFilterOpen}
        />
    </div>
    </>
  )
}

export default Search