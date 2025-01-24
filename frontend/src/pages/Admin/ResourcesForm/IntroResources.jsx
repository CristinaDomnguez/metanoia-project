import style from "./IntroResources.module.css";
import { FormResources } from "./FormResources";
import { useEffect, useState } from "react";
import PodcastsAndVideos from "../../Resources/PodcastsAndVideos/PodcastsAndVideos";

export function IntroResources() {
  const [resources, setResources] = useState([]);
  const [setError] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/resources/");
        if (!response.ok) {
          throw new Error("Error al cargar los recursos");
        }
        const data = await response.json();

        // const videos = data.filter((resource) => resource.type === "video");
        // const podcasts = data.filter((resource) => resource.type === "podcast");
        console.log(data);
        setResources(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchResources();
  }, []);

  return (
    <>
      <h1>Listado de Recursos</h1>
      <PodcastsAndVideos items={resources} />
      <FormResources />
    </>
  );
}
