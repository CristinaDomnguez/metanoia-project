import { TextInicio } from "./TextInicio/TextInicio";
import styles from "./Centers.module.css";
import { useEffect, useState } from "react";

export function Centers() {
  const [centers, setCenters] = useState([]);
  const [associations, setAssociations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Llamada al backend para obtener los datos
    const fetchCenters = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/centers/");
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        // Dividir los datos en psicólogos y asociaciones
        const psychologists = data.filter(
          (center) => center.type === "psicologo/a"
        );
        const associations = data.filter(
          (center) => center.type === "asociacion"
        );
        setCenters(psychologists);
        setAssociations(associations);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCenters();
  }, []);

  if (error) {
    return <div className={styles.mainContainer}>Error: {error}</div>;
  }

  return (
    <div className={styles.mainContainer}>
      <TextInicio centers={centers} associations={associations} />
    </div>
  );
}
