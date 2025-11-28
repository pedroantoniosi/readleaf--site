import styles from "./index.module.css";

interface TemplateProps {
  columns: number;
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
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: rows ? `repeat(${rows}, 1fr)` : undefined,
        gap,
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
