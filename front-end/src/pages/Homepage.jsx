import "./Homepage.css";
import logo from "../assets/wizard.gif";
import UserInputArea from "../components/userInput";

const Homepage = () => {
  return (
    <div id = "homepage">
      <div id="wizard_chatbox"> Welcome traveler! I'm the travel wizard! Where would you like to go? </div>
      <img id="wizard" src={logo} alt="loading..." />
      <UserInputArea />
    </div>
  );
};

export default Homepage;
