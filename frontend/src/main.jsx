import ReactDOM from "react-dom/client"; // Asegúrate de importar ReactDOM
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import App from "./App.jsx";
import Resources from "./pages/Resources/Resources.jsx";

// Configuración del enrutador
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/recursos",
    element: <Resources />,
  },
]);

// Renderizar el enrutador en la raíz
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
