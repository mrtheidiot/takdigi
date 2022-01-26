import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <Link to="/" style={{textDecoration: 'none', color: 'marine'}}>
      <div className="logo-main__main">
        <i class="fas fa-paw fa-6x"></i>
        <div className="logo-main__info">
          <div className="logo-main__title">Tak To Się Obi!</div>
          <div className="logo-main__subtitle">
            Trening OBEDIENCE - dla Hobbystów i Profesjonalistów
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
