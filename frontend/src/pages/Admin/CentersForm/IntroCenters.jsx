import style from "./IntroCenters.module.css";
import { FormCenters } from "./FormCenters";
import { ListCenters } from "../../Centers/ListCenters/ListCenters.jsx";
import { useEffect, useState } from "react";

export function IntroCenters() {
  const [centers, setCenters] = useState([]);
  const [associations, setAssociations] = useState([]);
  const [setError] = useState(null);

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
      <h1>Lista de Centros</h1>
      <ListCenters items={[...centers, ...associations]} />
      <FormCenters />
    </>
  );
}
