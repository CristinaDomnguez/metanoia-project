import React, { useState } from 'react';
import styles from '../Form.module.css';

export function FormCenters() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    address: '',
    phone: '',
    web_url: '',
    mail: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="web_url">Web URL:</label>
        <input
          type="text"
          id="web_url"
          name="web_url"
          value={formData.web_url}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="mail">Mail:</label>
        <input
          type="email"
          id="mail"
          name="mail"
          value={formData.mail}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}