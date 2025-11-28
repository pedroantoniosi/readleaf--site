import styles from "./Index.module.css";
import Button from "../Button/Index";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className="container">
          <div className="logo">Logo</div>
          <ul className="nav-list row gap-1">
            <li className={styles.navLink}>Home</li>
            <li className={styles.navLink}>Guide</li>
          </ul>
          <div className="row gap-1">
            <Button className={styles.buttonRegister} text="Register" />
            <Button className={styles.buttonLogin} text="Login" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
