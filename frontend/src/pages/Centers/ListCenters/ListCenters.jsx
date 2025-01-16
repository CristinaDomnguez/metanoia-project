import styles from "./ListCenters.module.css";

export function ListCenters({ items }) {
  return (
    // Contenedor principal de la sección
    <section className={styles.sheetsSection}>
      <div className={styles.cardsContainer}>
        {items.map((center) => (
          <div key={center.id} className={styles.centerCard}>
            <h2 className={styles.name}>{center.name}</h2>
            <p className={styles.description}>{center.description}</p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span>📍</span> {center.address}
              </div>
              <div className={styles.contactItem}>
                <span>📞</span> {center.phone}
              </div>
              <div className={styles.contactItem}>
                <span>🌐</span> {center.web_url}
              </div>
              <div className={styles.contactItem}>
                <span>✉️</span> {center.mail}
              </div>
            </div>
            <div className={styles.type}>{center.type}</div>
            {/* <div className={styles.userId}>
              Registrado por: {center.user_id}
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}
