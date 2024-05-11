import { useEffect, useState } from "react";

const Moon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-4 sm:size-7"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);

const Sun = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-4 sm:size-7"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>
);

export const DarkModeSwitch = () => {
  const [isDark, setIsDark] = useState(false);

  const setDark = () => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    localStorage.removeItem("theme");
    setIsDark(true);
  };

  const setLight = () => {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
    setIsDark(false);
  };

  const toggleMode = () => {
    if (isDark) {
      setLight();
    } else {
      setDark();
    }
  };
  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);
  return (
    <button
      className="text-gray-400 dark:text-yellow-400 hover:bg-slate-200 p-2 flex items-center justify-center rounded-md dark:hover:bg-slate-700"
      onClick={toggleMode}
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
};
