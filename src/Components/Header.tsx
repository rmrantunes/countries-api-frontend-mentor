import React, { useCallback, useState } from "react";
import { FiMoon } from "react-icons/fi";
import { Container } from "./Container";
import { ThemeChangeWrapper } from "./ThemeChangeWrapper";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleThemeModes = useCallback(() => {
    setDarkMode((currentMode) => !currentMode);
    document.documentElement.classList.toggle("dark");
  }, []);

  return (
    <header className="shadow-md">
      <ThemeChangeWrapper>
        <Container>
          <div className="flex justify-between items-center py-4 md:py-6 font-bold">
            <div>
              <a href="/" className="text-xl md:text-2xl">
                Where in the world?
              </a>
            </div>
            <button
              type="button"
              className="flex items-center space-x-2"
              onClick={handleThemeModes}
            >
              <FiMoon size={24} className={darkMode ? "fill-current" : ""} />
              <span className="font-bold block text-base md:text-lg">
                Dark Mode
              </span>
            </button>
          </div>
        </Container>
      </ThemeChangeWrapper>
    </header>
  );
};
