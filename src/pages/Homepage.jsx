import UserInputArea from "../components/userInput";
import '../index.css';
import logo from "../assets/wizard.gif";
<<<<<<< HEAD
import "../index.css"; // general styling
const Homepage = () => {
  return (
    <div id="homepage">
      <div id="wizard_chatbox"> Welcome traveler! I'm the travel wizard! </div>
      <img id="wizard" src={logo} alt="loading..." />
=======

const Homepage = () => {
  return (
    <div className="parent-container">
      <img src={logo} alt="loading..." width="150" height="150" />
      Homepage
>>>>>>> 2aef047742e74e8eac9ca3f43c9eb2fb73a6470d
      <UserInputArea />
    </div>
  );
};
export default Homepage;
