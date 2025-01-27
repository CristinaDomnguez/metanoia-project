import styles from "./IntroEvents.module.css";
import { FormEvents } from "./FormEvents";
import { useState } from "react";
import { Header } from "../Header/Header";
import { ItemButtons } from "../ItemButtons/ItemButtons";
import { CardEvents } from "../../Events/CardEvents/CardEvents";
import { useData } from "../../../hooks/useData";
import { Modal } from "../../../components/Modal/Modal";
import { ModalDelete } from "../../../components/Modal/Delete/ModalDelete";

export function IntroEvents() {
  const {
    data: items,
    handleAdd,
    handleDelete,
    handleEdit,
  } = useData("events");

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
      <Header title="Lista de eventos" onClick={() => setAddModal(true)} />
      <section className={styles.eventsSection}>
        <div className={styles.eventsContainer}>
          {items.map((event) => (
            <ItemButtons
              key={event.id}
              onEdit={() => setEditModal(event)}
              onDelete={() => setDeleteModal(event)}
            >
              <CardEvents event={event} />
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
            <FormEvents
              initialData={editModal}
              onCancel={() => setEditModal(null)}
              onSubmit={async (updatedData) => {
                await handleEdit(updatedData);
                setEditModal(null);
              }}
            />
          </Modal>
        )}

        {addModal && (
          <Modal>
            <FormEvents
              onCancel={() => setAddModal(false)}
              onSubmit={async (newData) => {
                await handleAdd(newData);
                setAddModal(false);
              }}
            />
          </Modal>
        )}
      </section>
    </>
  );
}
