import styles from "./Index.module.css";

interface ContainerProps {
  className?: string;
}

const Container = ({ className }: ContainerProps) => {
  return (
    <div
      className={`${styles["container"]} ${className ? className : ""}`.trim()}
    ></div>
  );
};

export default Container;
