"use client";
import styles from "./toogle.module.css";
import { useEffect } from "react";
import DarkMode from "@/svg/dark";
import LightMode from "@/svg/light";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store/store";
import { setTheme } from "@/redux/slice/theme";
import MobileDark from "@/svg/mobileDark";
import MobileLight from "@/svg/mobileLight";

const ThemeToggleButton = () => {
  const theme = useAppSelector((store) => store.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("body")?.setAttribute("data-theme", "dark");
    } else {
      document.querySelector("body")?.setAttribute("data-theme", "light");
    }
  }, [theme]);

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };

  return (
    <div className={styles.toggleContainer}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={handleToggle}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        />
        <span className={styles.slider}>
          <LightMode className={styles.icon} />
          <DarkMode className={styles.icon} />
        </span>
      </label>

      <div className={styles.mobileSwitch}>
        <button
          className={styles.thememobile}
          onClick={handleToggle}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? <MobileDark /> : <MobileLight />}
        </button>
      </div>
    </div>
  );
};

export default ThemeToggleButton;
