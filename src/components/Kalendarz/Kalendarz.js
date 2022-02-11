import { useState, useEffect } from "react";
import "./Kalendarz.css";

const Kalendarz = () => {
  const [events, setEvents] = useState([]);
  const getEvents = async () => {
    const response = await fetch("/api/wydarzenia/");
    const data = await response.json();
    setEvents(data);
    console.log(data)
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div>
        {events.map((event,index) => (
            <div>{event.title}</div>
        ))}
    </div>
  );
};

export default Kalendarz;
