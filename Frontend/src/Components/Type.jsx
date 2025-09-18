import React from "react";
import './Type.css'

const Type = () => {

    return (
        <div className="type-place">
            <select name="place" id="place">
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