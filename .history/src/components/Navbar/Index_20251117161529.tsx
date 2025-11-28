import styles from "./Index.module.css";
import Button from "../Button/Index";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className="logo">Logo</div>
        <ul className="nav-list row gap-1">
          <li className="nav-link">Home</li>
          <li className="nav-link">Guide</li>
        </ul>
        <div className="row gap-1">
          <Button className={styles.navbar} text="Register" />
          <Button className={styles.navbar} text="Login" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
