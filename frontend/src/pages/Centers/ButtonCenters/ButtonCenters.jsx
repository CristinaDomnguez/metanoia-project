import { useState, useRef } from "react";
import { ListCenters } from "../ListCenters/ListCenters";
import styles from "./ButtonCenters.module.css";

export function ButtonCenters({ centers, associations }) {
  const [activeSection, setActiveSection] = useState("none");
  const listRef = useRef(null); // Crear una referencia para la lista

  // Función para manejar los clicks en los botones
  const handleSectionClick = (section) => {
    const nextSection = activeSection === section ? "none" : section;
    setActiveSection(nextSection);

    // Desplazar la página hacia la lista si se activa
    if (nextSection !== "none" && listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        {/* Botón de Psicólogos */}
        <button
          onClick={() => handleSectionClick("psychologists")}
          className={`${styles.gradientButton} ${
            activeSection === "psychologists" ? styles.active : ""
          }`}
        >
          <h2 className={styles.buttonTitle}>Psicólogos</h2>
          {/* Ícono PNG añadido */}
          <img
            src="/images/Centers/centerIcon1.png"
            alt="icono psicologo"
            className={styles.icon}
          />
        </button>

        {/* Botón de Asociaciones */}
        <button
          onClick={() => handleSectionClick("associations")}
          className={`${styles.gradientButton} ${
            activeSection === "associations" ? styles.active : ""
          }`}
        >
          <h2 className={styles.buttonTitle}>Asociaciones</h2>
          {/* Ícono PNG añadido */}
          <img
            src="/images/Centers/centerIcon2.png"
            alt="icono asociacion"
            className={styles.icon}
          />
        </button>
      </div>
      <div ref={listRef}>
        {/* Solo se muestra una lista a la vez basado en activeSection */}
        {activeSection === "psychologists" && <ListCenters items={centers} />}
        {activeSection === "associations" && (
          <ListCenters items={associations} />
        )}
      </div>
    </div>
  );
}
