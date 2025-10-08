import React from 'react';
import './CustomPopup.css'

const CustomPopup = ( { name, type, russian, ukrainian, rating, description, address } ) => {
    return (
    <div className="popup-content">
      <div className="popup-header">
        <h2>{name}</h2>
        <div className="availability">
          <p>🇷🇺: <span>{russian ? '✅' : '❌'}</span></p>
          <p>🇺🇦: <span>{ukrainian ? '✅' : '❌'}</span></p>
        </div>
      </div>
      <div className="popup-main">
        <p className="popup-type">Type of the place: <span>{type}</span></p>
        <p className="popup-adress">Address: <span>{address}</span></p>
        <p className="popup-info">Additional info: <span>{description}</span></p>
      </div>
      <div className="popup-end">
        <button className='button-data'
        onClick={() => {
          alert('add info')
        }}
        >Add missing data</button>
        <button className='button-review'
        onClick={()=> {
          alert('add review')
        }}
        >Leave review</button>
      </div>
      
    </div>
    );
};

export default CustomPopup;