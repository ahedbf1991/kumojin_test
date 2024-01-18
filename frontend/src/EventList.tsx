import React from "react";
import { Event } from "./types";

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div>
      <h2>List of Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.name}</strong>
            <p>{event.description}</p>
            <p>
              {event.startDate} - {event.endDate}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
