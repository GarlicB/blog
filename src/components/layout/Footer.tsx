// Footer.tsx
import React, { useContext } from "react";
import { Context } from "../Context";

const Footer: React.FC = () => {
  const { toggleTheme, isDarkMode } = useContext(Context);

  console.log(isDarkMode);

  return (
    <div className="footer">
      <div>Copyright © 2022. GarlicB All rights reserved.</div>
      <div onClick={toggleTheme}>{isDarkMode ? "🌙 " : "☀️"}</div>
    </div>
  );
};

export default Footer;
