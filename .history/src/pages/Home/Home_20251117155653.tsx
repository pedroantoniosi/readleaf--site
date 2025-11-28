import styles from "./Index.module.css";
import Navbar from "../../components/Navbar/Index";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className={styles.homeContainer}>
        <div className={styles.homeCaption}>
          <h2 className={styles.homeTitle}>Viaje agora mesmo por todo Japão</h2>
        </div>
      </section>
    </>
  );
};

export default Home;
