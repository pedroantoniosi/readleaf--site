import styles from "./Index.module.css";

interface TemplateProps {
  title: string;
  className?: string; // classes adicionais
}

const Template = ({ title, className }: TemplateProps) => {
  return (
    <template
      className={`${styles["template"]} ${className ? className : ""}`.trim()}
    >
      <h2 className={styles["template-title"]}>{title}</h2>
      <div
        className={`${styles["templateContent"]} ${
          className ? className : ""
        }`.trim()}
      ></div>
    </template>
  );
};

export default Template;
