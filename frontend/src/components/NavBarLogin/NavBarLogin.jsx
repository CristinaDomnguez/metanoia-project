import styles from "./NavBarLogin.module.css";
import { NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { useContextAdmin } from "../../context/ContextAdmin";

export function NavBarLogin() {
  const { admin } = useContextAdmin();

  return (
    <nav className={styles.navbar}>
      {/* Grupo de enlaces del lado izquierdo */}
      <div className={`${styles.navGroup} ${styles.navGroupLeft}`}>
        {/* Contenedor del logo central */}
        <NavLink to="/admin" className={styles.navLinkLogo}>
          <div className={styles.logoContainer}>
            <img src="/public/favicon.png" alt="Logo" className={styles.logo} />
          </div>
        </NavLink>

        {/* Grupo de enlaces del lado derecho */}
        <div
          className={`${styles.navGroup} ${styles.navGroupRight} ${
            admin ? "" : styles.noAdmin
          }`}
        >
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
            to="/admin"
            end
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.activeLink}`
                : styles.navLink
            }
          >
            <VscAccount />
            {admin || "ACCESO"}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
