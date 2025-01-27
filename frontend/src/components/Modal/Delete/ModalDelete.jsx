import { Modal } from "../Modal";
import styles from "./ModalDelete.module.css";

export function ModalDelete({ onDelete, onCancel }) {
  return (
    <Modal>
      <h2>Confirmar Eliminación</h2>
      <p>¿Estás seguro de eliminar este elemento?</p>
      <div className={styles.modalActions}>
        <button onClick={onDelete} className={styles.confirmButton}>
          Eliminar
        </button>
        <button onClick={onCancel} className={styles.cancelButton}>
          Cancelar
        </button>
      </div>
    </Modal>
  );
}
