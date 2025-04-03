import { useState } from "react";
import styles from "./Admin.module.css";
import { useContextAdmin } from "../../context/ContextAdmin";
import { VscAccount } from "react-icons/vsc";

const USERS = [
  {
    username: "Gabriel",
    email: "gabriel@metanoia.es",
    password: "gabriel",
  },
  {
    username: "Cristina",
    email: "cristina@metanoia.es",
    password: "cristina",
  },
  {
    username: "Camilo",
    email: "camilo@metanoia.es",
    password: "camilo",
  },
  {
    username: "José Miguel",
    email: "josemiguel@metanoia.es",
    password: "josemiguel",
  },
];

export function Admin() {
  const { admin, setAdmin } = useContextAdmin();
  console.log("admin", admin);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setTimeout(() => {
      const user = USERS.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        setAdmin(user.username);
        setEmail("");
        setPassword("");
      } else {
        setError(true);
      }
      setLoading(false);
    }, 700);
  };

  const handleLogout = () => {
    setAdmin(null);
  };

  return (
    <div className={styles.main}>
      {admin ? (
        <div className={styles.logged}>
          <div className={styles.welcome}>
            <VscAccount />
            Bienvenido/a {admin}
          </div>
          <button className={styles.button} onClick={handleLogout}>
            {"Cerrar sesión"}
          </button>
        </div>
      ) : (
        <div className={styles.container}>
          <h1 className={styles.h1}>ACCESO</h1>
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <input
              type="email"
              name="email-metanoia"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              required
            />
            <button className={styles.button} disabled={loading} type="submit">
              {loading ? "Cargando..." : "Iniciar sesión"}
            </button>
            {error && (
              <span className={styles.error}>
                Usuario o contraseña incorrectos
              </span>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
