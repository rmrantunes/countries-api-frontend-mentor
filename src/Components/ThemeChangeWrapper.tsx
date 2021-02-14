import React from "react";

interface IThemeChangeWrapper {
  rounded?: boolean;
  className?: string;
}

export const ThemeChangeWrapper: React.FC<IThemeChangeWrapper> = ({
  children,
  rounded = false,
  className = "",
}) => {
  return (
    <div
      className={`
      ${className} 
      ${
        rounded ? "rounded-lg" : "" 
      } bg-light-white dark:bg-dark-blue-2 min-w-full min-h-full`}
    >
      {children}
    </div>
  );
};
