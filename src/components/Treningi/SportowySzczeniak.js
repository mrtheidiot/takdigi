import React from "react";
import { Link } from "react-router-dom";
import "./Treningi.css";
import { Wrapper } from "./Wrapper";
import dogo1 from "./../../assets/dogo1.jpg";
import dogo2 from "./../../assets/p1.jpg";
import Galeria from "./Galeria";

const SportowySzczeniak = () => {
  const trening = [
    "Zajęcia grupowe przeznaczone dla szczeniąt w wieku do 5 miesięcy.",
    'Jest to kurs socjalizacyjny i ogólnorozwojowy z elementami posłuszeństwa. Na kurs "Sportowy Szczeniak" zapraszamy Opiekunów szczeniąt, którzy w przyszłości planują spróbować swoich sił w psich sportach, głównie w posłuszeństwie sportowym.',
    "Miejsce spotkań: plac w centrum Szczecina (ul. Wąska 13 - teren Wydziału Nauk Ścisłych i Przyrodniczych US) oraz park Kasprowicza.",
    "Częstotliwość spotkań 1x/tydzień.",
    "Liczba spotkań: 8.",
  ];

  const zajecia = [
      "- podstawy pracy z klikerem,",
      "- nauka skupienia uwagi na opiekunie,",
      "- podstawowe komendy,",
      "- luźna smycz,",
      "- ćwiczenia budujące pewność siebie i świadomość własnego ciała,",
      "- ćwiczenia stymulujące psie zmysły,",
      "- nauka opanowania emocji przy innych psach,",
      "- sygnały nagród,",
      "- rezygnacja,",
      "- podążanie,",
      "- przynoszenie zabawki,",
      "- sztuczki rozgrzewkowe.",
  ]

                        

  return (
    <Wrapper>
      <h1>Posłuszeństwo z elementami Obedience</h1>
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

    </Wrapper>
  );
};

export default SportowySzczeniak;
