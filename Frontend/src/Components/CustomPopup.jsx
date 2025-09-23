import React from 'react';
import './CustomPopup.css'

const CustomPopup = () => {
    return (
    <div className="popup-content">
      <div className="popup-header">
        <h2>Name of the place</h2>
        <div class="availability">
          <p>🇷🇺: <span>✅</span></p>
          <p>🇺🇦: <span>❌</span></p>
        </div>
      </div>
      <div className="popup-main">
        <p className="popup-type">Type of the place: <span>Restaurant</span></p>
        <p className="popup-adress">Address: <span>2923 Tampa Street Ap A1</span></p>
        <p className="popup-info">Additional info: <span>bla bla bla</span></p>
      </div>
      
    </div>
    );
};

export default CustomPopup;