import "./FinalPage.css";
import logo from "../assets/wizard.gif";
import BackButton from "../components/BackButton";
import GeminiRecommendations from "../components/GeminiRecommendations";

const FinalPage = () => {
  return (
    <div id = "finalpage">
      <div id="wizard_chatbox"> With my magic...<br></br>here are some travel suggestions! </div>
      <img id="wizard" src={logo} alt="loading..." />
      <div id="scroll_results"> data data data yay go team </div>
      <div id="scroll_results"><GeminiRecommendations /></div>
      <BackButton destination="/destination"/>
    </div>
  );
};

export default FinalPage;
