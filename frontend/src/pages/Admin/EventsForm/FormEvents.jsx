import { useState } from "react";
import styles from "../Form.module.css";

export function FormEvents({ initialData = {}, onCancel, onSubmit }) {
  const [formData, setFormData] = useState({
    address: initialData.address || "",
    centerName: initialData.centerName || "",
    description: initialData.description || "",
    id: initialData.id || null,
    imageUrl: initialData.imageUrl || "",
    mail: initialData.mail || "",
    name: initialData.name || "",
    organizer: initialData.organizer || "",
    phone: initialData.phone || "",
    web_url: initialData.web_url || "",
    centerId: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      center: { id: 1 }, // CAMBIAR ESTO SI SE QUIERE QUE FUNCIONE CORRECTAMENTE LA CREACIÓN
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>{initialData.id ? "Editar Evento" : "Añadir Evento"}</h2>
      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Descripción</label>
          <input
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">Dirección</label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="imageUrl">Imagen URL</label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="web_url">Web URL</label>
          <input
            type="text"
            name="web_url"
            id="web_url"
            value={formData.web_url}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Teléfono</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="mail">Email</label>
          <input
            type="text"
            name="mail"
            id="mail"
            value={formData.mail}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="organizer">Organizador</label>
          <input
            type="text"
            name="organizer"
            id="organizer"
            value={formData.organizer}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="center_id">ID centro</label>
          <input
            type="text"
            name="center_id"
            id="center_id"
            value={formData.center_id}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.formActions}>
        <button
          type="button"
          onClick={onCancel}
          className={styles.cancelButton}
        >
          Cancelar
        </button>
        <button type="submit" className={styles.submitButton}>
          {initialData.id ? "Actualizar" : "Crear"}
        </button>
      </div>
    </form>
  );
}
