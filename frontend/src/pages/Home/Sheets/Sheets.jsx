import { Link } from "react-router-dom";
import styles from "./Sheets.module.css";

export function Sheets() {
  // Array de objetos con la información de cada tarjeta
  const cardData = [
    {
      image: "/images/Sheets/photo6.avif",
      text: "Recursos",
      link: "/recursos",
    },
    {
      image: "/images/Sheets/photo5.avif",
      text: "Ayudas",
      link: "/ayudas",
    },
    {
      image: "/images/Sheets/photo4.avif",
      text: "Centros de atención",
      link: "/centros",
    },
    {
      image: "/images/Sheets/photo7.avif",
      text: "Eventos",
      link: "/eventos",
    },
  ];

  return (
    // Contenedor principal de la sección
    <section className={styles.sheetsSection}>
      <div className={styles.cardsContainer}>
        {cardData.map((card, index) => (
          <div className={styles.cardWrapper} key={index}>
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <img
                  src={card.image}
                  alt={`Card ${index + 1}`}
                  className={styles.cardImage}
                />
              </div>
              {/* Contenedor del texto*/}
              <Link to={card.link} className={styles.buttonLink}>
                <div className={styles.textContainer}>
                  <p>{card.text}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
