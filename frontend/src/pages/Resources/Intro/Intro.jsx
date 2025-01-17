import styles from "./Intro.module.css"; // Importa el CSS Module


export default function Intro() {
  return (
    <>
      {/* Sección introductoria */}
      <section className={styles.introSection}>
        <div className={styles.textContainer}>
        <div className={styles.container}>
          <p className={styles.text}>
            Tómate tu tiempo y no te agobies. Visualiza la información
            tranquilamente y comienza a inspirarte con las palabras de
            excelentes profesionales.
          </p>
          <p className={styles.text}>
            Buscamos tu <span className={styles.span}>bienestar</span>. Por eso
            hemos reunido una selección de vídeos y podcasts creados por
            expertos en salud mental.
          </p>
          <p className={styles.text}>
            ¡Únete a nuestra comunidad y encuentra el apoyo que necesitas!
          </p>
          </div>
        {/* Ícono PNG añadido */}
        <img
          src="/images/Resources/resourceGif.gif" 
          alt="gif decorativo"
          className={styles.icon}
        />
        </div>
      </section>
    </>
  );
}
