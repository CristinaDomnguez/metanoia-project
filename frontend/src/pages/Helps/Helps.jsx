import { Call } from "./Call/Call";
import { Document } from "./Documents/Documents";
import styles from "./Helps.module.css";

export function Helps() {
  return (
    <div className={styles.mainContainer}>
      <Call />
      <Document />
    </div>
  );
}
