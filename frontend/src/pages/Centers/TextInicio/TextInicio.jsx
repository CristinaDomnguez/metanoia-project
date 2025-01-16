import styles from "./TextInicio.module.css";

export function TextInicio() {
  return (
    /* Sección introductoria */
    <section className={styles.introSection}>
      <div className={styles.textContainer}>
        <div className={styles.container}>
          <p className={styles.text}>
            En este apartado encontraras un listado de psicologos y asociaciones
            en Málaga, que consideramos podrían ser utiles si estás buscado
            ayuda profesional.
          </p>
          <p className={styles.text}>
            Podrás ver información relevante que podría facilitarte la elección
            de un profesional adecuado para ti.
          </p>
        </div>
      </div>
    </section>
  );
}
