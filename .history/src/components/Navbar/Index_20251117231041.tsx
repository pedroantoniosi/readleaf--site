import styles from "./Index.module.css";
import Button from "../Button/Index";
import Container from "../Container/Index";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <Container>
          <div className="logo">Logo</div>
          <ul className="nav-list row gap-1">
            <li className={styles.navLink}>Home</li>
            <li className={styles.navLink}>Guide</li>
          </ul>
          <div className="row gap-1">
            <Button className={styles.buttonRegister} text="Register" />
            <Button className={styles.buttonLogin} text="Login" />
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
