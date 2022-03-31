import "./AboutMe.css";
import React from "react";
import ImageItem from "../../UI/ImageItem/ImageItem";
import dogo1 from "./../../assets/dyplom.jpg";
import Gallery from "../Treningi/Galeria";
import dorotka from "./../../assets/dorotka.jpg";
import piesio from "./../../assets/piesio.jpg";
import plaza from "./../../assets/plaza.png";
const AboutMe = () => {
  return (
    <div className="aboutme__wrapper">
      <div className="aboutme__main">
        <div className="aboutme__textarea">
          <div className="aboutme__title">Ja i Moje Psy</div>
          <div>JA:</div>
          <br></br>
          <div className="aboutme__name">Nazywam się Dorota Alewras.</div>
          <br></br>
          <div className="aboutme__text">
            Prowadzę szkołę sportowego posłuszeństwa Tak to się Obi, a poza tym
            współpracuję w charakterze trenera ze szczecińską Szkołą na 6 Łap.
            Tam zajmuję się posłuszeństwem na co dzień oraz przypadkami psów
            problematycznych, a zwłaszcza agresywnych.
          </div>
          <br></br>
          <div className="aboutme__text">
            Do zainteresowania psami i sportami kynologicznymi w pokrętny sposób
            trafiłam zaczynając od koni. Te zwierzęta to wciąż moja największa
            pasja i - jak tylko będę miała możliwość - zamierzam wrócić do
            jeździectwa. Tak czy inaczej, życie potoczyło się swoją ścieżką i
            doprowadziło mnie (przynajmniej na razie) do psiego świata.
          </div>
          <br></br>
          <div className="aboutme__text">
            Jeśli chodzi o kynologiczne aktywności, najbardziej interesuje mnie
            (to zresztą mało powiedziane) - UWAGA, NIESPODZIANKA - obedience!
            Zachwyca mnie poziom komunikacji i porozumienia między psem i
            przewodnikiem, którzy wspólnie trenują ten sport. Zresztą od dziecka
            marzyłam o psie, który będzie reagował na każdą moją komendę słowną
            lub gest (chciałam też kiedyś równie posłusznego dinozaura, ale
            najpierw ogarnę swoje bordery). Niektórym obedience kojarzy się ze
            ślepym posłuszeństwem oraz psami-robotami, ale wierzcie mi, że nie
            ma nic dalszego od prawdy. Żeby pies tak chętnie i bezwarunkowo
            wykonywał polecenia, jego motywacja musi być niesamowicie wysoka, a
            zaprawdę powiadam Wam - nie da się tego osiągnąć bez gigantycznego
            zaangażowania przewodnika, mnóstwa zabawy z psem i generalnie
            spędzania z nim wielu godzin tygodniowo, dając mu dużo od siebie. Co
            i jak dawać (i brać) - dowiesz się na treningach ze mną :)
          </div>
          <br></br>
          <div className="aboutme__text">
            Dodatkowo ciekawi mnie obrona oraz pasienie owiec, które robi
            niesamowitą robotę psychologiczną.
          </div>
          <br></br>
          <div className="aboutme__text">
            W tym miejscu warto zaznaczyć, że jestem z wykształcenia
            psychologiem i gdybym tylko mogła przeżyć kilka żyć jednocześnie, to
            zawodowo poszłabym również w tę stronę. Póki co psy. Ale moje
            zainteresowanie psychopatią nie jest bez znaczenia, jeśli spojrzeć
            na to, jaką rasę psów sobie upodobałam.
          </div>
          <div className="aboutme__text">
            A są to border collie. Wiem, zdumiewające - w świecie obedience ze
            świecą szukać bordera.
          </div>
          <div className="aboutme__text">
            Ja mam dwa, o których rozpisałam się w dedykowanych im sekcjach :)
          </div>
          <div className="aboutme__text">
            Poniżej znajdują się dowody mojej kynologicznej edukacji. Będę
            dokładać wszelkich starań, żeby takich zdjęć było coraz więcej, bo i
            my, i psy, i metody wciąż się zmieniają - trzeba być na bieżąco.
          </div>
        </div>
        <div className="aboutme__picturearea">
          <img src={dorotka} />
        </div>
      </div>
      <div className="aboutme__gallery">
        <Gallery dogo1={dogo1} dogo2={dogo1} />
        <Gallery dogo1={dogo1} dogo2={dogo1} />
      </div>
      <div className="aboutme__gallery">
        <Gallery dogo1={dogo1} dogo2={dogo1} />
        <Gallery dogo1={dogo1} dogo2={dogo1} />
      </div>
      <div className="aboutme__main">
        <div className="aboutme__textarea2">
          <div className="aboutme__title">RIVIA:</div>
          <div className="aboutme__name">
            ANIMA DE RIVIA Natalaland „Rivia” (dla przyjaciół Buba).
          </div>
          <br></br>
          <div className="aboutme__text">
            Przepiękna, mądra sunia, która miała być miszczem obedience, ale
            chyba nie będzie. Mój pierwszy pies nie licząc najwspanialszego
            jamnika Floyda, z którym się wychowałam. Tego bezskutecznie
            próbowałam nauczyć podawać łapę i kto wie - może to właśnie ta
            porażka dydaktyczna obudziła we mnie determinację do uprawiania
            sportowego posłuszeństwa?
          </div>
          <br></br>
          <div className="aboutme__text">
            Z Rivią amatorsko próbowałyśmy większości znanych mi aktywności, tj.
            obedience, pasienie, agility, frisbee, fitness. Generalnie we
            wszystkim jest dobra, ale póki co w niczym wybitna. Planuję dalej
            szukać czegoś, co będzie dla niej przyjemnością, ale nie odpuścimy
            sobie obi. Osiągniemy coś lub nie, ale będziemy walczyć i bawić się
            treningami. Na ten moment mamy na koncie start w zawodach
            treningowych, na których stwierdzono u niej „potencjał”.
          </div>
          <br></br>
          <div className="aboutme__text">
            Na pewno bardzo dużo mnie ten pies nauczył, pomimo umiarkowanego
            will to please i względnej bezproblemowości, ma swoje za uszami.
            Największym naszym wyzwaniem w pracy jest szybka eskalacja
            frustracji i ogólnie praca z emocjami w treningu, więc na ten temat
            już mam potężne doświadczenie dzięki niej.
          </div>
          <br></br>
          <div className="aboutme__text">
            Życiowo jest wspaniałym towarzyszem, bardzo delikatna z natury -
            prawdziwa dama. Zobaczymy, dokąd nas poniesie ta wspólna droga :)
          </div>
          <br></br>
        </div>
        <div className="aboutme__picturearea">
          <img src={plaza} />
        </div>
      </div>
      <div className="aboutme__gallery2">
        <Gallery dogo1={piesio} dogo2={piesio} />
        <Gallery dogo1={piesio} dogo2={piesio} />
      </div>
      <div className="aboutme__gallery">
        <Gallery dogo1={dogo1} dogo2={dogo1} />
        <Gallery dogo1={dogo1} dogo2={dogo1} />
      </div>
    </div>
  );
};

export default AboutMe;
