import React, { useState, useEffect } from "react";
import "./Trainings.css";

const Trainings = () => {
  const [trainings, setTrainings] = useState([]);
  const getTrainings = async() => {
    const response = await fetch ("/api/treningi/");
    const data = await response.json();
    setTrainings(data);
  }
  useEffect(()=>{
    getTrainings();
  },[])

  return (
    <div className="training-wrapper">
      {trainings.map((trening, index) => (
        <div>{index%2 === 0 ? "yes" : "no"}</div>
      ))}
    </div>
  );
};
export default Trainings;
