import styles from "./Index.module.css";
import Button from "../Button/Index";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className="logo">Logo</div>
        <ul className="nav-list"></ul>
        <div className="row gap-1">
          <Button />
          <Button />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
