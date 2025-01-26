import MyCalendar from '../components/calendar';
import Wizard from '../components/wizard';
import WizChat from '../components/wizChat';
import './Destination.css';

const Destination = () => {
  return (
    
    <div>
    
      <div className="chatbox">
        <MyCalendar />
        <Wizard />
        <div className="chatbox-bubble">
          <WizChat />
        </div>
        
      </div>
      
    </div>
  );
};

export default Destination;