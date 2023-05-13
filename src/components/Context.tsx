// Context.tsx
import { createContext, useState, useEffect, ReactNode } from "react";

type ContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export const Context = createContext<ContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

type ContextProviderProps = {
  children: ReactNode;
};

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  useEffect(() => {
    // 1. 전체 CSS Light <-> Dark Toggle
    const linkElement = document.getElementById(
      "main-light-css"
    ) as HTMLLinkElement;

    console.log(linkElement);

    if (linkElement) {
      linkElement.href = isDarkMode
        ? "/src/main-dark.css"
        : "/src/main-light.css";
    }

    // 2. Markdown Code Block Light <-> Dark Toggle
    const styleLink = document.createElement("link");

    styleLink.href = isDarkMode
      ? "https://cdn.jsdelivr.net/npm/highlight.js@10.7.2/styles/atom-one-dark.min.css"
      : "https://cdn.jsdelivr.net/npm/highlight.js@10.7.2/styles/github.min.css";
    styleLink.rel = "stylesheet";
    document.head.appendChild(styleLink);

    return () => {
      document.head.removeChild(styleLink);
    };
  }, [isDarkMode]);

  const contextValue: ContextType = {
    isDarkMode,
    toggleTheme,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
