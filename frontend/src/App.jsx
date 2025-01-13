import { Home } from "./pages/Home/Home";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    /* Contenedor principal de la aplicación */
    <div className="app">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}
export default App;
