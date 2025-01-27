import { useState } from "react";
import styles from "../Form.module.css";

export function FormCenters({ initialData = {}, onCancel, onSubmit }) {
  const [formData, setFormData] = useState({
    id: initialData.id || null,
    name: initialData.name || "",
    type: initialData.type || "",
    description: initialData.description || "",
    address: initialData.address || "",
    phone: initialData.phone || "",
    webUrl: initialData.webUrl || "",
    mail: initialData.mail || "",
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
    onSubmit(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>{initialData.id ? "Editar Centro" : "Añadir Centro"}</h2>
      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="type">Tipo</label>
          <div className={styles.selectWrapper}>
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="">Seleccionar tipo</option>
              <option value="psicologo/a">Psicólogo/a</option>
              <option value="asociacion">Asociación</option>
            </select>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">Dirección</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Teléfono</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="webUrl">Web URL</label>
          <input
            type="text"
            id="webUrl"
            name="webUrl"
            value={formData.webUrl}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="mail">Email</label>
          <input
            type="email"
            id="mail"
            name="mail"
            value={formData.mail}
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
