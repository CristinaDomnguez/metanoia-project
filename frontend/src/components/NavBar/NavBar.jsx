import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className={styles.navbar}>
      {/* Grupo de enlaces del lado izquierdo */}
      <div className={`${styles.navGroup} ${styles.navGroupLeft}`}>
        <NavLink
          to="/recursos"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
          }
        >
          RECURSOS
        </NavLink>
        <span className={styles.separator}>|</span>
        <NavLink
          to="/centros"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
          }
        >
          CENTROS
        </NavLink>
      </div>

      {/* Contenedor del logo central */}
      <NavLink to="/" className={styles.navLinkLogo}>
        <div className={styles.logoContainer}>
          <img
            src="/images/logo_small.png"
            alt="Logo"
            className={styles.logo}
          />
        </div>
      </NavLink>

      {/* Grupo de enlaces del lado derecho */}
      <div className={`${styles.navGroup} ${styles.navGroupRight}`}>
        <NavLink
          to="/eventos"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
          }
        >
          EVENTOS
        </NavLink>
        <span className={styles.separator}>|</span>
        <NavLink
          to="/ayudas"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
          }
        >
          AYUDAS
        </NavLink>
      </div>
    </nav>
  );
}
