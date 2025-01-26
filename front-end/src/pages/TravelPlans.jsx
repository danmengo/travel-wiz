import "./TravelPlans.css";
import logo from "../assets/wizard.gif";
import InteractiveMap from "../components/InteractiveMap";
import wiz_scoll from "../assets/wizard_scroll.png";
import UserInputArea from "../components/userInput";

const TravelPlans = () => {
    return (
      <div id="travel_plan_page" >

        <div id="scroll_text">
            weather information
            <InteractiveMap />
            {/* <UserInputArea /> */}
        </div>
        
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
