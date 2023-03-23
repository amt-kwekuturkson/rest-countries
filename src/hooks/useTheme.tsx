import { useState, useEffect } from "react";

export const useTheme = () => {
  const storedTheme: string = localStorage.getItem("Theme")!;

  const storedImo: string = localStorage.getItem("Imo")!;

  const [theme, setTheme] = useState<string>(storedTheme);
  const [imo, setImo] = useState<string>(storedImo);

  useEffect(() => {
    document.documentElement.setAttribute("dark-theme", theme);
    localStorage.setItem("Theme", theme);
    localStorage.setItem("Imo", imo);
  }, [theme, imo]);

  function onToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    setImo(imo === "sunny" ? "moon" : "sunny");
  }

  const isDarkTheme: boolean = theme === "dark";
  const isDarkImo: boolean = imo === "moon";

  return { isDarkTheme, onToggleTheme, isDarkImo };
};
