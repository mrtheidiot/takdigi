import React from "react";
import "./MainPageSection.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const MainPageSection2 = () => {
  const buttons = [
    {
      preLink: 1,
      category: "Treningi",
      internal: 1,
      link: "/treningi",
    },
  ];
  const text2 =
    "Prowadzę treningi indywidualne oraz grupowe teamów na różnym poziomie zaawansowania – tym zajmuję się w ramach mojej szkoły, która nazywa się Tak to się Obi.";

  return (
    <div className="mainpagesection__main">
      <div className="mainpagesection__text">
        <div>Nazywam się Dorota Alewras (więcej o mnie i o moich psach <Link to="/omnie">tutaj</Link>). Jestem przede wszystkim trenerem Obedience, czyli sportowego posłuszeństwa. Skoro tu trafiłeś, pewnie wiesz mniej więcej co to za sport, więc nie będę się tu wdawać w szczegóły. Jesteś swój.</div>
        <div>{text2}</div>
      </div>
      <div className="mainpagesection__links">
        {buttons.map((button, index) => (
          <Button button={button} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MainPageSection2;
