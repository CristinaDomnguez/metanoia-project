import { useState } from "react";
import styles from "./IntroResources.module.css";
import { Header } from "../Header/Header";
import { CardResources } from "../../Resources/CardResources/CardResources";
import { FormResources } from "./FormResources";
import { ItemButtons } from "../ItemButtons/ItemButtons";
import { Modal } from "../../../components/Modal/Modal";
import { ModalDelete } from "../../../components/Modal/Delete/ModalDelete";
import { useData } from "../../../hooks/useData";

export function IntroResources() {
  const {
    data: resources,
    handleAdd,
    handleDelete,
    handleEdit,
  } = useData("resources");

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
      <Header title="Lista de recursos" onClick={() => setAddModal(true)} />
      <section className={styles.container}>
        {resources.map((item) => (
          <ItemButtons
            onEdit={() => setEditModal(item)}
            onDelete={() => setDeleteModal(item)}
            key={item.id}
          >
            <CardResources item={item} />
          </ItemButtons>
        ))}

        {deleteModal && (
          <ModalDelete
            onCancel={() => setDeleteModal(null)}
            onDelete={confirmDelete}
          />
        )}

        {editModal && (
          <Modal>
            <FormResources
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
            <FormResources
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
