import { useEffect, useState } from "react";
import styles from "./ButtonResources.module.css";
import PodcastsAndVideos from "../PodcastsAndVideos/PodcastsAndVideos";

export function ButtonResources({ activeSection, listRef }) {
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

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
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
