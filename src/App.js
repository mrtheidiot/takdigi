import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js/NavBar";
import Trainings from "./components/Trainings/Trainings";
import Kontakt from "./components/Kontakt/Kontakt";
import Asortyment from "./components/Asortyment/Asortyment";
import OverlayMenu from "./UI/OverlayMenu/OverlayMenu";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";

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

  const itemTitles = [
    {title: 'szarpaki', slug: 'szarpaki'},
    {title: 'sukienki', slug: 'sukienki'},
  ]

  return (
    <div className="app-div">
      <Router>
        {menuOpen && <OverlayMenu callback={handleOverlayMenu} />}
        <NavBar handleOverlayMenu={handleOverlayMenu} trainingTitles={trainingTitles} itemTitles={itemTitles}/>
        <div className="apps-wrapper">
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/treningi" element={<Trainings />} />
            <Route exact path="/asortyment" element={<Asortyment />} />
            <Route exact path="/kontakt" element={<Kontakt />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
