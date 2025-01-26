import MyCalendar from '../components/calendar';
import logo from "../assets/wizard.gif";
import './Destination.css';

const Destination = () => {
  return ( 
    <div id="destination_page">
    
      <div id="chatbox"> How long shall your journey be?</div>

      <img id="wizard" src={logo} alt="loading..." />
        
      <MyCalendar/>
      
    </div>
  );
};

export default Destination;