import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = (props) => {
  const linkColor = [
    { classTitle: "button_link-1", id: 1 },
    { classTitle: "button_link-2", id: 2 },
    { classTitle: "button_link-3", id: 3 },
  ];

  const { classTitle } = Object.values(linkColor).filter(
    (classTitle) => classTitle.id === props.button.preLink
  )[0];

  return props.button.internal === 1 ? (
    <div className="button__main">
      <Link to={props.button.link}>
        <div className={`button__sub ${classTitle}`}>
          {props.button.category}
        </div>
      </Link>
    </div>
  ) : (
    <div className="button__main">
      <a href={props.button.link}>
        <div className={`button__sub ${classTitle}`}>
          {props.button.category}
        </div>
      </a>
    </div>
  );
};

export default Button;
