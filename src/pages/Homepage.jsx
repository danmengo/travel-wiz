import UserInputArea from "../components/userInput";
import '../index.css';
import logo from "../assets/wizard.gif";

const Homepage = () => {
  return (
    <div className="parent-container">
      <img src={logo} alt="loading..." width="150" height="150" />
      Homepage
      <UserInputArea />
    </div>
  );
};
export default Homepage;
