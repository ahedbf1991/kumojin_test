import React, { useState, useEffect } from "react";
import EventForm from "./EventForm";
import EventList from "./EventList";
import { Event } from "./types";
const App: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  const fetchEvents = async () => {
    const response = await fetch("http://localhost:3002/events");
    console.log(response);
    const data = await response.json();
    setEvents(data);
  };

  const createEvent = async (newEvent: Event) => {
    const response = await fetch("http://localhost:3002/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    });
    const data = await response.json();
    setEvents([...events, data]);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <EventForm onEventCreated={createEvent} />
      <EventList events={events} />
    </div>
  );
};

export default App;
