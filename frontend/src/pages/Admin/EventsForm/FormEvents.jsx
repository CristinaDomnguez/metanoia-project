import React, { useState } from 'react';
import styles from '../Form.module.css';

export function FormEvents() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    image_url: '',
    web_url: '',
    phone: '',
    mail: '',
    organizer: '',
    center_id: ''
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
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </label>
      <label>
        Image URL:
        <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} />
      </label>
      <label>
        Web URL:
        <input type="text" name="web_url" value={formData.web_url} onChange={handleChange} />
      </label>
      <label>
        Phone:
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
      </label>
      <label>
        Mail:
        <input type="text" name="mail" value={formData.mail} onChange={handleChange} />
      </label>
      <label>
        Organizer:
        <input type="text" name="organizer" value={formData.organizer} onChange={handleChange} />
      </label>
      <label>
        Center ID:
        <input type="text" name="center_id" value={formData.center_id} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}