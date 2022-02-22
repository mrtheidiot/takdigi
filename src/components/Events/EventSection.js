import React, { useState } from "react";
import "./EventSection.css";
import Entollment from "./Entollment";

const EventSection = (props) => {
  const [enrolmentInfo, setEnrolmentInfo] = useState(false);
  const handleEnrolmentInfo = () => setEnrolmentInfo((prev) => (!prev));

  return (
    <>
    {enrolmentInfo && <Entollment callback={handleEnrolmentInfo}/>}
    <div className="event__main">
      <div className="event__title">
        <div className="event__heading">{props.title}</div>
        <div className="event__subtitle">{props.subtitle}</div>
      </div>
      <div className="event__date">{props.date}</div>
      <div className="event__links">
        <div>OPIS</div>
        <div onClick={handleEnrolmentInfo}>ZAPISY</div>
      </div>
    </div>
    </>
  );
};

export default EventSection;
