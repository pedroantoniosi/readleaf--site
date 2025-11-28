import styles from "./Index.module.css";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string; // Texto opcional (permite usar apenas ícones)
  className?: string; // Classes adicionais
}

const Button = ({ text, className, children, ...rest }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${className ?? ""}`.trim()}
      {...rest} // onClick, aria-label, type, disabled, etc.
    >
      {text || children}
    </button>
  );
};

export default Button;
