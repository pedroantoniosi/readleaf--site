import styles from "./Index.module.css";
import Navbar from "../../components/Navbar/Index";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className={styles.homeContainer}></section>
    </>
  );
};

export default Home;
