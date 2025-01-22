import styles from "./Call.module.css";

export function Call() {
  return (
    <div>
      <div className={styles.textContent}>
        <p className={styles.textTop}>UNA LLAMADA</p>
        <p className={styles.textBottom}>PUEDE CAMBIARLO TODO</p>
      </div>
      <div className={styles.circlesContainer}>
        <div className={styles.circle}>
          <img
            src="/images/Helps/llamada1.png"
            alt="Sos"
            className={styles.circleImage}
          />
          <p className={styles.phoneNumber}>112</p>
          <p className={styles.circleText}>EMERGENCIAS</p>
        </div>
        <div className={styles.circle}>
          <img
            src="/images/Helps/llamada2.png"
            alt="Salud responde"
            className={styles.circleImage}
          />
          <p className={styles.phoneNumber}>955 54 50 60</p>
          <p className={styles.circleText}>SALUD RESPONDE</p>
        </div>
        <div className={styles.circle}>
          <img
            src="/images/Helps/llamada3.png"
            alt="Atención al suicidio"
            className={styles.circleImage}
          />
          <p className={styles.phoneNumber}>024</p>
          <p className={styles.circleText}>LÍNEA DE ATENCIÓN A LA CONDUCTA SUICIDA</p>
        </div>
        <div className={styles.circle}>
          <img
            src="/images/Helps/llamada4.png"
            alt="Teléfono de la esperanza"
            className={styles.circleImage}
          />
          <p className={styles.phoneNumber}>717 003 717</p>
          <p className={styles.circleText}>TELÉFONO DE LA ESPERANZA</p>
        </div>
      </div>
    </div>
  );
}
