import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext({
  admin: null,
});

const LOCAL_STORAGE_KEY = "admin";

export function ContextAdmin({ children }) {
  const [admin, setAdmin] = useState(
    localStorage.getItem(LOCAL_STORAGE_KEY) || null
  );

  useEffect(() => {
    if (admin) {
      localStorage.setItem(LOCAL_STORAGE_KEY, admin);
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }, [admin]);

  return (
    <Context.Provider value={{ admin, setAdmin }}>{children}</Context.Provider>
  );
}

export function useContextAdmin() {
  const context = useContext(Context);
  if (!context) {
    throw new Error('Usa "useContextAdmin" dentro de "ContextAdmin"');
  }
  return context;
}
