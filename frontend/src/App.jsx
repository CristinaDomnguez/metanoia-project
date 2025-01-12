import { Home } from "./components/Home/Home";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    /* Contenedor principal de la aplicación */
    <div className="app">
      {/* Barra de navegación */}
      <NavBar />
      <Home />
    </div>
  );
}
export default App;
