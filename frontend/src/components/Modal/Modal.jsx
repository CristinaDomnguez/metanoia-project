import styles from "./Modal.module.css";

export function Modal({ children }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
}
