import "../index.css";
import logo from "../assets/wizard.gif";

const TravelPlans = () => {
    return (
      <div id="homepage">
        <div id="wizard_chatbox"> Welcome traveler! I'm the travel wizard! </div>
        <img id="wizard" src={logo} alt="loading..." />
        <UserInputArea />
      </div>
    );
  };
  export default TravelPlans;
