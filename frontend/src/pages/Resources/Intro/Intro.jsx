import styles from "./Intro.module.css";
import { ButtonResources } from "../ButtonResources/ButtonResources";
import { useRef, useState } from "react";

export default function Intro() {
  const [activeSection, setActiveSection] = useState("none");
  const listRef = useRef(null);
  const toggleSection = (section) => {
    const nextSection = activeSection === section ? "none" : section;
    setActiveSection(nextSection);
    if (nextSection !== "none" && listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      {/* Sección introductoria */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <img
            src="/images/Resources/VídeosPodcast1.png"
            className={styles.image}
          />
          <div className={styles.textContainer}>
            <h1 className={styles.textTop}> DESCUBRE NUEVAS FORMAS</h1>
            <h2 className={styles.textBottom}> DE SENTIRTE BIEN</h2>
          </div>
          <div className={styles.buttonContainer}>
            <div
              className={`${styles.sectionToggle} ${
                activeSection === "videos" ? styles.active : ""
              }`}
              onClick={() => toggleSection("videos")}
            >
              <h3 className={styles.titleSectionToggle}>VÍDEOS</h3>
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
              <h3 className={styles.titleSectionToggle}>PODCASTS</h3>
              {/* Ícono PNG añadido */}
              <img
                src="/images/Resources/resourceIcon2.png"
                alt="icono podcasts"
                className={styles.icon}
              />
            </div>
          </div>
        </div>
        <ButtonResources activeSection={activeSection} listRef={listRef} />
      </section>
    </>
  );
}
