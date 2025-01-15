import styles from "./ListCenters.module.css";

export function ListCenters() {
  // Array de objetos con la información de cada centro
  const centers = [
    {
      id: 1,
      name: "Centro 1",
      type: "psycology",
      description: "especialista en traumas",
      address: "Calle Ave del Paraiso",
      phone: 53495393409,
      web_url: "www.ayudatumente.com",
      mail: "ayudatumente@gmail.com",
      user_id: "cristina",
    },
    {
      id: 2,
      name: "Centro 2",
      type: "psycology",
      description: "especialista en traumas",
      address: "Calle Ave del Paraiso",
      phone: 53495393409,
      web_url: "www.ayudatumente.com",
      mail: "ayudatumente@gmail.com",
      user_id: "cristina",
    },
    {
      id: 3,
      name: "Centro 3",
      type: "asociacion",
      description: "especialista en traumas",
      address: "Calle Ave del Paraiso",
      phone: 53495393409,
      web_url: "www.ayudatumente.com",
      mail: "ayudatumente@gmail.com",
      user_id: "cristina",
    },
  ];

  return (
    // Contenedor principal de la sección
    <section className={styles.sheetsSection}>
      <div className={styles.cardsContainer}>
        {centers.map((center) => (
          <div key={center.id} className={styles.centerCard}>
            <h2 className={styles.name}>{center.name}</h2>
            <div className={styles.type}>{center.type}</div>
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
            <div className={styles.userId}>
              Registrado por: {center.user_id}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
