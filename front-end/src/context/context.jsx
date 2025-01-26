import { createContext } from "react";
import runChat from "../config/Gemini";

export const context = createContext();

const contextProvider = (props) => {
  const onSent = async (prompt) => {
    await runChat(prompt);
  };
  onSent("weather information");
  const contextValue = {};
  return (
    <context.Provider value={contextValue}>{props.children}</context.Provider>
  );
};

export default contextProvider;
