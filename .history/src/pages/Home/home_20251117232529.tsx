import styles from "./Index.module.css";
import Navbar from "../../components/Navbar/Index";
import Button from "../../components/Button/Index";
import Container from "../../components/Container/Index";
import Template from "../../components/Template/Index";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className={styles.homeContainer}>
        <Container className={styles.bannerBackground}>
          <div className={styles.homeCaption}>
            <h2 className={styles.homeTitle}>
              Viaje agora mesmo por todo Japão
            </h2>
            <p className={styles.homeText}>
              Encontre os melhores hoteis e lugares para visitar no Japão.
            </p>
            <Button className={styles.homeButton} text="Producurar" />
          </div>
        </Container>
      </section>
      <Template title="Lugares Mais Populares"></Template>
      <Template title="Explore Mais"></Template>
    </>
  );
};

export default Home;
