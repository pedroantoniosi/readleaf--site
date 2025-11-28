import styles from "./Index.module.css";
import Container from "../Container/Index";

interface TemplateProps {
  title: string;
  subtitle?: string;
  className?: string; // classes adicionais
  children: React.ReactNode;
}

const Template = ({ title, subtitle, className, children }: TemplateProps) => {
  return (
    <template
      className={`${styles["template"]} ${className ? className : ""}`.trim()}
    >
      <Container>
        <div className="templateCaption col gap-1 my-1">
          <h2 className={styles["templateTitle"]}>{title}</h2>
          <p className={styles["templateSubTitle"]}>{subtitle}</p>
        </div>
        <div
          className={`${styles["templateContent"]} ${
            className ? className : ""
          }`.trim()}
        >
          {children}
        </div>
      </Container>
    </template>
  );
};

export default Template;
