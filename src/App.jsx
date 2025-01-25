import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Destination from "./pages/Destination";
import Navbar from "./components/Navbar";
import MyCalendar from "./components/Calendar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyCalendar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </div>
  );
}

export default App;
