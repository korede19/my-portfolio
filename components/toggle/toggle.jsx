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
    if (theme === "dark")
      document.querySelector("body")?.setAttribute("data-theme", "dark");
    else document.querySelector("body")?.setAttribute("data-theme", "light");
  });

  return (
    <>
      <div className={styles.btnContain}>
        <button
          className={styles.themeBtn}
          onClick={() => dispatch(setTheme("light"))}
          disabled={theme === "light"}
        >
          <DarkMode />
        </button>
        <button
          className={styles.themeBtn}
          onClick={() => dispatch(setTheme("dark"))}
          disabled={theme === "dark"}
        >
          <LightMode />
        </button>
      </div>
      <div className={styles.mobileSwitch}>
        <button
          className={styles.thememobile}
          onClick={() =>
            dispatch(setTheme(theme === "light" ? "dark" : "light"))
          }
        >
          {theme === "light" ? <MobileDark /> : <MobileLight />}
        </button>
      </div>
    </>
  );
};

export default ThemeToggleButton;
