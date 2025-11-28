import styles from "./Index.module.css";
import Button from "../Button/Index";
import Container from "../Container/Index";
import { useState, useEffect } from "react";

type modeTheme = "dark" | "light";

const Navbar = () => {
  const [theme, setTheme] = useState<modeTheme>("light");

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    console.log("Tema alterado para:", theme === "dark" ? "light" : "dark");
    return () => {
      console.log("Esse componente será atualizado");
    };
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav className={styles.navbar}>
      <Container className="row gap-1 justify-between align-center">
        <div className="logo">Logo</div>

        <ul className="nav-list row gap-1">
          <li className={styles.navLink}>Início</li>
          <li className={styles.navLink}>Explorar</li>
          <li className={styles.navLink}>Guia</li>
          <li className={styles.navLink}>Atividades</li>
        </ul>

        <div className="row gap-1">
          <Button className={styles.buttonRegister} text="Entrar" />
          <Button className={styles.buttonLogin} text="Inscreva-se" />
          <Button
            aria-label="Mudar Tema"
            className={theme === "dark" ? "bi bi-moon-fill" : "bi bi-moon"}
            style={{ color: theme === "red" ? "dark" : "inherit" }}
            text=""
            onClick={handleClick}
          />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
