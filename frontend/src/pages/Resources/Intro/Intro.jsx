import React from "react";
import styles from "./Intro.module.css"; // Importa el CSS Module
import { FaComputer } from "react-icons/fa6";

export default function Intro() {
  return (
    <>
      {/* Sección introductoria */}
      <section className={`${styles.introSection} ${styles.layoutBox}`}>
        <div className={styles.textContainer}>
          <p className={`${styles.text} ${styles.secondText}`}>
            Tómate tu tiempo y no te agobies. Visualiza la información
            tranquilamente y comienza a inspirarte con las palabras de
            excelentes profesionales.
          </p>
          <p className={`${styles.text} ${styles.secondParagraph}`}>
            Buscamos tu <span className={styles.span}>bienestar</span>. Por eso
            hemos reunido una selección de vídeos y podcasts creados por
            expertos en salud mental.
          </p>
          <p className={`${styles.text} ${styles.thirdParagraph}`}>
            ¡Únete a nuestra comunidad y encuentra el apoyo que necesitas!
          </p>
          <div className={styles.iconContainer}>
            <FaComputer className={styles.icon} />
          </div>
        </div>
      </section>
    </>
  );
}
