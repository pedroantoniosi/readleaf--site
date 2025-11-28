import styles from "./Index.module.css"; // ⬅️ agora importando SCSS

const Hero = () => {
  return (
    <section className={styles.heroContainer} role="banner" aria-label="Hero">
      <div className={styles.heroContent}>
        <div className={styles.heroCaption}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>
            Domine cada partida com som de alta precisão. Nossos headsets
            entregam potência, clareza e resposta imediata.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
