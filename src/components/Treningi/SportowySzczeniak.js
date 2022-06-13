import React from "react";
import { Link } from "react-router-dom";
import "./Treningi.css";
import { Wrapper } from "./Wrapper";
import dogo1 from "./../../assets/dogo1.jpg";
import dogo2 from "./../../assets/p1.jpg";
import Galeria from "./Galeria";
import ImageItem from "./../../UI/ImageItem/ImageItem";

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
  ];
  const zapisy = [
    "Zapisy i pytania: biuro@piespotrafi.pl",
    "W treści maila podaj:",
    "- imię i nazwisko,",
    "- rasę, imię i wiek psa; w przypadku mieszańców prosimy o podanie gabarytów,",
    "- czy pies sprawia jakieś problemy z zachowaniem (krótki opis),",
    "- numer telefonu,",
    '- koniecznie dopiskiem "Sportowy Szczeniak Szczecin”.',
  ];

  return (
    <Wrapper>
      <h1>Sportowy Szczeniak</h1>
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
      <div className="opis_kursu">
        W programie:
        <br></br>
        <br></br>- teoretyczne omówienie najczęstszych problemów przy wychowaniu
        szczeniaka, technik szkoleniowych, metod oswajania szczeniaka z
        zabiegami pielęgnacyjnymi, samotnym pozostawaniem w domu, jazdą
        samochodem etc. (forma on-line - webinar); omówenie podstaw treningu
        kennelowego i nauki wyciszenia.
      </div>
      <br></br>
      <div className="opis_kursu">Zajęcia praktyczne:</div>
      <br></br>
      {zajecia.map((zajecia, index) => (
        <div className="opis_kursu" key={index}>
          {zajecia}
        </div>
      ))}
      <br></br>
      <div className="opis_kursu">
        Cena kursu: 550zł (1 spotkanie teoretyczne on-line i 7 spotkań
        praktycznych w grupie psów w centrum Szczecina) Pierwsze spotkanie
        (webinar on-line) trwa ok 1.5 godziny, praktyczne spotkania trwają ok.
        50 minut.
      </div>
      <div className="trening_textarea">Organizator: Szkoła na 6 Łap</div>
      <div className="trening_textarea">Koszt: 8 spotkań - 550zł</div>
      <div className="galeria_position">
        <ImageItem img={dogo1} alt="alt" />
        <ImageItem img={dogo1} alt="alt" />
        <ImageItem img={dogo1} alt="alt" />
      </div>
      <div className="galeria_position">
        <ImageItem img={dogo1} alt="alt" />
        <ImageItem img={dogo1} alt="alt" />
        <ImageItem img={dogo1} alt="alt" />
      </div>
    </Wrapper>
  );
};

export default SportowySzczeniak;
