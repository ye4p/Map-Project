import React from 'react';
import './CustomPopup.css'

const CustomPopup = () => {
    return (
    <div className="popup-content">
      <h2>Custom Title</h2>
      <p>This is a <b>custom popup</b> with React.</p>
      <button onClick={() => alert("Clicked!")}>Click Me</button>
    </div>
    );
};

export default CustomPopup;