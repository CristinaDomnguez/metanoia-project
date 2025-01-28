import { CardEvents } from "../CardEvents/CardEvents";
import styles from "./ListEvents.module.css";

export function ListEvents({ items = [] }) {
  return (
    <section className={styles.eventsSection}>
      <div className={styles.eventsContainer}>
        {items.map((event) => (
          <CardEvents event={event} key={event.id} />
        ))}
      </div>
    </section>
  );
}
