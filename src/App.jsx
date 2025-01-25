import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Destination from "./pages/Destination";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <a href="/">Home</a>
          <a href="/destination">Choose Destination</a>
        </nav>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/destination" element={<Destination />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
