import styles from "./Index.module.css";
import Navbar from "../../components/Navbar/Index";
import Button from "../../components/Button/Index";
import Container from "../../components/Container/Index";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              aliquam totam at!
            </p>
            <Button className={styles.homeButton} text="Viaje Agora" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
