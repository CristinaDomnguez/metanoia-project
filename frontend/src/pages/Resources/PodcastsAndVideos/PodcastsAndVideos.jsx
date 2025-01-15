import { useState, useEffect } from "react";
import "./PodcastsAndVideos.css";

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
      <section id="videos-section" className="videos-section layout-box">
        <h3>Vídeos</h3>
        <div className="videos-container">
          {resources.videos.map((video) => (
            <div key={video.id} className="videos">
              <h4>Título: {video.title}</h4>
              {/* Aquí puedes agregar más propiedades del video según tu API */}
              <p>{video.description}</p>
              <p>Url de la Imagen: {video.imageUrl}</p>
              {video.url && (
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  Ver video
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Podcasts */}
      <section id="podcasts-section" className="podcasts-section layout-box">
        <h3>Podcasts</h3>
        <div className="podcasts-container">
          {resources.podcasts.map((podcast) => (
            <div key={podcast.id} className="podcast">
              <h4>{podcast.title}</h4>
              {/* Aquí puedes agregar más propiedades del podcast según tu API */}
              <p>{podcast.description}</p>
              <p>Url Imagen: {podcast.imageUrl}</p>
              {podcast.url && (
                <a href={podcast.url} target="_blank" rel="noopener noreferrer">
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
