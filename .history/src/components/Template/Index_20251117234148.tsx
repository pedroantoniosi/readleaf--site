import styles from "./Index.module.css";
import Container from "../Container/Index";

interface TemplateProps {
  title: string;
  subtitle?: string;
  className?: string; // classes adicionais
  children: 
}

const Template = ({ title, subtitle, className }: TemplateProps) => {
  return (
    <template
      className={`${styles["template"]} ${className ? className : ""}`.trim()}
    >
      <Container>
        <h2 className={styles["templateTitle"]}>{title}</h2>
        <h2 className={styles["templateSubTitle"]}>{subtitle}</h2>
        <div
          className={`${styles["templateContent"]} ${
            className ? className : ""
          }`.trim()}
        ></div>
      </Container>
    </template>
  );
};

export default Template;
