import UserInputArea from "../components/userInput";
import logo from "../assets/wizard.gif";
const Homepage = () => {
  return (
    <div>
      <img src={logo} alt="loading..." width="150" height="150" />
      Homepage
      <UserInputArea />
    </div>
  );
};
export default Homepage;
