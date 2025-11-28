import styles from "./Index.module.css";

interface ButtonProps {
  text?: string;
  className?: string; // classes adicionais
}

const button = ({ text, className }: ButtonProps) => {
  return (
    <button
      className={`${styles["btn-light"]} ${className ? className : ""}`.trim()}
    >
      {text}
    </button>
  );
};

export default button;
