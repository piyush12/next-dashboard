"use client";

import React from "react";

import Cookie from "js-cookie";

export type ITheme = "light" | "dark" | "system";

type ThemeContextProps = {
  theme: ITheme;
  onChangeTheme: (theme: ITheme) => void;
};

const ThemeContext = React.createContext<ThemeContextProps | undefined>(
  undefined,
);

const KEY = "color-theme";

const ThemeContextProvider = ({
  children,
  initialTheme,
}: {
  children: React.ReactNode;
  initialTheme: ITheme;
}) => {
  const [theme, setTheme] = React.useState<ITheme>(initialTheme);

  const onChangeTheme = (theme: ITheme) => {
    setTheme(theme);
    const el = document.documentElement;
    Cookie.set(KEY, theme);
    el.setAttribute("data-theme", theme === "system" ? "dark" : theme);
    el.setAttribute("class", theme === "system" ? "dark" : theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, onChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must wrap inside ThemeContextProvider");
  }
  return context;
};

export { ThemeContext, ThemeContextProvider, useTheme };
