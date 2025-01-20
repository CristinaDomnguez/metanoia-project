import styles from "./TextEvent.module.css";

export function TextEvent() {
    return(
        <div className={styles.textContent}>
            <h1 className={styles.textTop}>EVENTOS MÁLAGA 2025</h1>
            <h3 className={styles.textBottom}>¡Te esperamos, juntos podemos ayudarnos!</h3>
        </div>
    );
}