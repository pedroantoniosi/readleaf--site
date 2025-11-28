import styles from "./Index.module.css";

interface ContainerProps {
  className?: string;
}

const Container = () => {
  return (
    <div
      className={`${styles["container"]} ${className ? className : ""}`.trim()}
    ></div>
  );
};

export default Container;
