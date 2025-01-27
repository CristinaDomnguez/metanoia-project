import styles from "./IntroCenters.module.css";
import { FormCenters } from "./FormCenters";
import { useState } from "react";
import { Header } from "../Header/Header.jsx";
import { CardCenter } from "../../Centers/CardCenter/CardCenter.jsx";
import { ItemButtons } from "../ItemButtons/ItemButtons.jsx";
import { ModalDelete } from "../../../components/Modal/Delete/ModalDelete.jsx";
import { Modal } from "../../../components/Modal/Modal.jsx";
import { useData } from "../../../hooks/useData.js";

export function IntroCenters() {
  const {
    data: items,
    handleAdd,
    handleDelete,
    handleEdit,
  } = useData("centers");

  const [deleteModal, setDeleteModal] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [addModal, setAddModal] = useState(false);

  const confirmDelete = () => {
    if (deleteModal) {
      handleDelete(deleteModal.id);
      setDeleteModal(null);
    }
  };
  return (
    <>
      <Header title="Lista de centros" onClick={() => setAddModal(true)} />
      <section className={styles.sheetsSection}>
        <div className={styles.cardsContainer}>
          {items.map((center) => (
            <ItemButtons
              key={center.id}
              onEdit={() => setEditModal(center)}
              onDelete={() => setDeleteModal(center)}
            >
              <CardCenter center={center} />
            </ItemButtons>
          ))}
        </div>

        {deleteModal && (
          <ModalDelete
            onCancel={() => setDeleteModal(null)}
            onDelete={confirmDelete}
          />
        )}

        {editModal && (
          <Modal>
            <FormCenters
              initialData={editModal}
              onCancel={() => setEditModal(null)}
              onSubmit={(updatedData) => {
                handleEdit(updatedData);
                setEditModal(null);
              }}
            />
          </Modal>
        )}

        {addModal && (
          <Modal>
            <FormCenters
              onCancel={() => setAddModal(false)}
              onSubmit={(newData) => {
                handleAdd(newData);
                setAddModal(false);
              }}
            />
          </Modal>
        )}
      </section>
    </>
  );
}
