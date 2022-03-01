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
      enrollment: "dorotka.alewras@gmail.com",
    },
    {
      title: "Szkoła dla szczeniaczków",
      subtitle:
        "Cwiczymy twojego małego od dziecka. (małego pieska oczywiście).",
      date: "08 Kwietnia 2022",
      description: "",
      enrollment: "biuro@piespotrafi.pl",
    },
    {
      title: "Szkoła dla dużych piesków",
      subtitle:
        "Profesjonalnie i kompleksowo - nie wiem co dalej napisać nie znam sie.",
      date: "08 sierpnia 2022",
      description: "",
      enrollment: "biuro@piesniepotrafi.pl",
    },
  ];

  return (
    <>
    <div className="upcoming_events">
      Ndchodzące wydarzenia:
    </div>
    <div className="event__wrapper">
      {events.map((event, index) => (
        <EventSection
        title={event.title}
        subtitle={event.subtitle}
        date={event.date}
        description={event.description}
        enrollment={event.enrollment}
        key={index}
        />
        ))}
    </div>
        </>
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
