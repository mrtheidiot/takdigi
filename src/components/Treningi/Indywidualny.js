import React from "react";
import "./Treningi.css";
import dogo1 from "./../../assets/dogo1.jpg";
import ImageItem from "./../../UI/ImageItem/ImageItem";

import { Wrapper } from "./Wrapper";

const Indywidualny = () => {
  return (
    <Wrapper>
      <div className="trening_main">
        <h1>Trening Indywidualny</h1>
        <div className="trening_textarea">
          Zajęcia przeznaczone dla pojedynczego teamu przewodnik-pies
          niezależnie od poziomu zaawansowania.
        </div>
        <div className="trening_textarea">
          Miejsce spotkania wyznaczamy indywidualnie. Mam dostęp do ogrodzonego
          terenu poza miastem, ale możemy się umawiać w parku, na polanie czy
          gdziekolwiek będzie wygodnie dla obu stron. W grę wchodzi teren
          Szczecina oraz okolice w stronę Dobrej (Pilchowo, Bartoszewo itp.).
        </div>
        <div className="trening_textarea">
          Terminy i częstotliwość treningów również uzgadniamy indywidualnie, w
          zależności od możliwości i potrzeb. Rozpocząć możemy w każdej chwili.
        </div>
        <div className="trening_textarea">
          Można wykupić z góry pakiet 6 treningów, który jest ważny przez pół
          roku.
        </div>
        <div className="trening_textarea">
          Program nie jest z góry ustalony - trenujemy to, co jest Wam w danym
          momencie potrzebne (oczywiście w obrębie zagadnień obedience).
        </div>
        <div className="trening_textarea">Organizator: Tak to się Obi</div>
        <div className="trening_textarea">
          Koszt: 1 spotkanie (ok. 50 min) - 70 zł
        </div>
        <div className="trening_textarea">Pakiet 6 treningów: 380 zł</div>
      </div>
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

export default Indywidualny;
