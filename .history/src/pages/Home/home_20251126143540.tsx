// import styles from "./Index.module.css";
import Navbar from "../../components/Navbar/Index";
import SwiperNav from "../../components/SliderNavigation/Index";
import styles from "./index.module.css";
import TemplateAuto from "../../components/Template/template-auto";
import Container from "../../components/Container/Index";
// import Button from "../../components/Button/Index";

// import Template from "../../components/Template/Index";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className={styles.heroContainer}>
        <Container>
          <div className={styles.bbb}></div>
          <div className={styles.ccc}>
            <SwiperNav></SwiperNav>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <h2>About The Tour</h2>
          <TemplateAuto
            mode="auto-fit"
            gap="1rem"
            minWidth="350px"
            minHeight="600px"
          >
            <h1>Olá mundo</h1>
            <h1>Olá mundo</h1>
          </TemplateAuto>
        </Container>
      </section>
    </>
  );
};

export default Home;
