import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import MainPicture from "./MainPicture";
import ObedienceDropdown from "./ObedienceDropdown";
import Logo from "../../assets/Logo1.svg";

const NavBar = () => {
  const [selectedLink, setSelectedLink] = useState(1);
  const [showDropdown, setShowDropdown] = useState(true);

  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <div className="nav-wrapper">
      <div className="nav-section-wrapper">
        <div className="nav-logo">
          <Link to="/" style={linkStyle}>
            <img src={Logo} />
          </Link>
          <div className="opis-main">
            <div className="opis-sub1">DLA PSÓW I OPIEKUNÓW</div>
            <div className="opis-sub2">Treningi | Szkolenia | Warsztaty</div>
          </div>
        </div>
        <div className="nav-section">
          <div
            onClick={() => setSelectedLink(2)}
            className={selectedLink === 2 ? "bor-bot" : ""}
          >
            <Link to="/treningi" style={linkStyle}>
              TRENING OBEDIENCE
            </Link>
          </div>
          <div
            onClick={() => setSelectedLink(3)}
            className={selectedLink === 3 ? "bor-bot" : ""}
          >
            <Link to="/" style={linkStyle}>
              ASORTYMENT
            </Link>
          </div>
          <div
            onClick={() => setSelectedLink(5)}
            className={selectedLink === 5 ? "bor-bot" : ""}
          >
            <Link to="/" style={linkStyle}>
              KALENDARZ
            </Link>
          </div>
          <div
            onClick={() => setSelectedLink(6)}
            className={selectedLink === 6 ? "bor-bot" : ""}
          >
            <Link to="/" style={linkStyle}>
              KONTAKT
            </Link>
          </div>
        </div>
      </div>
      <MainPicture link={selectedLink} />
    </div>
  );
};

export default NavBar;

// onMouseOver={() => setShowDropdown(true)}
// onMouseLeave={() => setShowDropdown(false)}
