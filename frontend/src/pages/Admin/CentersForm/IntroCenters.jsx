import styles from "./IntroCenters.module.css";
import { FormCenters } from "./FormCenters";
import { useEffect, useState } from "react";
import { Header } from "../Header/Header.jsx";
import { CardCenter } from "../../Centers/CardCenter/CardCenter.jsx";
import { ItemButtons } from "../ItemButtons/ItemButtons.jsx";

export function IntroCenters() {
  const [centers, setCenters] = useState([]);
  const [associations, setAssociations] = useState([]);
  const [setError] = useState(null);
  const items = [...centers, ...associations];

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
        const psychologists = data.filter((center) =>
          center.type.toLowerCase().startsWith("psicologo")
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

  return (
    <>
      <Header title="Lista de centros" />
      <section className={styles.sheetsSection}>
        <div className={styles.cardsContainer}>
          {items.map((center) => (
            <ItemButtons key={center.id}>
              <CardCenter center={center} />
            </ItemButtons>
          ))}
        </div>
      </section>
      <FormCenters />
    </>
  );
}
