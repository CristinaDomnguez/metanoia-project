import { useEffect, useState } from "react";

const getItems = async (object) => {
  const response = await fetch(`http://localhost:8080/api/${object}/`);
  if (!response.ok) {
    throw new Error("Error al cargar los recursos");
  }
  const data = await response.json();
  return data;
};

export function useData(object) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getItems(object).then(setData).catch(setError);
  }, []);

  // Funciones placeholder para manejar operaciones CRUD
  const handleDelete = async (id) => {
    const response = await fetch(
      `http://localhost:8080/api/${object}/delete/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      setData(data.filter((item) => item.id !== id));
    }
  };

  const handleEdit = async (updated) => {
    const response = await fetch(
      `http://localhost:8080/api/${object}/update/${updated.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updated),
      }
    );
    if (response.ok) {
      setData(data.map((item) => (item.id === updated.id ? updated : item)));
    }
  };

  const handleAdd = async (newItem) => {
    const response = await fetch(`http://localhost:8080/api/${object}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...newItem,
        user: {
          id: 1,
        },
      }),
    });
    if (response.ok) {
      const addedItem = await response.json();
      setData([...data, addedItem]);
    }
  };

  return {
    data,
    error,
    handleAdd,
    handleEdit,
    handleDelete,
  };
}
