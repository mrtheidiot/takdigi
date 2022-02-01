import React, { useState, useEffect } from "react";
import MenuItem from "../MenuItem/MenuItem";
import Logo from "../MenuItem/Logo";

import "./NavBar.css";

const NavBar = () => {
  const [trainingTitles, setTrainingTitles] = useState([])
  
  const getTrainingTitles = async() => {
    const response = await fetch ("/api/trainingtitles/");
    const data = await response.json();
    setTrainingTitles(data);
  }
  
  useEffect(()=>{
    getTrainingTitles();
  },[])

  return (
    <div className="nav-wrapper">
      <div className="nav-section-wrapper">
        <div className="nav-secion__position">
          <div className="nav-logo">
            <Logo />
          </div>
          <div className="nav-section">
            <MenuItem name={"TRENING OBEDIENCE"} destination={"/treningi"} dropdown={trainingTitles}/>
            <MenuItem name={"ASORTYMENT"} destination={"/asortyment"} />
            <MenuItem name={"KALENDARZ"} destination={"/kalendarz"} />
            <MenuItem name={"KONTAKT"} destination={"/kontakt"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
