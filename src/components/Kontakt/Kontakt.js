import "./kontakt.css";
import profilepic from "./../../assets/profilepic.jpg";

const Kontakt = () => {
  return (
    <div className="kontakt-main">
      <div className="kontakt-img">
        <img src={profilepic} />
      </div>
      <div className="kontakt-descr">
        <div>
          <div className="kontakt-imie">Dorota Alewras</div>
          <div className="kontakt-opis">
            Certyfikowany trener Obedience. Złoty człowiek.
          </div>
        </div>
        <div className="kontakt-adresy">
          <div>
            <div>ul. Szczecinska 15/5</div>
            <div>71-554 Szczecin</div>
          </div>
          <div>
            <div>numer konta bankowego:</div>
            <div>1234 5678 9101 1121 3141</div>
          </div>
            <div>Arysto kiedy idziemy na piwo???</div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
