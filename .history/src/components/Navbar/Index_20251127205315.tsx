// src/components/Navbar/Navbar.tsx
import styles from "./Index.module.css";
import Button from "../Button/Index";
import Container from "../Container/Index";
import { useTheme } from "../../hooks/useTheme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
      <Container className="row gap-1 justify-between align-center">
        <div className="logo">Logo</div>

        <ul className="nav-list row gap-1">
          <li className={styles.navLink}>Inicio</li>
          <li className={styles.navLink}>Explorar</li>
          <li className={styles.navLink}>Guia</li>
          <li className={styles.navLink}>Atividades</li>
        </ul>

        <div className="row gap-1">
          <Button className={styles.buttonRegister} text="Entrar" />
          <Button className={styles.buttonLogin} text="Inscreva-se" />

          {/* Botão do tema */}
          <Button
            aria-label="Mudar Tema"
            onClick={toggleTheme}
            text=""
            className={theme === "dark" ? "bi bi-moon-fill" : "bi bi-moon"}
            style={{
              color: theme === "light" ? "black" : "white",
            }}
          />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
