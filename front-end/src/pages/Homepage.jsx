import "./Homepage.css";
import logo from "../assets/wizard.gif";
// import UserInputArea from "../components/userInput";

const Homepage = () => {
  return (
    <div>
      <div id="wizard_chatbox"> Welcome traveler! I'm the travel wizard! Where would you like to go? </div>
      <img id="wizard" src={logo} alt="loading..." />
      {/* <UserInputArea /> */}
      <div id="weather_display"> display weather here </div>
    </div>
  );
};

export default Homepage;
