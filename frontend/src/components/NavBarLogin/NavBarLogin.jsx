import styles from "./NavBarLogin.module.css";
import { NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

export function NavBarLogin() {
  return (
    <nav className={styles.navbar}>
      {/* Grupo de enlaces del lado izquierdo */}
      <div className={`${styles.navGroup} ${styles.navGroupLeft}`}>
        {/* Contenedor del logo central */}
        <NavLink to="/admin" className={styles.navLinkLogo}>
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
          <span className={styles.separator}>|</span>

          <NavLink
            to="/admin/recursos"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.activeLink}`
                : styles.navLink
            }
          >
            RECURSOS
          </NavLink>

          <span className={styles.separator}>|</span>

          <NavLink
            to="/admin/centros"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.activeLink}`
                : styles.navLink
            }
          >
            CENTROS
          </NavLink>

          <span className={styles.separator}>|</span>

          <NavLink
            to="/admin/eventos"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.activeLink}`
                : styles.navLink
            }
          >
            EVENTOS
          </NavLink>

          <span className={styles.separator}>|</span>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.activeLink}`
                : styles.navLink
            }
          >
            LOGIN
            <VscAccount />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
