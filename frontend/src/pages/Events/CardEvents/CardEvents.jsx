import styles from "./CardEvents.module.css"

export function CardEvents({ event }) {
  return (
    <div key={event.id} id={`event${event.id}`} className={styles.eventCard}>
      <div className={styles.eventImageContainer}>
        <img
          src={event.imageUrl}
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
          <a
            className={styles.linkPhone}
            href={`tel:+34${event.phone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.contactItem}>
              <span>📞</span> {event.phone}
            </div>
          </a>
          <div className={styles.contactItem}>
            <span>🌐</span>
            <a
              className={styles.linkWeb}
              href={event.web_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Acceso a Web
            </a>
          </div>
          {event.mail && ( // Renderiza el bloque solo si `event.mail` existe
            <div className={styles.contactItem}>
              <span>✉️</span> {event.mail}
            </div>
          )}
        </div>
        <div className={styles.organizerInfo}>
          Organizado por: {event.centerName}
        </div>
      </div>
    </div>
  );
}
