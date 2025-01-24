import { useState, useEffect } from "react";
import AdminResourcesList from "./AdminResourcesList";

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
        setResources(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchResources();
  }, []);

  // Funciones placeholder para manejar operaciones CRUD
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/resources/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setResources(resources.filter((resource) => resource.id !== id));
      }
    } catch (error) {
      console.error("Error al eliminar recurso:", error);
    }
  };

  const handleEdit = async (updatedResource) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/resources/${updatedResource.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedResource),
        }
      );
      if (response.ok) {
        setResources(
          resources.map((resource) =>
            resource.id === updatedResource.id ? updatedResource : resource
          )
        );
      }
    } catch (error) {
      console.error("Error al actualizar recurso:", error);
    }
  };

  const handleAdd = async (newResource) => {
    try {
      const response = await fetch("http://localhost:8080/api/resources/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newResource),
      });
      if (response.ok) {
        const addedResource = await response.json();
        setResources([...resources, addedResource]);
      }
    } catch (error) {
      console.error("Error al añadir recurso:", error);
    }
  };

  return (
    <>
      <AdminResourcesList
        items={resources}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onAdd={handleAdd}
      />
    </>
  );
}
