import { FaPlus } from "react-icons/fa";
import styles from "./Header.module.css";

export function Header({ title, onClick }) {
  return (
    <div className={styles.headerContainer}>
      <h1>{title}</h1>
      <button className={styles.addButton} onClick={onClick}>
        <FaPlus /> Añadir nuevo
      </button>
    </div>
  );
}
