import React, { useState } from "react";
import { ListCenters } from "../ListCenters/ListCenters";
import styles from "./ButtonCenters.module.css";

// Componente ButtonCenters: Muestra dos botones interactivos para alternar entre
// la visualización de psicólogos y asociaciones
export function ButtonCenters({ centers, associations }) {
  // Estados para controlar la visibilidad de las listas
  const [showPsychologists, setShowPsychologists] = useState(false);
  const [showAssociations, setShowAssociations] = useState(false);

  return (
    <div className={styles.container}>
      {/* Contenedor de los botones con espaciado entre ellos */}
      <div className={styles.buttonContainer}>
        {/* Botón de Psicólogos con borde gradiente y efectos hover */}
        <button
          onClick={() => setShowPsychologists(!showPsychologists)}
          className={`${styles.gradientButton} ${styles.psychologistGradient}`}
        >
          <h2 className={styles.buttonTitle}>Psicólogos</h2>
          <p className={styles.buttonSubtitle}>
            Haz click para ver la lista de psicólogos
          </p>
        </button>

        {/* Botón de Asociaciones con borde gradiente y efectos hover */}
        <button
          onClick={() => setShowAssociations(!showAssociations)}
          className={`${styles.gradientButton} ${styles.associationGradient}`}
        >
          <h2 className={styles.buttonTitle}>Asociaciones</h2>
          <p className={styles.buttonSubtitle}>
            Haz click para ver la lista de asociaciones
          </p>
        </button>
      </div>

      {/* Renderizado condicional de las listas según el estado */}
      {showPsychologists && <ListCenters items={centers} />}
      {showAssociations && <ListCenters items={associations} />}
    </div>
  );
}
