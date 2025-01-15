import "./NavBar.css";
import { NavLink } from "react-router-dom";
export function NavBar() {
  return (
    <nav className="navbar">
      {/* Grupo de enlaces del lado izquierdo */}
      <div className="nav-group left">
        <NavLink
          to="/recursos"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          RECURSOS
        </NavLink>
        <span className="separator">|</span>
        <NavLink
          to="/centros"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          CENTROS
        </NavLink>
      </div>

      {/* Contenedor del logo central */}
      <NavLink to="/" className="nav-link-logo">
        <div className="logo-container">
          <img src="/images/logo_small.png" alt="Logo" className="logo" />
        </div>
      </NavLink>

      {/* Grupo de enlaces del lado derecho */}
      <div className="nav-group right">
        <NavLink
          to="/eventos"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          EVENTOS
        </NavLink>
        <span className="separator">|</span>
        <NavLink
          to="/ayudas"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          AYUDAS
        </NavLink>
      </div>
    </nav>
  );
}
