import React, { useState, useEffect } from "react";
import "./Trainings.css";
import TrainingSection from "./TrainingSection";
import piesek from "./../../assets/p2.jpg";
import Banner from "../Banner/Banner";

const Trainings = () => {
  const [trainings, setTrainings] = useState([]);
  const getTrainings = async () => {
    const response = await fetch("/api/treningi/");
    const data = await response.json();
    setTrainings(data);
  };
  useEffect(() => {
    getTrainings();
  }, []);

  return (
    <>
      <Banner id={1} />
      <div className="training-wrapper">
        {trainings.map((trening, index) => (
          <TrainingSection
            title={trening.title}
            description={trening.description}
            image={piesek}
            ifReverse={index % 2 === 0 ? 0 : 1}
            key={index}
          />
        ))}
      </div>
    </>
  );
};
export default Trainings;
