import React from 'react';
import GIF from '../assets/wizard.gif';  // Import the GIF file
import './wizard.css';  // Import the CSS file


const Wizard = () => {
  return (
    <div className="Wizard">
      <img src={GIF} alt="A fun GIF" />  {/* Display the GIF */}
    </div>
  );
};

export default Wizard;
