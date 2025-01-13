import ReactDOM from "react-dom/client"; // Asegúrate de importar ReactDOM
import { StrictMode } from "react";
import App from "./App.jsx";

// Renderizar el enrutador en la raíz
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
