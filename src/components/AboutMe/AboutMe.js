import React from "react";
import classes from "./AboutMe.module.css";
import ImageItem from "../../UI/ImageItem/ImageItem";
import dogo1 from "./../../assets/dyplom.jpg";
import Gallery from "../Treningi/Galeria";
import dorotka from "./../../assets/dorotka.jpg";
import piesio from "./../../assets/piesio.jpg";
import plaza from "./../../assets/plaza.png";

const AboutMe = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.naglowek}>
        <div className={classes.nag1}>Ja i Moje Psy</div>
        <div className={classes.nag2}>Ja:</div>
        <div className={classes.nag3}>Nazywam sie Dorota Alewras</div>
      </div>
      <br></br>
      <div className={classes.content_wrapper}>
        <div className={classes.content_text}>
          <div className={classes.text}>
            Prowadzę szkołę sportowego posłuszeństwa Tak to się Obi, a poza tym
            współpracuję w charakterze trenera ze szczecińską Szkołą na 6 Łap.
            Tam zajmuję się posłuszeństwem na co dzień oraz przypadkami psów
            problematycznych, a zwłaszcza agresywnych.
          </div>
          <br></br>
          <div className={classes.text}>
            Do zainteresowania psami i sportami kynologicznymi w pokrętny sposób
            trafiłam zaczynając od koni. Te zwierzęta to wciąż moja największa
            pasja i - jak tylko będę miała możliwość - zamierzam wrócić do
            jeździectwa. Tak czy inaczej, życie potoczyło się swoją ścieżką i
            doprowadziło mnie (przynajmniej na razie) do psiego świata.
          </div>
          <br></br>
          <div className={classes.text}>
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
          <div className={classes.text}>
            Dodatkowo ciekawi mnie obrona oraz pasienie owiec, które robi
            niesamowitą robotę psychologiczną.
          </div>
          <br></br>
          <div className={classes.text}>
            W tym miejscu warto zaznaczyć, że jestem z wykształcenia
            psychologiem i gdybym tylko mogła przeżyć kilka żyć jednocześnie, to
            zawodowo poszłabym również w tę stronę. Póki co psy. Ale moje
            zainteresowanie psychopatią nie jest bez znaczenia, jeśli spojrzeć
            na to, jaką rasę psów sobie upodobałam.
          </div>
          <div className={classes.text}>
            A są to border collie. Wiem, zdumiewające - w świecie obedience ze
            świecą szukać bordera.
          </div>
          <div className={classes.text}>
            Ja mam dwa, o których rozpisałam się w dedykowanych im sekcjach :)
          </div>
          <div className={classes.text}>
            Poniżej znajdują się dowody mojej kynologicznej edukacji. Będę
            dokładać wszelkich starań, żeby takich zdjęć było coraz więcej, bo i
            my, i psy, i metody wciąż się zmieniają - trzeba być na bieżąco.
          </div>
        </div>
        <div className={classes.content_picture}>
          <img src={dorotka} />
        </div>
        <div className={classes.gallery}></div>
      </div>
    </div>
  );
};

export default AboutMe;
