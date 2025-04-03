import { FaEdit, FaTrash } from "react-icons/fa";
import styles from "./ItemButtons.module.css";

export function ItemButtons({ onEdit, onDelete, children }) {
  return (
    <div className={styles.container}>
      {children}
      <div className={styles.buttons}>
        <button className={styles.button} onClick={onEdit}>
          <FaEdit className={styles.actionIcon} />
        </button>
        <button className={styles.button} onClick={onDelete}>
          <FaTrash className={styles.actionIcon} />
        </button>
      </div>
    </div>
  );
}
