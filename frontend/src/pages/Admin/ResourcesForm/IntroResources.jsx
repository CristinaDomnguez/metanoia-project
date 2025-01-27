import { useState, useEffect } from "react";
import styles from "./IntroResources.module.css";
import { Header } from "../Header/Header";
import { CardResources } from "../../Resources/CardResources/CardResources";
import { FormResources } from "./FormResources";
import { ItemButtons } from "../ItemButtons/ItemButtons";

export function IntroResources() {
  const [resources, setResources] = useState([]);
  const [setError] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/resources/");
        if (!response.ok) {
          throw new Error("Error al cargar los recursos");
        }
        const data = await response.json();
        setResources(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchResources();
  }, []);

  // Funciones placeholder para manejar operaciones CRUD
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/resources/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setResources(resources.filter((resource) => resource.id !== id));
      }
    } catch (error) {
      console.error("Error al eliminar recurso:", error);
    }
  };

  const handleEdit = async (updatedResource) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/resources/${updatedResource.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedResource),
        }
      );
      if (response.ok) {
        setResources(
          resources.map((resource) =>
            resource.id === updatedResource.id ? updatedResource : resource
          )
        );
      }
    } catch (error) {
      console.error("Error al actualizar recurso:", error);
    }
  };

  const handleAdd = async (newResource) => {
    try {
      const response = await fetch("http://localhost:8080/api/resources/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newResource),
      });
      if (response.ok) {
        const addedResource = await response.json();
        setResources([...resources, addedResource]);
      }
    } catch (error) {
      console.error("Error al añadir recurso:", error);
    }
  };
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
                  handleEdit(updatedData);
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
                  handleAdd(newData);
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
