import React from "react";
import { Link } from "react-router-dom";
import "./Treningi.css";
import { Wrapper } from "./Wrapper";
import dogo1 from "./../../assets/dogo1.jpg";
import dogo2 from "./../../assets/p1.jpg";
import Galeria from "./Galeria";

const Obedience_1 = () => {
  const trening = [
    "Zajęcia grupowe.",
    "Liczba teamów: 3-6.",
    "Psy muszą być minimum na poziomie kursów podstawowego posłuszeństwa.",
    "Miejsce spotkań: plac w centrum Szczecina (ul. Wąska 13 - teren Wydziału Nauk Ścisłych i Przyrodniczych US) oraz park Kasprowicza.",
    "Częstotliwość spotkań: 1x/tydzień.",
    "Liczba spotkań: 8.",
    "Program obejmuje zapoznanie się z ćwiczeniami z kl. 0 oraz elementami kl. 1.",
  ];
  return (
    <Wrapper>
      <h1>Obedience 1</h1>
      {trening.map((trening, index) => (
        <div className="trening_textarea" key={index}>
          {trening}
        </div>
      ))}
      <div className="trening_textarea">
        Nabory są organizowane regularnie - o najbliższy kurs można zapytać
        mnie, spojrzeć w nasz <Link to="/kalendarz">Kalendarz</Link>, śledzić{" "}
        <a href="https://www.google.pl">Kalendarz szkoleń</a> lub{" "}
        <a href="https://www.facebook.com">fb szkoły</a>.
      </div>
      <div className="trening_textarea">Organizator: Szkoła na 6 Łap</div>
      <div className="trening_textarea">Koszt: 8 spotkań - ?zł</div>
      <br></br>
      <div className="trening_textarea">WIĘCEJ INFORMACJI WKRÓTCE</div>
    </Wrapper>
  );
};

export default Obedience_1;
