import styles from "./Index.module.css";

interface ContainerProps {
  className?: string;
  children?: string;
}

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={`${styles["container"]} ${className ? className : ""}`.trim()}
    >
      {children}
    </div>
  );
};

export default Container;
