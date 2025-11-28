import styles from "./Index.module.css";

interface TemplateProps {
  title: string;
  className?: string; // classes adicionais
}

const Template = ({ text, className }: TemplateProps) => {
  return (
    <template
      className={`${styles["tempolate"]} ${className ? className : ""}`.trim()}
    >
      {text}
    </template>
  );
};

export default Template;
