import React, { useState, useEffect } from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar.js/NavBar";
import Trainings from "./components/Trainings/Trainings";
import HomePage from "./components/HomePage.js/HomePage";
import Kontakt from "./components/Kontakt/Kontakt";
import Asortyment from './components/Asortyment/Asortyment';

function App() {  
  return (
    <div className="app-div">
      <Router>
        <NavBar />
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
