import styles from "./index.module.css";

interface TemplateProps {
  columns: string;
  rows?: string;
  gap?: string;
  children?: React.ReactNode;
  className?: string; // classes adicionais
}

const Grid = ({ columns, rows, gap = "1rem", children }: TemplateProps) => {
  return (
    <div
      className={styles.grid}
      style={{
        gridTemplateColumns: `${columns}`,
        gridAutoRows: rows,
        gap,
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
