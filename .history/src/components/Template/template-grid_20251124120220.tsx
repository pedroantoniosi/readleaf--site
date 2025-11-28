import styles from "./index.module.css";

interface TemplateProps {
  columns: number;
  gap: string;
  children?: React.ReactNode;
  className?: string; // classes adicionais
}

const Grid = ({ columns, gap = "1rem", children }: TemplateProps) => {
  return (
    <div
      className={styles.grid}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap,
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
