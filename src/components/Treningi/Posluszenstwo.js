import React from "react";
import { Link } from "react-router-dom";
import "./Treningi.css";
import { Wrapper } from "./Wrapper";
import dogo1 from "./../../assets/dogo1.jpg";
import dogo2 from "./../../assets/p1.jpg";
import Galeria from "./Galeria";

const Posluszenstwo = () => {
  var link = `${(<a href="www.google.pl">Kalendarz</a>)}`;
  const trening = [
    "Zajęcia grupowe.",
    "Liczba teamów: 3-6.",
    "Psy muszą być minimum na poziomie kursów podstawowego posłuszeństwa.",
    "Miejsce spotkań: plac w centrum Szczecina (ul. Wąska 13 - teren Wydziału Nauk Ścisłych i Przyrodniczych US) oraz park Kasprowicza.",
    "Częstotliwość spotkań: 1x/tydzień.",
    "Liczba spotkań: 8.",
    "Program obejmuje zapoznanie się z ćwiczeniami z kl. 0 oraz elementami kl. 1.",
  ];

  const program = [
    "- doskonalenie i utrwalanie komend z zakresu posłuszeństwa podstawowego,",
    "- trening w rozproszeniach,",
    "- dostawienie do nogi i chodzenie przy nodze,",
    "- przywoływanie w rozproszeniach,",
    "- zostawanie w rozproszeniach i różnych okolicznościach,",
    "- zmiany pozycji z dystansu,",
    "- pozycje z marszu,",
    "- trzymanie przedmiotu w pysku,",
    "- target ciągły,",
    "- target łapami,",
    "- wysyłanie psa do targetu,",
    "- obieganie pachołka,",
    "- doskonalenie skupienia i opanowania emocji przy innych psach,",
    "- doskonalenie mijania innych psów,",
    "- doskonalenie zostawania w grupie.",
  ];

  const cena = [
    "Cena: 550zł",
    "Cena zawiera:",
    "- uczestnictwo w 8 lekcjach w ramach kursu,",
    "- pamiątkowy dyplom,",
    "- każdy Uczestnik otrzymuje szarpak dla psa (jako pomoc na szkoleniu i formę nagrody w czasie treningu) oraz drewniany gryf do nauki trzymania;",
  ];

  const spotkania = [
    "Spotkania trwają ok. 50 min.",
    "Zajęcia przewidziane są na soboty.",
    "Kurs przeznaczony dla psów, które ukończyły szkolenie z zakresu posłuszeństwa podstawowego.",
  ];
  const zapisy = [
    "Zapisy i pytania: biuro@piespotrafi.pl",
    "W treści maila podaj:  - imię i nazwisko,  - rasę, imię i wiek psa; w przypadku mieszańców prosimy o podanie gabarytów,",
    "- czy pies sprawia jakieś problemy z zachowaniem (krótki opis),",
    "- numer telefonu,",
    '- koniecznie dopiskiem "II stopień z el. Obi Szczecin”.',
  ];
  const uczestnicy = [
    "Uczestnicy powinni mieć ze sobą:",
    "- dużo smakołyków dla psa, najlepiej różnego rodzaju,",
    "- linkę treningową / długą smycz,",
    "- wodę i miskę;",
    "- opcjonalnie kocyk lub ręcznik, na którym pies może odpocząć;",
  ];

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

      <div className="opis_kursu">W programie:</div>
      <br></br>
      <div className="opis_kursu">
        {program.map((program, index) => (
          <div key={index}>{program}</div>
        ))}
      </div>
      <br></br>
      <div className="opis_kursu">
        {cena.map((cena, index) => (
          <div key={index}>{cena}</div>
        ))}
      </div>
      <br></br>
      <div className="opis_kursu">
        {spotkania.map((spotkanie, index) => (
          <div key={index}>{spotkanie}</div>
        ))}
      </div>
      <br></br>
      <div className="opis_kursu">
        {zapisy.map((zapisy, index) => (
          <div key={index}>{zapisy}</div>
        ))}
      </div>
      <br></br>
      <div className="opis_kursu">
        {uczestnicy.map((uczestnik, index) => (
          <div key={index}>{uczestnik}</div>
        ))}
      </div>
      <div className="trening_textarea">Organizator: Szkoła na 6 Łap</div>
      <div className="trening_textarea">Koszt: 8 spotkań - 550zł</div>
      <Galeria dogo1={dogo1} dogo2={dogo2} />
    </Wrapper>
  );
};

export default Posluszenstwo;
