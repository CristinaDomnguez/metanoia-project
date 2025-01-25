import { CardCenter } from "../CardCenter/CardCenter";
import styles from "./ListCenters.module.css";


export function ListCenters({ items = [] }) {
  return (
    // Contenedor principal de la sección
    <section className={styles.sheetsSection}>
      <div className={styles.cardsContainer}>
        {items.map((center) => (
          <CardCenter center={center} key={center.id}/>
        ))}
      </div>
    </section>
  );
}
