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
    let link1 = document.getElementById("main-darkmode") as HTMLLinkElement;

    if (link1) {
      document.head.removeChild(link1);
    }

    link1 = document.createElement("link");
    link1.id = "main-darkmode";
    link1.rel = "stylesheet";
    link1.href = isDarkMode ? "./css/main-dark.css" : "./css/main-light.css";
    document.head.appendChild(link1);

    // 2. Markdown Code Block Light <-> Dark Toggle
    let link2 = document.getElementById("md-darkmode") as HTMLLinkElement;

    if (link2) {
      document.head.removeChild(link2);
    }

    link2 = document.createElement("link");
    link2.id = "md-darkmode";
    link2.rel = "stylesheet";
    link2.href = isDarkMode
      ? "https://cdn.jsdelivr.net/npm/highlight.js@10.7.2/styles/atom-one-dark.min.css"
      : "https://cdn.jsdelivr.net/npm/highlight.js@10.7.2/styles/github.min.css";
    document.head.appendChild(link2);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
    };
  }, [isDarkMode]);

  const contextValue: ContextType = {
    isDarkMode,
    toggleTheme,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
