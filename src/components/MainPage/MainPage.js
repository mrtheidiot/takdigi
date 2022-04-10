import React from "react";
import "./MainPage.css";
import MainPageSection from "./MainPageSection";
import MainPageSection2 from "./MainPageSection2";
import Banner from "../Banner/Banner";


export const MainPage = () => {
  const sectionContent = [
    {
      buttons: [
        {
          preLink: 2,
          category: "Facebook",
          internal: 0,
          link: "https://www.facebook.com/PiesPotrafi",
        },
        { preLink: 1, category: "PiesPotrafi.pl", internal: 0, link: "https://www.piespotrafi.pl" },
      ],
      text1:
        "Niektóre kursy i wydarzenia prowadzę z ramienia szkoły, z którą współpracuję od 2018 roku – Szkoła na 6 Łap Piespotrafi.pl w Szczecinie. Tam zobaczycie mnie jak prowadzę zajęcia grupowe z posłuszeństwa na co dzień, przedszkola dla papisiów oraz konsultacje i treningi indywidualne w przypadku problemów na linii właściciel-pies.",
    },
    {
      buttons: [
        {
          preLink: 3,
          category: "Asortyment",
          internal: 1,
          link: "/asortyment",
        },
      ],
      text1:
        "Na swojej drodze budowania doświadczenia zebrałam wnioski i stworzyłam swój mały warsztat. Można zatem za moim pośrednictwem zaopatrzyć się w niezbędne (według mnie) akcesoria do treningu.",
    },
    {
      buttons: [
        {
          preLink: 1,
          category: "Kalendarz",
          internal: 1,
          link: "/kalendarz",
        },
      ],
      text1:
        "Kursów do wyboru jest mnóstwo, aż można się pogubić. Wszystkie nadchodzące wydarzenia zawsze będą ze stosownym wyprzedzeniem dodane do kalendarza. Podam też informacje kto jest organizatorem danego wydarzenia. Uwaga: w zależności od kursu zapisy są dokonywane na inne sposoby – czytaj uważnie, tam będzie wszystko napisane. Nawet będą linki do zapisów! Pomyślałam o wszystkim.",
    },
    {
      buttons: [
        {
          preLink: 3,
          category: "Kontakt",
          internal: 1,
          link: "/kontakt",
        },
      ],
      text1:
        "Jeśli coś budzi Twoje wątpliwości lub nie wiesz na jaki rodzaj kursu powinieneś się wybrać – napisz do mnie lub zadzwoń. Ale lepiej napisz, sms albo wiadomość na fb; tylko się nie denerwuj, jeśli chwilę poczekasz - jak mam dużo pracy to odpisuję z opóźnieniem.",
    },
  ];

  return (
    <>
      <Banner id={5} />
      <div className="mainpage__main">
        <div className="mainpage__heading">
          Witaj w Tak to się Obi! Przedstawię Ci stronę, żebyś wiedział o co tu
          w ogóle chodzi:
        </div>
        <MainPageSection2 />
        {sectionContent.map((section, index) => (
          <MainPageSection
            text1={section.text1}
            text2={section.text2}
            buttons={section.buttons}
            key={index}
          />
        ))}
        <div className="mainpage__heading">Do zobaczenia!</div>
      </div>
    </>
  );
};

export default MainPage;
