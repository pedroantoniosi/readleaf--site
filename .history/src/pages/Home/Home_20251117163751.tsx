import styles from "./Index.module.css";
import Navbar from "../../components/Navbar/Index";
import Button from "../../components/Button/Index";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className={styles.homeContainer}>
        <div className={styles.homeCaption}>
          <h2 className={styles.homeTitle}>Viaje agora mesmo por todo Japão</h2>
          <p className={styles.homeText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            aliquam totam at!
          </p>
          <Button text="View Now" />
        </div>
      </section>
    </>
  );
};

export default Home;
