import styles from "./Index.module.css";
import Button from "../Button/Index";
import Container from "../Container/Index";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <Container className="row gap-1 justify-between align-center">
          <div className="logo">Logo</div>
          <ul className="nav-list row gap-1">
            <li className={styles.navLink}>Home</li>
            <li className={styles.navLink}>Explore</li>
            <li className={styles.navLink}>Guide</li>
            <li className={styles.navLink}>Activity</li>
          </ul>
          <div className="row gap-1">
            <Button className={styles.buttonRegister} text="Sign In" />
            <Button className={styles.buttonLogin} text="Sign Up" />
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
