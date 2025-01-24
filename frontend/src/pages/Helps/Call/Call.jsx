import styles from "./Call.module.css";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

export function Call() {
  return (
    <div>
      <div className={styles.textContent}>
        <p className={styles.textTop}>UNA LLAMADA</p>
        <p className={styles.textBottom}>
          PUEDE CAMBIARLO TODO <LiaPhoneVolumeSolid className={styles.icon} />
        </p>
      </div>
      <div className={styles.circlesContainer}>
        <a
          className={styles.phoneLink}
          href="tel:+34 112"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.circle}>
            <img
              src="/images/Helps/llamada1.png"
              alt="Sos"
              className={styles.circleImage}
            />
            <p className={styles.phoneNumber}>112</p>
            <p className={styles.circleText}>EMERGENCIAS</p>
          </div>
        </a>
        <a
          className={styles.phoneLink}
          href="tel:+34 955 54 50 60"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.circle}>
            <img
              src="/images/Helps/llamada2.png"
              alt="Salud responde"
              className={styles.circleImage}
            />
            <p className={styles.phoneNumber}>955 54 50 60</p>
            <p className={styles.circleText}>SALUD RESPONDE</p>
          </div>
        </a>
        <a
          className={styles.phoneLink}
          href="tel:+34 024"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.circle}>
            <img
              src="/images/Helps/llamada3.png"
              alt="Atención al suicidio"
              className={styles.circleImage}
            />
            <p className={styles.phoneNumber}>024</p>
            <p className={styles.circleText}>
              LÍNEA DE ATENCIÓN A LA CONDUCTA SUICIDA
            </p>
          </div>
        </a>
        <a
          className={styles.phoneLink}
          href="tel:+34 717 003 717"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.circle}>
            <img
              src="/images/Helps/llamada4.png"
              alt="Teléfono de la esperanza"
              className={styles.circleImage}
            />
            <p className={styles.phoneNumber}>717 003 717</p>
            <p className={styles.circleText}>TELÉFONO DE LA ESPERANZA</p>
          </div>
        </a>
      </div>
    </div>
  );
}
