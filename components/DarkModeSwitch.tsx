import { useEffect, useState } from "react";

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
    <label className="relative block h-6 w-11">
      <input
        onChange={toggleMode}
        type="checkbox"
        checked={isDark ? true : false}
        className="opacity-0 peer"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 duration-300 bg-gray-200 cursor-pointer rounded-3xl before:absolute before:w-6 before:h-6 before:rounded-full before:bg-yellow-200 peer-checked:before:translate-x-6 peer-checked:before:bg-black before:transition-all "></div>
    </label>
  );
};
