import React from "react";
import "./Enrollment.css";

const Entollment = (props) => {
  return (
    <>
      <div className="entollment__fixed" onClick={props.callback}>""</div>
      <div className="enrollment__absolute" onClick={null}>
        <div className="enrollment__text">
          Zapisy na wybrany kurs następują poprzez email. W wiadomości proszę
          podać wybrany kurs oraz date.
          <br></br>
          <br></br>
          <br></br>
          {props.enrollment}
        </div>
      </div>
    </>
  );
};

export default Entollment;
