import styles from "./Index.module.css";
import Button from "../Button/Index";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className="logo">Logo</div>
        <ul className="nav-list">
          <li className="nav-link">Home</li>
          <li className="nav-link">Hosting</li>
        </ul>
        <div className="row gap-1">
          <Button />
          <Button />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
