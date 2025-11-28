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
      {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, repellat? */}
      <section className={styles.heroContainer}>
        <img className={styles.heroBanner} src={Banner} alt="" />
        <Container className={styles.heroContent}>
          <div className={styles.bbb}></div>
          <div className={styles.ccc}>
            <SwiperNav></SwiperNav>
          </div>
        </Container>
      </section>
      {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, repellat? */}

      {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, repellat? */}
      <section className={styles.tourContent}>
        <Container>
          <h2 className={styles.sectionTitle}>Top Places</h2>
          <TemplateAuto
            mode="auto-fit"
            minWidth="350px"
            minHeight="400px"
            gap="4rem "
          >
            <div className={styles.cardTour}></div>
            <div className={styles.cardTour}></div>
            <div className={styles.cardTour}></div>
            <div className={styles.cardTour}></div>
          </TemplateAuto>
        </Container>
      </section>
      {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, repellat? */}
      <section>
        <Container>
          <h2 className={styles.sectionTitle}>Top Places</h2>
          <TemplateAuto mode="auto-fit" minWidth="unset" minHeight="600px">
            <SwiperNav></SwiperNav>
          </TemplateAuto>
        </Container>
      </section>
      {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, repellat? */}
      <section>
        <Container>
          <h2 className={styles.sectionTitle}>Top Places</h2>
          <TemplateAuto mode="auto-fit" minWidth="unset" minHeight="600px">
            <SwiperNav></SwiperNav>
          </TemplateAuto>
        </Container>
      </section>
      {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, repellat? */}
      <section className={styles.packagesContainer}>
        <Container>
          <h2 className={styles.sectionTitle}>About The </h2>
          <TemplateGrid columns="10fr 6fr 6fr" gap="1rem">
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
          </TemplateGrid>
        </Container>
      </section>
      {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, repellat? */}
      <section className={styles.tourContainer}>
        <Container>
          <h2 className={styles.sectionTitle}>About The Tour</h2>
          <TemplateGrid columns="1fr 1fr" gap="1rem">
            <div className="row align-end">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus illum, repudiandae placeat adipisci sapiente ipsa non
                consectetur voluptas obcaecati recusandae quis eos aperiam,
                aliquam fugit distinctio minima, alias saepe omnis.
              </p>
            </div>
            <div className={styles.card}></div>
          </TemplateGrid>
        </Container>
      </section>
    </>
  );
};

export default Home;
