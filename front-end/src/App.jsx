import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Destination from "./pages/Destination";
import TravelPlans from "./pages/TravelPlans";
import FinalPage from "./pages/FinalPage";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/travelplans" element={<TravelPlans />} />
        <Route path="/finalpage" element={<FinalPage />} />
      </Routes>
    </div>
  );
}

export default App;
