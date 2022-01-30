import React, { useState, useEffect } from "react";
import "./trainings.css";
import TreningSection from "./TreningSection";
import zdj1 from './../../assets/p4.jpg';
import zdj2 from './../../assets/p6.jpg';

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
  const opis_indywid = "Prywatny trening w wybranym miejscu, tylko Ja, Ty i Twój pies. Trenujemy to co jest dla Ciebie wazne w tym momencie";
  const opis_grp = "Konkretny program i miejsce, 3-6 par. 8 lekcji po 60 min";
  const cena_indywid = ["1H = 100zl", "30min - 50zl"];
  const cena_grp = ["Caly kurs - 500zl"];


  return (
    <div className="training-wrapper">
      <TreningSection 
      trening={trening_indywid} 
      zdj={zdj1} 
      opis={opis_indywid} 
      tr_name="trening indywidualny"
      price={cena_indywid}
      />
      <TreningSection 
      trening={trening_grp} 
      zdj={zdj2} 
      opis={opis_grp} 
      tr_name="trening grupowy" 
      direct="1" 
      price={cena_grp}
      />
    </div>
  );
};
export default Trainings;
