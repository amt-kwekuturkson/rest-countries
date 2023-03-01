import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("light");
  const [imo, setImo] = useState('sunny');

  useEffect(() => {
    document.documentElement.setAttribute("dark-theme", theme);
  }, [theme]);

  function onToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    setImo(imo === "sunny" ? "moon" : "sunny");
  }


  const isDarkTheme = theme === "dark";
  const isDarkImo = imo === "moon";
  
  return { isDarkTheme, onToggleTheme, isDarkImo};
};
