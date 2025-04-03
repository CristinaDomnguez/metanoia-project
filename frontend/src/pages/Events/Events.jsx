import { useState, useEffect } from "react";
import { CarouselEvents } from "./CarouselEvents/CarouselEvents";
import styles from "./Events.module.css";
import { ListEvents } from "./ListEvents/ListEvents";
import { TextEvent } from "./TextEvent/TextEvent";

export function Events() {
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
    <div className={styles.mainContainer}>
      <CarouselEvents items={events} />
      <TextEvent />
      <ListEvents items={events} />
    </div>
  );
}
