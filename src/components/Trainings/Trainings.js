import TrainingSection from "./TrainingSection";
import piesek from "./../../assets/p2.jpg";
import Banner from "../Banner/Banner";

const Trainings = () => {
  const trainings = [
    {
      title: "TRENING INDYWIDUALNY",
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      image: `${piesek}`,
    },
    {
      title: "TRENING GRUPOWY",
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      image: `${piesek}`,
    },
    {
      title: "TRENING GRUPOWY POZ. 2",
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      image: `${piesek}`,
    },
  ];

  return (
    <>
      <Banner id={1} />
      <>
        {trainings.map((trening, index) => (
          <TrainingSection
            title={trening.title}
            description={trening.description}
            image={piesek}
            ifReverse={index % 2 === 0 ? 0 : 1}
            key={index}
          />
        ))}
      </>
    </>
  );
};
export default Trainings;

// const [trainings, setTrainings] = useState([]);
// const getTrainings = async () => {
//   const response = await fetch("/api/treningi/");
//   const data = await response.json();
//   setTrainings(data);
// };
// useEffect(() => {
//   getTrainings();
// }, []);
// import React, { useState, useEffect } from "react";
