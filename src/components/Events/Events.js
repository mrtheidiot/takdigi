import React, { useState, useEffect } from "react";
import './Events.css';
import EventSection from "./EventSection";

const Events = () => {
  const events = [
    {
      title: "Trening na zielonej trawce",
      subtitle:
        "Trening na trawce w miłej atmoserze, dodatkowo jest ciepły posiłek.",
      date: "03 Marca 2022",
      description: "",
      enrolment: "Tutaj jset tekst, ktory sie wyswieli na pop-up",
    },
    {
      title: "Szkoła dla szczeniaczków",
      subtitle:
        "Cwiczymy twojego małego od dziecka. (małego pieska oczywiście).",
      date: "08 Kwietnia 2022",
      description: "",
      enrolment: "Tutaj jset tekst, ktory sie wyswieli na pop-up",
    },
  ];

  return (
    <div className="event__wrapper">
      {events.map((event, index) => (
        <EventSection
          title={event.title}
          subtitle={event.subtitle}
          date={event.date}
          description={event.description}
          enrolment={event.enrolment}
          key={index}
        />
      ))}
    </div>
  );
};

export default Events;

// const [events, setEvents] = useState([]);
// const getEvents = async () => {
//   const response = await fetch("/api/events/");
//   const data = await response.json();
//   setEvents(data);
//   console.log(data)
// };
// useEffect(() => {
//   getEvents();
// }, []);
