import { useEffect, useState } from "react";
import { StyledThemeChanger } from "./styles";

interface IProps {
  type: string;
}

export const ThemeChanger = ({ type }: IProps) => {
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return <StyledThemeChanger type={type} onClick={handleTheme} />;
};
