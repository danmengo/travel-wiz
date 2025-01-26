import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import "./NextButton.css";

const NextButton = ({ destination }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNextClick = () => {
    // Navigate to the /destination route
    navigate(destination);
  };

  return (
    <div className="nextbutton">
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default NextButton;
