import React from "react";
import "./MainPageSection.css";
import Button from "../Button/Button";

export const MainPageSection = (props) => {

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
