import styles from "./ListEvents.module.css";

export function ListEvents({ events }) {
  return (
    <section className={styles.eventsSection}>
      <div className={styles.eventsContainer}>
        {events.map((event) => (
          <div key={event.id} id={event.id} className={styles.eventCard}>
            <div className={styles.eventImageContainer}>
              <img
                src={event.image}
                alt={event.name}
                className={styles.eventImage}
              />
            </div>
            <div className={styles.eventContent}>
              <h2 className={styles.name}>{event.name}</h2>
              <p className={styles.description}>{event.description}</p>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span>📍</span> {event.address}
                </div>
                <div className={styles.contactItem}>
                  <span>📞</span> {event.phone}
                </div>
                <div className={styles.contactItem}>
                  <span>🌐</span> {event.web}
                </div>
                <div className={styles.contactItem}>
                  <span>✉️</span> {event.mail}
                </div>
              </div>
              <div className={styles.organizerInfo}>
                Organizado por: {event.centerName}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
