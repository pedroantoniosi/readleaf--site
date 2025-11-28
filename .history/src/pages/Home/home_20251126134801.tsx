// import styles from "./Index.module.css";
import Navbar from "../../components/Navbar/Index";
import SwiperNav from "../../components/SliderNavigation/Index";
// import Button from "../../components/Button/Index";
// import Container from "../../components/Container/Index";
// import Template from "../../components/Template/Index";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="banner">
          <SwiperNav></SwiperNav>
        </div>
      </div>
    </>
  );
};

export default Home;
