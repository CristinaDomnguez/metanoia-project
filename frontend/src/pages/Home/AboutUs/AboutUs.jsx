import React from "react";
import { useInView } from "../../../hooks/useInView"; // Asegúrate de importar correctamente el hook
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  const [ref, isInView] = useInView(); // Hook para manejar la visibilidad en el viewport

  const titleText = "¿Quiénes somos?";

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isInView ? styles.inView : ""}`}
    >
      <h1 className={styles.title}>
        <img src="/favicon.png" alt="icono" className={styles.icon} />
        {titleText.split(" ").map((word, index) => (
          <span
            key={index}
            className={`${styles.word} ${isInView ? styles.animateWord : ""}`}
            style={{ animationDelay: `${index * 0.4}s` }}
          >
            {word}
          </span>
        ))}
      </h1>

      <p className={`${styles.text} ${isInView ? styles.animateText : ""}`}>
        <span className={styles.importantWord}>Metanoia</span> es una palabra
        que proviene del griego y se refiere al proceso de transformación que
        produce cambios en la forma de pensar, sentir, de ser o de vivir de
        alguien. A nivel etimológico,{" "}
        <span className={styles.importantWord}>meta</span> significa "más allá"
        y <span className={styles.importantWord}>noia</span> significa "mente".
      </p>
      <p className={`${styles.text} ${isInView ? styles.animateText : ""}`}>
        Con esta web, pretendemos crear un espacio{" "}
        <span className={styles.importantWord}>gratuito</span> para poder ayudar
        a aquellas personas que estén pasando por un mal momento y puedan
        encontrar una serie de recursos para que puedan mejorar su salud mental.
      </p>
      <p className={`${styles.text} ${isInView ? styles.animateText : ""}`}>
        Tu bienestar es lo primero, siéntete libre navegando por nuestra web y
        accede a aquellas pestañas que más te convengan, recuerda que este
        espacio está enfocado a darte{" "}
        <span className={styles.importantWord}>pautas</span> para poder enfocar
        el día a día con otra perspectiva.
      </p>
    </section>
  );
}
