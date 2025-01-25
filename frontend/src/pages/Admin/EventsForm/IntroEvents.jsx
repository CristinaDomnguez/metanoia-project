import style from "./IntroEvents.module.css";
import { FormEvents } from "./FormEvents";
import { useEffect, useState } from "react";
import { ListEvents } from "../../Events/ListEvents/ListEvents";
import { Header } from "../Header/Header";

export function IntroEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from backend
    fetch("http://localhost:8080/api/events/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        return response.json();
      })
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <>
      <Header title="Lista de eventos" />
      <ListEvents events={events} />
      <FormEvents />
    </>
  );
}
