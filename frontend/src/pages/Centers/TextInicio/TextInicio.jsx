import styles from "./TextInicio.module.css";
import { ListCenters } from "../ListCenters/ListCenters";
import { useRef, useState } from "react";

export function TextInicio({ centers, associations }) {
  const [activeSection, setActiveSection] = useState("none");
  const listRef = useRef(null);
  const handleSectionClick = (section) => {
    const nextSection = activeSection === section ? "none" : section;
    setActiveSection(nextSection);
    if (nextSection !== "none" && listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    /* Sección introductoria */
    <section className={styles.introSection}>
      <div className={styles.container}>
        <img src="/images/Centers/Malagaphoto.png" className={styles.image} />
        <div className={styles.textContainer}>
          <h1 className={styles.textTop}>
            {" "}
            UN ESPACIO SEGURO PARA HABLAR SOBRE TUS EMOCIONES
          </h1>
          <h2 className={styles.textBottom}>
            {" "}
            CONTACTA CON UN PROFESIONAL AHORA MISMO
          </h2>
        </div>
        <div className={styles.buttonContainer}>
          {/* Botón de Psicólogos */}
          <button
            onClick={() => handleSectionClick("psychologists")}
            className={`${styles.gradientButton} ${
              activeSection === "psychologists" ? styles.active : ""
            }`}
          >
            <img
              src="/images/Centers/Psicólogos.png"
              alt="icono psicologo"
              className={styles.icon}
            />
            <h2 className={styles.buttonTitle}>Psicólogos</h2>
          </button>

          {/* Botón de Asociaciones */}
          <button
            onClick={() => handleSectionClick("associations")}
            className={`${styles.gradientButton} ${
              activeSection === "associations" ? styles.active : ""
            }`}
          >
            <img
              src="/images/Centers/Asociaciones.png"
              alt="icono asociacion"
              className={styles.icon}
            />
            <h2 className={styles.buttonTitle}>Asociaciones</h2>
          </button>
        </div>
      </div>
      <div ref={listRef}>
        {/* Solo se muestra una lista a la vez basado en activeSection */}
        {activeSection === "psychologists" && <ListCenters items={centers} />}
        {activeSection === "associations" && (
          <ListCenters items={associations} />
        )}
      </div>
    </section>
  );
}
