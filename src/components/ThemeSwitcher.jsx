import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

function ThemeSwitcher() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("portfolio-mode") !== "light";
  });

  useEffect(() => {
    const mode = dark ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("portfolio-mode", mode);
  }, [dark]);

  return (
    <div className="theme-switcher">
      <button
        className="theme-button"
        onClick={() => setDark(!dark)}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        title={dark ? "Light Mode" : "Dark Mode"}
      >
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  );
}

export default ThemeSwitcher;