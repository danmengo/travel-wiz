import "../index.css";
import logo from "../assets/wizard.gif";

const TravelPlans = () => {
    return (
      <div id="homepage">
        <div id="wizard_chatbox_bottom"> 
            <p>
                with a little bit of magic, <br></br>
                here's what i can suggest for your trip! 
            </p>
            
            </div>
        <img id="travel_plan_wizard" src={logo} alt="loading..." />
      </div>
    );
  };
  export default TravelPlans;
