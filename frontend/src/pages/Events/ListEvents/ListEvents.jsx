import styles from "./ListEvents.module.css";

export function ListEvents({ events }) {
  return (
    <section className={styles.eventsSection}>
      {events.map((event) => (
        <div key={event.id} className={styles.eventCard} id={event.id}>
          <img
            src={event.image}
            alt={event.title}
            className={styles.eventImage}
          />
          <div className={styles.eventDetails}>
            <h2 className={styles.eventTitle}>{event.title}</h2>
            <p className={styles.eventDescription}>{event.description}</p>
            <div className={styles.eventOrganizer}>
              Organizador: {event.organizer}
            </div>
            <div className={styles.eventDate}>Fecha: {event.date}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
