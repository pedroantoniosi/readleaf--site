import styles from "./Index.module.css";
import Button from "../Button/Index";

const Navbar = () => {
  return (
    <>
      <nav className={styles.NavbarContainer}>
        <div className="logo">Logo</div>
        <ul className="nav-list"></ul>
        <div></div>
      </nav>
    </>
  );
};

export default Navbar;
