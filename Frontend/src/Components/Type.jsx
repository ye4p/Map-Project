import React from "react";
import './Type.css'

const Type = ( { typeOfPlace, setTypeOfPlace } ) => {
    function handleChangeType(e) {
        setTypeOfPlace(e.target.value)
        // console.dir(e)
    }

    return (
        <div className="type-place">
            <div className="type-title">
                <p>
                    Choose type of place:
                </p>
            </div>
            <select name="place" id="place"
            onChange={handleChangeType}
            >
                <option value="">All</option>
                <option value="park">Parks</option>
                <option value="restaurant">Restaurants</option>
                <option value="grocery">Grocery shops</option>
                <option value="cinema">Cinemas</option>
                <option value="other">Other</option>
            </select>
        </div>
    )
}
export default Type