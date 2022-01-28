import React, { useState, useEffect } from "react";
import "./trainings.css";
import TreningSection from "./TreningSection";

const Trainings = () => {
  const [trainings, setTrainings] = useState([]);
  useEffect(() => {
    getTrenings();
  }, []);

  const getTrenings = async () => {
    const respone = await fetch("api/treningi/");
    const data = await respone.json();
    setTrainings(data);
  };
  const trening_indywid = trainings.filter((trening) => trening.rodzaj === 1);
  const trening_grp = trainings.filter((trening) => trening.rodzaj === 2);

  return (
    <div className="training-wrapper">
      <TreningSection trening={trening_indywid} tr_name="trening indywidualny"/>
      <TreningSection trening={trening_grp} tr_name="trening grupowy"/>
    </div>
  );
};
export default Trainings;
