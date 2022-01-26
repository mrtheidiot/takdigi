import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import MainPicture from "./MainPicture";
import ObedienceDropdown from "./ObedienceDropdown";

const NavBar = () => {
  const [selectedLink, setSelectedLink] = useState(1);
  const [showDropdown, setShowDropdown] = useState(true);

  const linkStyle = {
    margin: "0 1rem",
    textDecoration: "none",
    color: "black",
  };

  return (
    <div className="navbar-main-content">
      <div className="navbar-main__main">
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
          onClick={() => setSelectedLink(4)}
          className={selectedLink === 4 ? "bor-bot" : ""}
        >
          <Link to="/" style={linkStyle}>
            JA I MOJE PSY
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
      <MainPicture link={selectedLink} />
    </div>
  );
};

export default NavBar;




        // onMouseOver={() => setShowDropdown(true)}
        // onMouseLeave={() => setShowDropdown(false)}