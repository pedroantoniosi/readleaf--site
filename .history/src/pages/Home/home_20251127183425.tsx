// import styles from "./Index.module.css";
import Navbar from "../../components/Navbar/Index";
import SwiperNav from "../../components/SliderNavigation/Index";
import styles from "./index.module.css";
import TemplateAuto from "../../components/Template/template-auto";
import TemplateGrid from "../../components/Template/template-grid";
import Container from "../../components/Container/Index";
import Banner from "../../assets/banner.png";
import { useIsMobile } from "../../hooks/useIsMobile";

// import Button from "../../components/Button/Index";

const Home = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <Navbar />
      {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, repellat? */}
      <section className={styles.heroContainer}>
        <img className={styles.heroBanner} src={Banner} alt="" />
        <Container className={styles.heroContent}>
          <div className={styles.bbb}>Olá mundo</div>
          <div className={styles.ccc}>
            <SwiperNav sliderNumber={isMobile ? 1.5 : 4}>Olá mundo</SwiperNav>
          </div>
        </Container>
      </section>
      {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, repellat? */}

      {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, repellat? */}
      <section className={styles.tourContent}>
        <Container>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Top Places</h2>
            <div className={styles.sectionLine}></div>
          </div>
          <TemplateAuto
            mode="auto-fit"
            minWidth="300px"
            minHeight="400px"
            gap="3rem"
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
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Top Places</h2>
            <div className={styles.sectionLine}></div>
          </div>
          <TemplateAuto mode="auto-fit" minWidth="unset" minHeight="600px">
            <SwiperNav sliderNumber={isMobile ? 1.5 : 4}>Olá mundo</SwiperNav>
          </TemplateAuto>
        </Container>
      </section>
      {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, repellat? */}
      <section>
        <Container>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Best Hotels</h2>
            <div className={styles.sectionLine}></div>
          </div>
          <TemplateAuto mode="auto-fit" minWidth="unset" minHeight="600px">
            <SwiperNav sliderNumber={isMobile ? 1 : 4}>Olá mundo</SwiperNav>
          </TemplateAuto>
        </Container>
      </section>
      {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, repellat? */}
      <section className={styles.packagesContainer}>
        <Container>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>More Information</h2>
            <div className={styles.sectionLine}></div>
          </div>
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
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Top Places</h2>
            <div className={styles.sectionLine}></div>
          </div>
          <div className="row-md gap-2">
            <div className="flex-1 row align-end">
              <div className={styles.tourCaption}>
                <p className={styles.text}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Temporibus illum, repudiandae placeat adipisci sapiente ipsa
                  non consectetur voluptas obcaecati recusandae quis eos
                  aperiam, aliquam fugit distinctio minima, alias saepe omnis.
                </p>
              </div>
            </div>
            <div className={styles.card}></div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
