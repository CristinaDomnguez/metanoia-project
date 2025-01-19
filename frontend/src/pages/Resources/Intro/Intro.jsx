import styles from "./Intro.module.css"; // Importa el CSS Module

export default function Intro() {
  return (
    <>
      {/* Sección introductoria */}
      <section className={styles.introSection}>
        <div className={styles.container}> 
        <img
          src="/images/Resources/VídeosPodcast1.png"
          className={styles.image}
        />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.textTop}> DESCUBRE NUEVAS FORMAS</h1>
          <h2 className={styles.textBottom}> DE SENTIRTE BIEN</h2>
          <div className={styles.container}></div>
        </div>
      </section>
    </>
  );
}
