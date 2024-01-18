import React, { useState } from "react";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { Event } from "./types";
import { Moment } from "moment";

interface EventFormProps {
  onEventCreated: (event: Event) => void;
}

const EventForm: React.FC<EventFormProps> = ({ onEventCreated }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState<Moment | null>(null);
  const [endDate, setEndDate] = useState<Moment | null>(null);
  const [timezone, setTimezone] = useState("UTC");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (startDate && endDate) {
      const start: Date = startDate.toDate();
      const end: Date = endDate.toDate();

      const newEvent: Event = {
        name,
        description,
        startDate: start.toISOString(),
        endDate: end.toISOString(),
        timezone,
      };

      onEventCreated(newEvent);
    } else {
      console.error("Please select both start date and end date.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        Start Date:
        <DateTime
          value={startDate || undefined}
          onChange={(date) => setStartDate(date as Moment)}
          input
        />
      </label>
      <br />
      <label>
        End Date:
        <DateTime
          value={endDate || undefined}
          onChange={(date) => setEndDate(date as Moment)}
          input
        />
      </label>
      <br />
      <label>
        Timezone:
        <input
          type="text"
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
