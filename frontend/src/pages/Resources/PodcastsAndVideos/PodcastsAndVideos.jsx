import { useState, useEffect } from "react";
import styles from "./PodcastsAndVideos.module.css";
import { FaPlay } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";

export default function PodcastsAndVideos() {
  const [resources, setResources] = useState({
    videos: [],
    podcasts: [],
  });
  const [activeSection] = useState(null); // Controla qué sección está activa
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

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.mainContainer}>
      {/* Contenido dinámico */}
      {activeSection === "videos" && (
        <section className={styles.videosContainer}>
          {resources.videos.map((video) => (
            <div key={video.id} className={styles.videos}>
              <img
                src={video.imageUrl}
                alt={`Imagen de ${video.title}`}
                className={styles.imageVideos}
              />
              <div className={styles.textContent}>
                <h4 className={styles.title}>{video.title}</h4>
                <p className={styles.description}>{video.description}</p>
                <a
                  title="Ir a youtube"
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkVideo}
                >
                  <FaPlay className={styles.videosIcon} />
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
                className={styles.imagePodcasts}
              />
              <div className={styles.textContent}>
                <h4 className={styles.title}>{podcast.title}</h4>
                <p className={styles.description}>{podcast.description}</p>
                <a
                  title="Ir a spotify"
                  href={podcast.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkPodcast}
                >
                  <FaSpotify className={styles.spotifyIcon} />
                </a>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
