import styles from "./IntroEvents.module.css";
import { FormEvents } from "./FormEvents";
import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { ItemButtons } from "../ItemButtons/ItemButtons";
import { CardEvents } from "../../Events/CardEvents/CardEvents";

export function IntroEvents() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch events from backend
    fetch("http://localhost:8080/api/events/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        return response.json();
      })
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <>
      <Header title="Lista de eventos" />
      <section className={styles.eventsSection}>
        <div className={styles.eventsContainer}>
          {items.map((event) => (
            <ItemButtons key={event.id}>
              <CardEvents event={event} />
            </ItemButtons>
          ))}
        </div>
      </section>
      <FormEvents />
    </>
  );
}
