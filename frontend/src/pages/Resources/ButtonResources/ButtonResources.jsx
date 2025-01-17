import React, { useState } from "react";
import styles from "./ButtonResources.module.css";

export function ButtonResources() {
  const [activeSection, setActiveSection] = useState("none");
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonsContainer}>
        <div
          className={`${styles.sectionToggle} ${
            activeSection === "videos" ? styles.active : ""
          }`}
          onClick={() => toggleSection("videos")}
        >
          <h3 className={styles.titleSectionToggle}>Vídeos</h3>
          {/* Ícono PNG añadido */}
          <img
            src="/images/Resources/resourceIcon1.png"
            alt="icono video"
            className={styles.icon}
          />
        </div>
        <div
          className={`${styles.sectionToggle} ${
            activeSection === "podcasts" ? styles.active : ""
          }`}
          onClick={() => toggleSection("podcasts")}
        >
          <h3 className={styles.titleSectionToggle}>Podcasts</h3>
          {/* Ícono PNG añadido */}
          <img
            src="/images/Resources/resourceIcon2.png"
            alt="icono podcasts"
            className={styles.icon}
          />
        </div>
      </div>
    </div>
  );
}
