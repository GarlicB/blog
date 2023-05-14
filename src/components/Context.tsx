import { createContext, useState, useEffect, ReactNode } from "react";
import {
  MAIN_LIGHT_CSS,
  MAIN_DARK_CSS,
  MD_LIGHT_CSS,
  MD_DARK_CSS,
} from "./Constants";

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
  const storedDarkMode = localStorage.getItem("isDarkMode"); // 로컬스토리지에서 저장된 값 가져오기
  const initialDarkMode = storedDarkMode ? JSON.parse(storedDarkMode) : false; // 가져온 값이 있을 경우 파싱, 없을 경우 false로 초기화

  const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);

  const toggleTheme = () => {
    setIsDarkMode((prevIsDarkMode: boolean) => !prevIsDarkMode);
  };

  // CSS 링크를 생성하고 추가하는 함수
  const createCSSLink = (id: string, href: string): HTMLLinkElement => {
    let link = document.getElementById(id) as HTMLLinkElement;

    if (link) document.head.removeChild(link);

    link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);

    return link;
  };

  useEffect(() => {
    // 1. 전체 CSS Light <-> Dark Toggle
    const link1 = createCSSLink(
      "main-darkmode",
      isDarkMode ? MAIN_DARK_CSS : MAIN_LIGHT_CSS
    );

    // 2. Markdown Code Block Light <-> Dark Toggle
    const link2 = createCSSLink(
      "md-darkmode",
      isDarkMode ? MD_DARK_CSS : MD_LIGHT_CSS
    );

    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode)); // 값이 변경될 때 로컬스토리지에 저장

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
