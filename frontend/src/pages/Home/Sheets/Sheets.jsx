import { Link } from "react-router-dom";
import styles from "./Sheets.module.css";
import { useInView } from "../../../hooks/useInView";

export function Sheets() {
  const [sectionRef, isInView] = useInView();

  // Array de objetos con la información de cada tarjeta
  const cardData = [
    {
      image: "/images/Sheets/Sheet1.png",
      text: "RECURSOS",
      link: "/recursos",
      icon: "/images/Sheets/RECURSOS.png",
    },
    {
      image: "/images/Sheets/Sheet3.png",
      text: "CENTROS",
      link: "/centros",
      icon: "/images/Sheets/CENTROS.png",
    },
    {
      image: "/images/Sheets/Sheet4.png",
      text: "EVENTOS",
      link: "/eventos",
      icon: "/images/Sheets/EVENTOS.png",
    },
    {
      image: "/images/Sheets/Sheet2.png",
      text: "AYUDAS",
      link: "/ayudas",
      icon: "/images/Sheets/AYUDAS.png",
    },
  ];

  return (
    // Contenedor principal de la sección
    <section ref={sectionRef} className={styles.sheetsSection}>
      <div className={styles.cardsContainer}>
        {cardData.map((card, index) => (
          <div
            className={`${styles.cardWrapper} ${
              isInView ? styles.animate : ""
            }`}
            key={index}
          >
            <div className={styles.card}>
              {/* Contenedor del texto*/}
              <div
                className={styles.imageContainer}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={card.image}
                  alt={`Card ${index + 1}`}
                  className={styles.cardImage}
                />
              </div>
              <Link to={card.link} className={styles.buttonLink}>
                <div className={styles.flexTextContainer}>
                  <div className={styles.textContainer}>
                    <img src={card.icon} className={styles.icon} />
                    <p>{card.text}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
