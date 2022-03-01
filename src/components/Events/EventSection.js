import React, { useState } from "react";
import "./EventSection.css";
// import './../../fonts/nasalization-rg.otf';
import Entollment from "./Entollment";

const EventSection = (props) => {
  const [enrollmentInfo, setEnrollmentInfo] = useState(false);
  const handleEnrolmentInfo = () => setEnrollmentInfo((prev) => !prev);

  return (
    <>
      {enrollmentInfo && (
        <Entollment
          enrollment={props.enrollment}
          callback={handleEnrolmentInfo}
        />
      )}
      <div className="event_position">

      <div className="event__main">
        <div className="event__title">
          <div className="event__heading">{props.title}</div>
          <div className="event__subtitle">{props.subtitle}</div>
        </div>
        <div className="event__info">
          <div className="event__date">{props.date}</div>
            <div>OPIS</div>
            <div onClick={handleEnrolmentInfo}>ZAPISY</div>
        </div>
      </div>
      </div>
    </>
  );
};

export default EventSection;
