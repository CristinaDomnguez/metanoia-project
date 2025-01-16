import { useState, useEffect } from "react";
import styles from "./PodcastsAndVideos.module.css";

export default function PodcastsAndVideos() {
  const [resources, setResources] = useState({
    videos: [],
    podcasts: [],
  });
  const [activeSection, setActiveSection] = useState(null); // Controla qué sección está activa
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

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section); // Alterna entre abrir/cerrar
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.mainContainer}>
      {/* Botones de sección */}
      <div className={styles.buttonsContainer}>
        <div
          className={`${styles.sectionToggle} ${
            activeSection === "videos" ? styles.active : ""
          }`}
          onClick={() => toggleSection("videos")}
        >
          <h3 className={styles.titleSectionToggle}>Vídeos</h3>
        </div>
        <div
          className={`${styles.sectionToggle} ${
            activeSection === "podcasts" ? styles.active : ""
          }`}
          onClick={() => toggleSection("podcasts")}
        >
          <h3 className={styles.titleSectionToggle}>Podcasts</h3>
        </div>
      </div>

      {/* Contenido dinámico */}
      {activeSection === "videos" && (
        <section className={styles.videosContainer}>
          {resources.videos.map((video) => (
            <div key={video.id} className={styles.videos}>
              <img
                src={video.imageUrl}
                alt={`Imagen de ${video.title}`}
                className={styles.image}
              />
              <div className={styles.textContent}>
                <h4 className={styles.title}>{video.title}</h4>
                <p>
                  Título: Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Autem, officiis.
                </p>
                {/* <p className={styles.description}>{video.description}</p> */}
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Ver video
                </a>
              </div>
            </div>
          ))}
        </section>
      )}

      {activeSection === "podcasts" && (
        <section className={styles.podcastsContainer}>
          {resources.podcasts.map((podcast) => (
            <div key={podcast.id} className={styles.podcast}>
              <img
                src={podcast.imageUrl}
                alt={`Imagen de ${podcast.title}`}
                className={styles.image}
              />
              <div className={styles.textContent}>
                <h4 className={styles.title}>{podcast.title}</h4>
                {/* <p className={styles.description}>{podcast.description}</p> */}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, mollitia.
                </p>
                <a
                  href={podcast.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Escuchar podcast
                </a>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
