import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js/NavBar";
import Trainings from "./components/Trainings/Trainings";
import Kontakt from "./components/Kontakt/Kontakt";
import Asortyment from "./components/Asortyment/Asortyment";
import OverlayMenu from "./UI/OverlayMenu/OverlayMenu";
import MainPage from "./components/MainPage/MainPage";
import Kalendarz from "./components/Kalendarz/Kalendarz";
import Footer from "./components/Footer/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOverlayMenu = () => setMenuOpen((prev) => !prev);

  const trainingTitles = [
    {title: 'TRENING INDYWIDUALNY', slug: 'trening-indywidualny'},
    {title: 'TRENING GRUPOWY', slug: 'trening-grupowy'},
    {title: 'TRENING GHRUPOWY POZ. 2', slug: 'trening-grupowy-poz-2'}
  ]
  const itemTitles = [
    {title: 'Szarpaki', slug: 'szarpaki'},
    {title: 'Spódniczki/pasy treningowe', slug: 'sukienki_oraz_pasy_treningowe'},
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
            <Route exact path="/kalendarz" element={<Kalendarz />} />
            <Route exact path="/kontakt" element={<Kontakt />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
