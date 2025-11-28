import { useTheme } from "../ThemeContext";

export function MyButton() {
  const { theme } = useTheme();

  return (
    <button
      style={{
        color: theme === "light" ? "#000" : "#fff",
        background: theme === "light" ? "#fff" : "#333",
      }}
    >
      Botão
    </button>
  );
}
