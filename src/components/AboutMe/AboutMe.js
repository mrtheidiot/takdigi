import React from "react";
import classes from "./AboutMe.module.css";
import ImageItem from "../../UI/ImageItem/ImageItem";
import dorotka from "./../../assets/dorotka.jpg";
import rivia from "./../../assets/plaza.png";
import Banner from "../Banner/Banner";

import d1 from "./../../assets/dyplomy/d1.jpeg";
import d2 from "./../../assets/dyplomy/d2.jpg";
import d3 from "./../../assets/dyplomy/d3.jpg";
import d4 from "./../../assets/dyplomy/d4.jpg";
import d5 from "./../../assets/dyplomy/d5.jpg";
import d6 from "./../../assets/dyplomy/d6.jpg";
import d7 from "./../../assets/dyplomy/d7.png";
import d8 from "./../../assets/dyplomy/d8.jpg";
import d9 from "./../../assets/dyplomy/d9.png";
import d10 from "./../../assets/dyplomy/d10.jpg";

import r1 from "./../../assets/rivia/r1.jpg";
import r2 from "./../../assets/rivia/r2.jpg";
import r3 from "./../../assets/rivia/r3.jpg";
import r4 from "./../../assets/rivia/r4.jpg";
import r5 from "./../../assets/rivia/r5.jpg";
import r6 from "./../../assets/rivia/r6.jpg";
import r7 from "./../../assets/rivia/r7.jpg";
import r8 from "./../../assets/rivia/r8.png";
import r9 from "./../../assets/rivia/r9.png";
import r10 from "./../../assets/rivia/r10.png";

import j1 from "./../../assets/joker/j1.jpg";
import j2 from "./../../assets/joker/j2.jpg";
import j3 from "./../../assets/joker/j3.jpg";
import j4 from "./../../assets/joker/j4.jpg";
import j5 from "./../../assets/joker/j5.jpg";
import j6 from "./../../assets/joker/j6.jpg";
import j7 from "./../../assets/joker/j7.jpg";
import j8 from './../../assets/joker/j8.jpg';

const AboutMe = () => {
  return (
    <>
      <Banner id={6} />
      <div className={classes.wrapper}>
        <div className={classes.naglowek}>
          <div className={classes.nag1}>JA:</div>
          {/* <div className={classes.nag2}>Ja:</div> */}
          <div className={classes.nag3}>Nazywam sie Dorota Alewras</div>
        </div>
        <br></br>
        <div className={classes.content_wrapper}>
          <div className={classes.content_text}>
            <div className={classes.text}>
              Prowadz?? szko???? sportowego pos??usze??stwa Tak to si?? Obi, a poza
              tym wsp????pracuj?? w charakterze trenera ze szczeci??sk?? Szko???? na 6
              ??ap. Tam zajmuj?? si?? pos??usze??stwem na co dzie?? oraz przypadkami
              ps??w problematycznych, a zw??aszcza agresywnych.
            </div>
            <br></br>
            <div className={classes.text}>
              Do zainteresowania psami i sportami kynologicznymi w pokr??tny
              spos??b trafi??am zaczynaj??c od koni. Te zwierz??ta to wci???? moja
              najwi??ksza pasja i - jak tylko b??d?? mia??a mo??liwo???? - zamierzam
              wr??ci?? do je??dziectwa. Tak czy inaczej, ??ycie potoczy??o si?? swoj??
              ??cie??k?? i doprowadzi??o mnie (przynajmniej na razie) do psiego
              ??wiata.
            </div>
            <br></br>
            <div className={classes.text}>
              Je??li chodzi o kynologiczne aktywno??ci, najbardziej interesuje
              mnie (to zreszt?? ma??o powiedziane) - UWAGA, NIESPODZIANKA -
              obedience! Zachwyca mnie poziom komunikacji i porozumienia mi??dzy
              psem i przewodnikiem, kt??rzy wsp??lnie trenuj?? ten sport. Zreszt??
              od dziecka marzy??am o psie, kt??ry b??dzie reagowa?? na ka??d?? moj??
              komend?? s??own?? lub gest (chcia??am te?? kiedy?? r??wnie pos??usznego
              dinozaura, ale najpierw ogarn?? swoje bordery). Niekt??rym obedience
              kojarzy si?? ze ??lepym pos??usze??stwem oraz psami-robotami, ale
              wierzcie mi, ??e nie ma nic dalszego od prawdy. ??eby pies tak
              ch??tnie i bezwarunkowo wykonywa?? polecenia, jego motywacja musi
              by?? niesamowicie wysoka, a zaprawd?? powiadam Wam - nie da si?? tego
              osi??gn???? bez gigantycznego zaanga??owania przewodnika, mn??stwa
              zabawy z psem i generalnie sp??dzania z nim wielu godzin
              tygodniowo, daj??c mu du??o od siebie. Co i jak dawa?? (i bra??) -
              dowiesz si?? na treningach ze mn?? :)
            </div>
            <br></br>
            <div className={classes.text}>
              Dodatkowo ciekawi mnie obrona oraz pasienie owiec, kt??re robi
              niesamowit?? robot?? psychologiczn??.
            </div>
            <br></br>
            <div className={classes.text}>
              W tym miejscu warto zaznaczy??, ??e jestem z wykszta??cenia
              psychologiem i gdybym tylko mog??a prze??y?? kilka ??y?? jednocze??nie,
              to zawodowo posz??abym r??wnie?? w t?? stron??. P??ki co psy. Ale moje
              zainteresowanie psychopati?? nie jest bez znaczenia, je??li spojrze??
              na to, jak?? ras?? ps??w sobie upodoba??am.
            </div>
            <div className={classes.text}>
              A s?? to border collie. Wiem, zdumiewaj??ce - w ??wiecie obedience ze
              ??wiec?? szuka?? bordera.
            </div>
            <div className={classes.text}>
              Ja mam dwa, o kt??rych rozpisa??am si?? w dedykowanych im sekcjach :)
            </div>
            <div className={classes.text}>
              Poni??ej znajduj?? si?? dowody mojej kynologicznej edukacji. B??d??
              dok??ada?? wszelkich stara??, ??eby takich zdj???? by??o coraz wi??cej, bo
              i my, i psy, i metody wci???? si?? zmieniaj?? - trzeba by?? na bie????co.
            </div>
          </div>
          <div className={classes.content_picture}>
            <img src={dorotka} />
          </div>
        </div>
        <div className={classes.gallery__wrapper}>
          <div className={classes.gallery}>
            <ImageItem img={d7} alt="alt" />
            <ImageItem img={d2} alt="alt" />
            <ImageItem img={d3} alt="alt" />
            <ImageItem img={d8} alt="alt" />
            <ImageItem img={d9} alt="alt" />
          </div>
          <div className={classes.gallery}>
            <ImageItem img={d6} alt="alt" />
            <ImageItem img={d1} alt="alt" />

            <ImageItem img={d4} alt="alt" />
            <ImageItem img={d5} alt="alt" />
            <ImageItem img={d10} alt="alt" />
          </div>
        </div>
        <hr className={classes.hr1}></hr>
        <div className={classes.naglowek}>
          <div className={classes.nag1}>RIVIA:</div>
          <div className={classes.nag2}></div>
          <br></br>
          <div className={classes.nag3}>
            ANIMA DE RIVIA Natalaland ???Rivia??? (dla przyjaci???? Buba).
          </div>
        </div>
        <br></br>
        <div className={classes.content_wrapper}>
          <div className={classes.content_text}>
            <div className={classes.text}>
              Przepi??kna, m??dra sunia, kt??ra mia??a by?? miszczem obedience, ale
              chyba nie b??dzie. M??j pierwszy pies nie licz??c najwspanialszego
              jamnika Floyda, z kt??rym si?? wychowa??am. Tego bezskutecznie
              pr??bowa??am nauczy?? podawa?? ??ap?? i kto wie - mo??e to w??a??nie ta
              pora??ka dydaktyczna obudzi??a we mnie determinacj?? do uprawiania
              sportowego pos??usze??stwa?
            </div>
            <br></br>
            <div className={classes.text}>
              Z Rivi?? amatorsko pr??bowa??y??my wi??kszo??ci znanych mi aktywno??ci,
              tj. obedience, pasienie, agility, frisbee, fitness. Generalnie we
              wszystkim jest dobra, ale p??ki co w niczym wybitna. Planuj?? dalej
              szuka?? czego??, co b??dzie dla niej przyjemno??ci??, ale nie odpu??cimy
              sobie obi. Osi??gniemy co?? lub nie, ale b??dziemy walczy?? i bawi??
              si?? treningami. Na ten moment mamy na koncie start w zawodach
              treningowych, na kt??rych stwierdzono u niej ???potencja?????.
            </div>
            <br></br>
            <div className={classes.text}>
              Na pewno bardzo du??o mnie ten pies nauczy??, pomimo umiarkowanego
              will to please i wzgl??dnej bezproblemowo??ci, ma swoje za uszami.
              Najwi??kszym naszym wyzwaniem w pracy jest szybka eskalacja
              frustracji i og??lnie praca z emocjami w treningu, wi??c na ten
              temat ju?? mam pot????ne do??wiadczenie dzi??ki niej.
            </div>
            <br></br>
            <div className={classes.text}>
              ??yciowo jest wspania??ym towarzyszem, bardzo delikatna z natury -
              prawdziwa dama. Zobaczymy, dok??d nas poniesie ta wsp??lna droga :)
            </div>
            <br></br>
          </div>
          <div className={classes.content_picture}>
            <img src={rivia} />
          </div>
        </div>
        <div className={classes.gallery__wrapper}>
          <div className={classes.gallery}>
            <ImageItem img={r5} alt="alt" />
            <ImageItem img={r2} alt="alt" />
            <ImageItem img={r3} alt="alt" />
            <ImageItem img={r4} alt="alt" />
            <ImageItem img={r9} alt="alt" />
          </div>
          <div className={classes.gallery}>
            <ImageItem img={r1} alt="alt" />

            <ImageItem img={r6} alt="alt" />
            <ImageItem img={r7} alt="alt" />
            <ImageItem img={r8} alt="alt" />
            <ImageItem img={r10} alt="alt" />
          </div>
        </div>
        <hr className={classes.hr1}></hr>
        <div className={classes.naglowek}>
          <div className={classes.nag1}>JOKER:</div>
          <div className={classes.nag2}></div>
          <br></br>
          <div className={classes.nag3}>
            F???WHY SO SERIOUS Sonic Workaholic ???Joker???.
          </div>
        </div>
        <br></br>
        <div className={classes.content_wrapper}>
          <div className={classes.content_text}>
            <div className={classes.text}>
              Urodzony w czerwcu 2021 ??? czyli pandemiczny pies. Mimo to nie
              wykazuje objaw??w l??ku separacyjnego ;) Pochodzi z linii o
              predyspozycjach i osi??gni??ciach w agility oraz obedience. Roboczo
              nazywany przeze mnie borderow?? malin??, bo zachowuje si??
              wielokrotnie jak klasyczny belg.
            </div>
            <br></br>
            <div className={classes.text}>
              Piekielnie (to s??owo dobrane bardzo ??wiadomie) inteligentny pies,
              kt??ry jak najbardziej ma mo??liwo??ci na zostanie miszczem
              obedience. Agility pewnie te??, cho?? to nie moja bajka, wi??c na
              tych torach pewnie nie b??dziemy cz??stymi go????mi. Ale spr??bowa?? nie
              zaszkodzi, zw??aszcza, ??e ten piesek jest wiecznie gotowy na ka??d??
              zaproponowan?? aktywno????. Na ten moment jest to bardzo m??ody pies
              (ma 10 miesi??cy w chwili, w kt??rej pisz?? ten tekst), wi??c na razie
              nie pozna?? zbyt wielu dyscyplin. Do agility si?? szykujemy z
              czystej ciekawo??ci, obedience uprawiamy p??ki co w warunkach
              domowych z my??l?? o pierwszych startach treningowych ??? ale tu od
              pierwszej sesji by??o dla mnie jasne, ??e je??li tego nie popsuj?? to
              ch??opak mo??e zaj???? naprawd?? wysoko. Dodatkowo w najbli??szej
              przysz??o??ci planuj?? spr??bowa?? naszych wsp??lnych si?? w obronie a
              treningi pasienia ju?? wpisa??am w kalendarz jako regularn??
              aktywno????. W tym te?? jest bardzo obiecuj??cy.
            </div>
            <br></br>
            <div className={classes.text}>
              Pies o niezwykle atletycznej, lekkiej budowie, imponuj??co szybki,
              zwrotny, a przy tym my??l??cy. To mo??e by?? pies mojego ??ycia. Na co
              dzie??, poza prac?? i spacerem, psa prawie nie ma ??? ??pi w domu wiele
              godzin, od pierwszego dnia wchodzi?? do klatki i od razu si?? k??ad??,
              nie ma z nim absolutnie ??adnych problem??w.
            </div>
            <br></br>
            <div className={classes.text}>
              Na dworze ju?? nieco inaczej to wygl??da ??? przez swoj?? inteligencj??
              i szybkie reakcje na bod??ce ??ycie w centrum miasta jest dla niego
              bardzo kosztowne. W pierwszym odruchu jest ostro??ny wobec niemal
              ka??dego obiektu, natomiast nie zamyka si?? w tych obawach, a po
              chwili zw??tpienia podchodzi z ciekawo??ci?? sprawdzi?? z czym ma do
              czynienia. Wra??liwo???? na presj?? jak dla mnie idealna ??? odpowiada
              szybko na nawet delikatn?? presj??, ale nie peszy go to, po prostu
              b??yskawicznie dopasowuje swoje zachowanie do moich sygna????w i
              natychmiast jest gotowy do dalszej pracy. Zdecydowanie pies
              jednego w??a??ciciela. Na t?? chwil?? ??? odpuka??!! ??? zdrowy jak rydz,
              stawy idealne, a przy tym pies jest proporcjonalny, silny,
              umi????niony i pi??kny :) opinia rzecz jasna obiektywna!)
            </div>
            <br></br>
            <div className={classes.text}>
              W przysz??o??ci planuj?? wyrobi?? mu papiery hodowlane.
            </div>
          </div>
          <div className={classes.content_picture}>
            <img src={j8} />
          </div>
        </div>
        <div className={classes.gallery__wrapper}>
          <div className={classes.gallery}>
            <ImageItem img={j1} alt="alt" />
            <ImageItem img={j2} alt="alt" />
            <ImageItem img={j3} alt="alt" />
            <ImageItem img={j4} alt="alt" />
          </div>
          <div className={classes.gallery}>
            <ImageItem img={j5} alt="alt" />
            <ImageItem img={j6} alt="alt" />
            <ImageItem img={j7} alt="alt" />
            <ImageItem img={j7} alt="alt" />
          </div>
        </div>
        <hr className={classes.hr1}></hr>
      </div>
    </>
  );
};

export default AboutMe;
