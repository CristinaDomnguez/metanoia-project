import { useEffect, useRef, useState } from "react";
import styles from "./ButtonResources.module.css";
import PodcastsAndVideos from "../PodcastsAndVideos/PodcastsAndVideos";

export function ButtonResources() {
  const listRef = useRef(null);
  const [resources, setResources] = useState({
    videos: [],
    podcasts: [],
  });
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/resources/");
        if (!response.ok) {
          throw new Error("Error al cargar los recursos");
        }
        const data = await response.json();

        const videos = data.filter((resource) => resource.type === "video");
        const podcasts = data.filter((resource) => resource.type === "podcast");

        setResources({ videos, podcasts });
      } catch (error) {
        setError(error.message);
      }
    };

    fetchResources();
  }, []);
  const [activeSection, setActiveSection] = useState("none");
  const toggleSection = (section) => {
    const nextSection = activeSection === section ? "none" : section;
    setActiveSection(nextSection);
    if (nextSection !== "none" && listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

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
      <div ref={listRef}>
        {/* Solo se muestra una lista a la vez basado en activeSection */}
        {activeSection === "videos" && (
          <PodcastsAndVideos items={resources.videos} />
        )}
        {activeSection === "podcasts" && (
          <PodcastsAndVideos items={resources.podcasts} />
        )}
      </div>
    </div>
  );
}
