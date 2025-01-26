import MyCalendar from '../components/calendar';
import logo from "../assets/wizard.gif";
import './Destination.css';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';

const Destination = () => {
  return ( 
    <div id="destination_page">
    
      <div id="chatbox"> How long shall your journey be?</div>

      <img id="wizard" src={logo} alt="loading..." />
        
      <MyCalendar/>
      <BackButton destination="/travelplans" />
      <NextButton destination="/FinalPage"/>
    </div>
  );
};

export default Destination;