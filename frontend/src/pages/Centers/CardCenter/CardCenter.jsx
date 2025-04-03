import styles from "./CardCenter.module.css";

function decorateCenterType(type) {
  // Redefine types. Sometimes is psicologo, others psicologo/a
  type = type.toLowerCase();
  if (type.startsWith("psicologo")) {
    return "Psicólogo/a";
  } else if (type === "asociacion") {
    return "Asociación";
  }
  return "Desconocido";
}

export function CardCenter({ center }) {
  return (
    <div key={center.id} className={styles.centerCard}>
        <h2 className={styles.name}>{center.name}</h2>
        <p className={styles.description}>{center.description}</p>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <span>📍</span> {center.address}
          </div>
          <a
            href={`tel:+34${center.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contactItem} ${styles.contactItemLink}`}
          >
            <span>📞</span> {center.phone}
          </a>
          <a
            href={center.webUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contactItem} ${styles.contactItemLink}`}
          >
            <span>🌐</span> Acceso a Web
          </a>
        </div>
        <div className={styles.type}>{decorateCenterType(center.type)}</div>
    </div>
  );
}
