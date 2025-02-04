"use client";

import React, { useEffect, useRef } from "react";

import Cookie from "js-cookie";

export type ITheme = "light" | "dark" | "system";

type ThemeContextProps = {
  theme: ITheme;
  onChangeTheme: (theme: ITheme) => void;
};

function getSystemTheme(): ITheme {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
}

const ThemeContext = React.createContext<ThemeContextProps | undefined>(
  undefined,
);

const KEY = "color-theme";

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const savedTheme = Cookie.get("color-theme");
  const getTheme = (savedTheme as ITheme) || getSystemTheme();
  const initialTheme = getTheme === "system" ? "system" : getTheme;
  const [theme, setTheme] = React.useState<ITheme>(initialTheme);
  const ref = useRef(false);

  useEffect(() => {
    if (!ref.current && initialTheme) {
      onChangeTheme(initialTheme);
      ref.current = true;
    }
  }, [initialTheme]);

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
