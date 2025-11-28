import React from "react";
import styles from "./Index.module.css"; // ⬅️ agora importando SCSS

interface HeroProps {
  title?: string;
  children?: React.ReactNode;
}

const Hero = ({ title }: HeroProps) => {
  return (
    <section className={styles.heroContainer} role="banner" aria-label="Hero">
      <Container>
        <div className={styles.heroContent}>
          <div className={styles.heroCaption}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>
              Domine cada partida com som de alta precisão. Nossos headsets
              entregam potência, clareza e resposta imediata.
            </p>
            <ButtonLight text="Ver Produtos" className="m-auto my-2" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
