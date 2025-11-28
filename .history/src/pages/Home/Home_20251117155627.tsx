import styles from "./Index.module.css";
import Navbar from "../../components/Navbar/Index";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className={styles.homeContainer}>
        <div className={styles.homeCaption}></div>
      </section>
    </>
  );
};

export default Home;
