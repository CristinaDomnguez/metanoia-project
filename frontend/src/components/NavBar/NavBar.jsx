import "./NavBar.css";
import { Link } from "react-router-dom";
export function NavBar() {
  return (
    <nav className="navbar">
      {/* Grupo de enlaces del lado izquierdo */}
      <div className="nav-group left">
        <Link to="/recursos" className="nav-link">
          RECURSOS
        </Link>
        <span className="separator">|</span>
        <Link to="/centros" className="nav-link">
          CENTROS
        </Link>
      </div>

      {/* Contenedor del logo central */}
      <div className="logo-container">
        <img src="/images/logo_small.png" alt="Logo" className="logo" />
      </div>

      {/* Grupo de enlaces del lado derecho */}
      <div className="nav-group right">
        <Link to="/eventos" className="nav-link">
          EVENTOS
        </Link>
        <span className="separator">|</span>
        <Link to="/ayudas" className="nav-link">
          AYUDAS
        </Link>
      </div>
    </nav>
  );
}
