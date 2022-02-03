import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar.js/NavBar";
import Trainings from "./components/Trainings/Trainings";
import HomePage from "./components/HomePage.js/HomePage";
import Kontakt from "./components/Kontakt/Kontakt";
import Asortyment from "./components/Asortyment/Asortyment";
import OverlayMenu from "./UI/OverlayMenu/OverlayMenu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOverlayMenu = () => setMenuOpen((prev) => !prev);

  const [trainingTitles, setTrainingTitles] = useState([]);

  const getTrainingTitles = async () => {
    const response = await fetch("/api/trainingtitles/");
    const data = await response.json();
    setTrainingTitles(data);
  };

  useEffect(() => {
    getTrainingTitles();
  }, []);

  console.log(menuOpen);
  return (
    <div className="app-div">
      <Router>
        {menuOpen && <OverlayMenu callback={handleOverlayMenu} />}
        <NavBar handleOverlayMenu={handleOverlayMenu} dropdownTitles={trainingTitles} />
        <div className="apps-wrapper">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/treningi" element={<Trainings />} />
            <Route exact path="/asortyment" element={<Asortyment />} />
            <Route exact path="/kontakt" element={<Kontakt />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
