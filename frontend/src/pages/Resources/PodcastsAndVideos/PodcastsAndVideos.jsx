import { useState, useEffect } from "react";
import styles from "./PodcastsAndVideos.module.css"; // Importar el CSS Module

export default function PodcastsAndVideos() {
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

        // Filtrado de tipo de recursos
        const videos = data.filter((resource) => resource.type === "video");
        const podcasts = data.filter((resource) => resource.type === "podcast");

        setResources({
          videos,
          podcasts,
        });
      } catch (error) {
        setError(error.message);
      }
    };

    fetchResources();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {/* Sección de Vídeos */}
      <section
        id="videos-section"
        className={`${styles.videosSection} ${styles.layoutBox}`}
      >
        <h3 className={styles.heading}>Vídeos</h3>
        <div className={styles.videosContainer}>
          {resources.videos.map((video) => (
            <div key={video.id} className={styles.videos}>
              <h4 className={styles.title}>Título: {video.title}</h4>
              <p className={styles.description}>{video.description}</p>
              <p className={styles.imageUrl}>
                Url de la Imagen: {video.imageUrl}
              </p>
              {video.url && (
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Ver video
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Podcasts */}
      <section
        id="podcasts-section"
        className={`${styles.podcastsSection} ${styles.layoutBox}`}
      >
        <h3 className={styles.heading}>Podcasts</h3>
        <div className={styles.podcastsContainer}>
          {resources.podcasts.map((podcast) => (
            <div key={podcast.id} className={styles.podcast}>
              <h4 className={styles.title}>{podcast.title}</h4>
              <p className={styles.description}>{podcast.description}</p>
              <p className={styles.imageUrl}>Url Imagen: {podcast.imageUrl}</p>
              {podcast.url && (
                <a
                  href={podcast.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Escuchar podcast
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
