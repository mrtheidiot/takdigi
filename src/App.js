import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js/NavBar";
import Trainings from "./components/Trainings/Trainings";
import Kontakt from "./components/Kontakt/Kontakt";
import Asortyment from "./components/Asortyment/Asortyment";
import OverlayMenu from "./UI/OverlayMenu/OverlayMenu";
import MainPage from "./components/MainPage/MainPage";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import Indywidualny from "./components/Treningi/Indywidualny";
import Posluszenstwo from "./components/Treningi/Posluszenstwo";
import Obedience_1 from "./components/Treningi/Obedience_1";
import SportowySzczeniak from "./components/Treningi/SportowySzczeniak";
import AboutMe from "./components/AboutMe/AboutMe";
import Wspolne from "./components/Treningi/Wspolne";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOverlayMenu = () => setMenuOpen((prev) => !prev);

  const trainingTitles = [
    { title: "Trening Indywidualny", slug: "treningi/trening-indywidualny" },
    { title: "Posłuszeństwo z el. obedience", slug: "treningi/posluszenstwo-el-obd" },
    { title: "Obedience 1", slug: "treningi/obedience-1" },
    { title: "Sportowy szczeniak", slug: "treningi/sportowy-szczeniak" },
    { title: "Treningi wspólne", slug: "treningi/treningi-wspolne" },
  ];
  
  const itemTitles = [
    { title: "Szarpaki", slug: "szarpaki" },
    {
      title: "Spódniczki/pasy treningowe",
      slug: "sukienki_oraz_pasy_treningowe",
    },
  ];

  return (
    <>
      <div className="app-div">
        <Router>
          {menuOpen && <OverlayMenu callback={handleOverlayMenu} />}
          <NavBar
            handleOverlayMenu={handleOverlayMenu}
            trainingTitles={trainingTitles}
            itemTitles={itemTitles}
          />
          <div className="apps-wrapper">
            <Routes>
              <Route exact path="/" element={<MainPage />} />
              <Route exact path="/treningi" element={<Trainings />} />
              <Route exact path="/asortyment" element={<Asortyment />} />
              <Route exact path="/kalendarz" element={<Events />} />
              <Route exact path="/kontakt" element={<Kontakt />} />
              <Route exact path="/omnie" element={<AboutMe />} />
              <Route path="/treningi/trening-indywidualny" element={<Indywidualny />} />
              <Route path="/treningi/posluszenstwo-el-obd" element={<Posluszenstwo />} />
              <Route path="/treningi/obedience-1" element={<Obedience_1 />} />
              <Route path="/treningi/sportowy-szczeniak" element={<SportowySzczeniak />} />
              <Route path="/treningi/treningi-wspolne" element={<Wspolne />} />
            </Routes>
          </div>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
