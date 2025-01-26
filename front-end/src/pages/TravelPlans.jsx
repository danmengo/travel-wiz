import "./TravelPlans.css";
import logo from "../assets/wizard.gif";
import InteractiveMap from "../components/InteractiveMap";
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";

const TravelPlans = () => {
  const userInput = localStorage.getItem("userInput");
  return (
    <div id="travel_plan_page">
      <div id="scroll_text">
        weather information
        <InteractiveMap />
      </div>

      <div id="wizard_chatbox_bottom">
        <p>
          with a little bit of magic, <br></br>
          here's what i can suggest for your trip to {userInput}!
        </p>
      </div>

      <img id="travel_plan_wizard" src={logo} alt="loading..." />
      <BackButton destination="/" />
      <NextButton destination="/destination" />
    </div>
  );
};
export default TravelPlans;
