import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import "./BackButton.css";

const BackButton = ({ destination }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleBackClick = () => {
    // Navigate to the /destination route
    navigate(destination);
  };

  return (
    <div className="backbutton">
      <button onClick={handleBackClick}>Back</button>
    </div>
  );
};

export default BackButton;
