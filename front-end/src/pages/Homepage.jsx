import UserInputArea from "../components/userInput";
import "../index.css";
import logo from "../assets/wizard.gif";

const Homepage = () => {
  return (
    <div id="homepage">
      <div id="wizard_chatbox"> Welcome traveler! I'm the travel wizard! </div>
      <img id="wizard" src={logo} alt="loading..." />
<<<<<<< HEAD:src/pages/Homepage.jsx
=======
      
>>>>>>> main:front-end/src/pages/Homepage.jsx
      <UserInputArea />
      
      <div id="weather_display"> display weather here </div>
    </div>
  );
};
export default Homepage;
