import "./kontakt.css";
import profilepic from "./../../assets/profilepic.jpg";
import Button from "../Button/Button";

import dogo1 from './../../assets/p1.jpg'
import dogo2 from './../../assets/p2.jpg'
import Gallery from "../Gallery/Gallery";

const Kontakt = () => {
  const buttons = [
    {
      preLink: 3,
      category: "Facebook",
      internal: 0,
      link: "/kontakt",
    },
    {
      preLink: 3,
      category: "Facebook",
      internal: 0,
      link: "/kontakt",
    },
    {
      preLink: 3,
      category: "Facebook",
      internal: 0,
      link: "/kontakt",
    },
  ];

  const dogs = [
    {img: `${dogo1}`, alt: "alt", id: 1},
    {img: `${dogo1}`, alt: "alt", id: 2},
  ]

  return (
    <div className="kontakt__height">
      <div className="kontakt__container-position">
        <div className="kontakt__content-info">
          <div className="kontakt-imieiopis">
            <div className="kontakt-imie">Dorota Alewras</div>
            <div className="kontakt-right-desc">Certyfikowany trener Obedience.</div>
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
          </div>
        </div>
        <div className="kontakt__content-links">
          <div className="kontakt-kontakt">
            <div className="kontakt-opis">
              Napisz do mnie lub zobacz więcej:
            </div>
            <div className="kontakt-buttons">
              {buttons.map((button, index) => (
                <Button button={button} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Gallery imgs={dogs} /> */}
    </div>
  );
};

export default Kontakt;