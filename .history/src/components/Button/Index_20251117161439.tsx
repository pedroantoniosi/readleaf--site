import styles from "./Index.module.css";

interface ButtonProps {
  text: string;
  className?: string; // classes adicionais
}

const Button = ({ text, className }: ButtonProps) => {
  return (
    <button
      className={`${styles["button"]} ${className ? className : ""}`.trim()}
    >
      {text}
    </button>
  );
};

export default Button;
