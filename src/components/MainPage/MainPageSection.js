import React from "react";
import "./MainPageSection.css";
import Button from "../Button/Button";

export const MainPageSection = (props) => {
  // const linkColor = [
  //   { classTitle: "mainsectionlinkcss-1", id: 1 },
  //   { classTitle: "mainsectionlinkcss-2", id: 2 },
  //   { classTitle: "mainsectionlinkcss-3", id: 3 },
  // ];

  // const { classTitle } = Object.values(linkColor).filter(
  //   (classTitle) => classTitle.id === props.preLink
  // )[0];
  console.log(props.buttons[0])
  return (
    <div className="mainpagesection__main">
      <div className="mainpagesection__text">
        <div>{props.text1}</div>
        <div>{props.text2}</div>
      </div>
      <div className="mainpagesection__links">
        {props.buttons.map((button,index) => 
          <Button 
            button={button}
            key={index}
          />
        )}
      </div>
    </div>
  );
};

export default MainPageSection;
