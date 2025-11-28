import styles from "./Index.module.css";
import Button from "../Button/Index";

const Navbar = () => {
  return (
    <>
      <nav className={styles.NavbarContainer}>
        <div className="logo">Logo</div>
        <ul className="nav-list"></ul>
        <div className="row gap-1"></div>
      </nav>
    </>
  );
};

export default Navbar;
