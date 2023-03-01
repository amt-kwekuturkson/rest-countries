import React from "react";
import moon from "../svgs/moon-outline.svg";
import sunny from "../svgs/sunny-outline.svg";
import { useTheme } from "../hooks/useTheme.tsx";

export const Header = () => {
  const { onToggleTheme, isDarkTheme, isDarkImo } = useTheme();

  return (
    <header className="header">
      <div className="header__container">
        <h1>Where in the world?</h1>
        <div className="theme_switch" onClick={onToggleTheme}>
          <img id="theme_logo" src={isDarkImo ? sunny : moon} alt="logo" />
          <p className = 'mode' >
            {isDarkTheme ? "Light Mode" : "Dark Mode"}
          </p>
        </div>
      </div>
    </header>

  );
};
