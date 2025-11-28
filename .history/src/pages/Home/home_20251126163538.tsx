// import styles from "./Index.module.css";
import Navbar from "../../components/Navbar/Index";
import SwiperNav from "../../components/SliderNavigation/Index";
import styles from "./index.module.css";
import TemplateAuto from "../../components/Template/template-auto";
import TemplateGrid from "../../components/Template/template-grid";
import Container from "../../components/Container/Index";
import Banner from "../../assets/banner.png";
// import Button from "../../components/Button/Index";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className={styles.heroContainer}>
        <img className={styles.heroBanner} src={Banner} alt="" />
        <Container className={styles.heroContent}>
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
            className={styles.tourContent}
            mode="auto-fit"
            gap="4rem"
            minWidth="250px"
          >
            <h1 className={styles.cardTour}>Olá mundo</h1>
            <h1 className={styles.cardTour}>Olá mundo</h1>
            <h1 className={styles.cardTour}>Olá mundo</h1>
            <h1 className={styles.cardTour}>Olá mundo</h1>
          </TemplateAuto>
        </Container>
      </section>
      <section className={styles.packagesContainer}>
        <Container>
          <TemplateGrid columns="10fr 6fr 6fr" rows="600px" gap="1rem">
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
          </TemplateGrid>
        </Container>
      </section>
    </>
  );
};

export default Home;
