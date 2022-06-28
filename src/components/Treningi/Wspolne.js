import React from "react";
import "./Treningi.css";
import dogo1 from "./../../assets/dogo1.jpg";
import dogo2 from "./../../assets/p1.jpg";

import Galeria from "./Galeria";

import { Wrapper } from "./Wrapper";

const Wspolne = () => {
  return (
    <Wrapper>
      <div className="trening_main">
        <h1>Treningi Wspolne</h1>
        <div className="trening_textarea">
          Zajęcia grupowe, podczas których „każdy sobie rzepkę skrobie” – Wy
          ćwiczycie ze swoimi psami, ja ze swoimi.
        </div>
        <div className="trening_textarea">
          Takie spotkania mają na celu trening w otoczeniu innych psów i ludzi
          oraz wykorzystanie ich do tzw. overów*.
        </div>
        <div className="trening_textarea">
          Terminy i częstotliwość treningów również uzgadniamy indywidualnie, w
          zależności od możliwości i potrzeb. Rozpocząć możemy w każdej chwili.
        </div>
        <div className="trening_textarea">
          Miejsce spotkań jest takie, na jakie się umówimy. W zimie wynajmujemy
          halę jeździecką.
        </div>
        <div className="trening_textarea">
          Częstotliwość – jaka komu pasuje :)
        </div>
        <div className="trening_textarea">
          Można wykupić pakiet 6 treningów, który jest ważny przez pół roku.{" "}
        </div>
        <br></br>
        <div className="trening_textarea" style={{ textAlign: "left" }}>
          *utrudnione wersje ćwiczeń, głównie chodzi o dodawanie rozproszeń{" "}
        </div>
        <br></br>
        <div className="trening_textarea">Zgłoszenia:</div>
        <div className="trening_textarea">mailowo na adres taktosieobi@gmail.com</div>
        <div className="trening_textarea">przez Messengera Tak
        to się Obi (buton do fejsa)</div>
        <div className="trening_textarea">SMS na nr 697 228 224</div>
        <br></br>
        <div className="trening_textarea">Organizator: Tak to się Obi</div>
        <div className="trening_textarea">Koszt: 1 spotkanie (1h) - 30 zł</div>
        <div className="trening_textarea">Pakiet 6 spotkań - 150 zł</div>
        <div className="trening_textarea">
          + plus zimą koszt wynajęcia hali, którym się dzielimy po równo
        </div>
      </div>
      <div className="galeria_position">
        <Galeria dogo1={dogo1} dogo2={dogo2} />
        <Galeria dogo1={dogo2} dogo2={dogo1} />
      </div>
    </Wrapper>
  );
};

export default Wspolne;
