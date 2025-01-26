import React from 'react';
import png from '../assets/wiz_chatbox.png';  // Import PNG
import './wizChat.css';  // Import CSS

const WizChat = () => {
  return (
    <div className="WizChat">
      <img src={png} alt="Wiz Chatbox" /> {/* Display the PNG */}
    </div>
  );
};

export default WizChat;
