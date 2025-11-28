import styles from "./Index.module.css";

interface TemplateProps {
  text: string;
  className?: string; // classes adicionais
}

const Template = ({ text, className }: TemplateProps) => {
  return (
    <template
      className={`${styles["button"]} ${className ? className : ""}`.trim()}
    >
      {text}
    </template>
  );
};

export default Template;
