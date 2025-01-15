import React from "react";
import styles from "./Intro.module.css"; // Importa el CSS Module

export default function Intro() {
  return (
    <>
      {/* Sección introductoria */}
      <section className={`${styles.introSection} ${styles.layoutBox}`}>
        <div className={styles.textContainer}>
          <div className={styles.container}>
            <p className={styles.text}>
              Tener la opinión de gente versada en la materia siempre es una
              buena guía. Hemos hecho esta selección de podcasts y videos que
              creemos te aportarán luz.
            </p>
            <p className={`${styles.text} ${styles.secondParagraph}`}>
              Con los numerosos recursos que te ofrecemos, queremos que tengas
              suficiente material para que puedas elegir lo que mejor se ajusta
              a tus necesidades, sin tener que sentirte agobiado por la
              necesidad de visualizar o escuchar todo el material que ponemos a
              tu disposición.
            </p>
            <p className={styles.text}>
              Queremos ayudarte a que consigas ver otro color a la vida y que
              puedas superar todos los obstáculos que se presenten en tu camino.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
