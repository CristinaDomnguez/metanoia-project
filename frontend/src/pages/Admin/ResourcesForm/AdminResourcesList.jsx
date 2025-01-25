import { useState } from "react";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import styles from "./AdminResourcesList.module.css";
import { FormResources } from "./FormResources";

function extractYoutubeId(url) {
  if (!url || typeof url !== "string") {
    return null;
  }
  const match = url.match(/^(?:[^/]+:\/\/)?[^/]+\/([^/?]+)/);
  return match?.[1];
}

function getIframeSrc(type, url) {
  if (type === "video") {
    return `https://www.youtube.com/embed/${extractYoutubeId(url)}`;
  } else {
    return url;
  }
}

export default function AdminResourcesList({ items, onDelete, onEdit, onAdd }) {
  const [deleteModal, setDeleteModal] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [addModal, setAddModal] = useState(false);

  const handleDelete = (item) => {
    setDeleteModal(item);
  };

  const handleEdit = (item) => {
    setEditModal(item);
  };

  const confirmDelete = () => {
    if (deleteModal) {
      onDelete(deleteModal.id);
      setDeleteModal(null);
    }
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <h1>Lista de recursos</h1>
        <button className={styles.addButton} onClick={() => setAddModal(true)}>
          <FaPlus /> Añadir Recurso
        </button>
      </div>

      <section className={styles.container}>
        {items.map((item) => (
          <div key={item.id} className={styles.resourceCard}>
            <iframe
              className={styles.resourceFrame}
              src={getIframeSrc(item.type, item.url)}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className={styles.resourceInfo}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <div className={styles.resourceActions}>
                <button onClick={() => handleEdit(item)}>
                  <FaEdit className={styles.actionIcon} />
                </button>
                <button onClick={() => handleDelete(item)}>
                  <FaTrash className={styles.actionIcon} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {deleteModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h2>Confirmar Eliminación</h2>
              <p>¿Estás seguro de eliminar este recurso?</p>
              <div className={styles.modalActions}>
                <button
                  onClick={confirmDelete}
                  className={styles.confirmButton}
                >
                  Eliminar
                </button>
                <button
                  onClick={() => setDeleteModal(null)}
                  className={styles.cancelButton}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

        {editModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <FormResources
                initialData={editModal}
                onCancel={() => setEditModal(null)}
                onSubmit={(updatedData) => {
                  onEdit(updatedData);
                  setEditModal(null);
                }}
              />
            </div>
          </div>
        )}

        {addModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <FormResources
                onCancel={() => setAddModal(false)}
                onSubmit={(newData) => {
                  onAdd(newData);
                  setAddModal(false);
                }}
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
