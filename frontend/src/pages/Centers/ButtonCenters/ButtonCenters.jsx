import React, { useState } from 'react';
import { ListCenters } from '../ListCenters/ListCenters';
import styles from './ButtonCenters.module.css';

export function ButtonCenters({ centers, associations }) {
  // En lugar de dos estados booleanos, usamos un único estado que puede ser 'none', 'psychologists' o 'associations'
  const [activeSection, setActiveSection] = useState('none');

  // Función para manejar los clicks en los botones
  const handleSectionClick = (section) => {
    // Si la sección clickeada es la que ya está activa, la cerramos
    // Si no, abrimos la nueva sección (esto automáticamente cerrará la otra)
    setActiveSection(activeSection === section ? 'none' : section);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        {/* Botón de Psicólogos */}
        <button 
          onClick={() => handleSectionClick('psychologists')}
          className={`${styles.gradientButton} ${styles.psychologistGradient}`}
        >
          <h2 className={styles.buttonTitle}>Psicólogos</h2>
        </button>

        {/* Botón de Asociaciones */}
        <button 
          onClick={() => handleSectionClick('associations')}
          className={`${styles.gradientButton} ${styles.associationGradient}`}
        >
          <h2 className={styles.buttonTitle}>Asociaciones</h2>
        </button>
      </div>

      {/* Solo se muestra una lista a la vez basado en activeSection */}
      {activeSection === 'psychologists' && <ListCenters items={centers} />}
      {activeSection === 'associations' && <ListCenters items={associations} />}
    </div>
  );
}