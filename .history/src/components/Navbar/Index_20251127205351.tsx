// src/pages/Home/Home.tsx
import styles from "./Index.module.css";
import { useTheme } from "../../hooks/useTheme";

// Imagens
import AboutLight from "../../assets/tour.png";
import AboutDark from "../../assets/tour-dark.png";

const Home = () => {
  const { theme } = useTheme();

  return (
    <main className={styles.home}>
      <section className={styles.aboutBanner}>
        <img
          src={theme === "dark" ? AboutDark : AboutLight}
          alt="Banner Tour"
        />
      </section>
    </main>
  );
};

export default Home;
