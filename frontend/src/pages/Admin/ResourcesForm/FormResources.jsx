import { useState } from 'react';
import styles from '../Form.module.css';

export function FormResources({ 
  initialData = {}, 
  onCancel, 
  onSubmit 
}) {
  const [formData, setFormData] = useState({
    id: initialData.id || null,
    title: initialData.title || '',
    type: initialData.type || '',
    description: initialData.description || '',
    url: initialData.url || '',
    imageUrl: initialData.imageUrl || ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'id' && key !== 'imageUrl' && !formData[key]) {
        newErrors[key] = 'Este campo es obligatorio';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({...errors, [name]: ''});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form className={styles.resourceForm} onSubmit={handleSubmit}>
      <h2>{initialData.id ? 'Editar Recurso' : 'Añadir Recurso'}</h2>
      
      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label>Título</label>
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            className={errors.title ? styles.inputError : ''}
          />
          {errors.title && <span className={styles.errorText}>{errors.title}</span>}
        </div>
        
        <div className={styles.formGroup}>
          <label>Tipo</label>
          <div className={styles.selectWrapper}>
            <select 
              name="type" 
              value={formData.type} 
              onChange={handleChange}
              className={errors.type ? styles.inputError : ''}
            >
              <option value="">Seleccionar tipo</option>
              <option value="video">Video</option>
              <option value="podcast">Podcast</option>
            </select>
          </div>
          {errors.type && <span className={styles.errorText}>{errors.type}</span>}
        </div>
        
        <div className={styles.formGroup}>
          <label>Descripción</label>
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange}
            className={errors.description ? styles.inputError : ''}
          />
          {errors.description && <span className={styles.errorText}>{errors.description}</span>}
        </div>
        
        <div className={styles.formGroup}>
          <label>URL</label>
          <input 
            type="text" 
            name="url" 
            value={formData.url} 
            onChange={handleChange}
            className={errors.url ? styles.inputError : ''}
          />
          {errors.url && <span className={styles.errorText}>{errors.url}</span>}
        </div>
        
        <div className={styles.formGroup}>
          <label>URL de Imagen (opcional)</label>
          <input 
            type="text" 
            name="imageUrl" 
            value={formData.imageUrl} 
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className={styles.formActions}>
        <button type="button" onClick={onCancel} className={styles.cancelButton}>
          Cancelar
        </button>
        <button type="submit" className={styles.submitButton}>
          {initialData.id ? 'Actualizar' : 'Crear'}
        </button>
      </div>
    </form>
  );
}